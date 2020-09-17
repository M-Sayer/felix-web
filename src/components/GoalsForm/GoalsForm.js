import React, { useState, useEffect } from 'react';
import moment from 'moment';
import GoalsService from '../../services/goals-service';

const GoalsForm = (props) => {
  const { method } = props;
  const [ goal, setGoal ] = useState({id: '/'});
  const [ error, setError ] = useState(null);

  useEffect(() => {
    if(props.method === 'PATCH') {
      // Make an async call to fetch the goal
      // Store the goal in state
      // Populate form fields with goal
    }
  });

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const name = e.target['name'].value;
    const goal_amount = e.target['goal_amount'].value;

    // end_date
    // Where month = 0-11 (zero-indexed)
    // Where year = YYYY
    // Where day = DD
    const end_date = e.target['end_date'].value;
    
    // For adding a goal
    // Calculate contribution amount
    // Weekly by default 
    // Where number of weeks = Days from now to target date divided by 7
    // Where contribution amount = Goal amount divided by number of weeks
    // Simple enough

    const currentDate = moment();
    // Temporary
    const targetDate = moment(['2020', '09', '17']).format();
    const daysFromCurrentDate =  targetDate.diff(currentDate, 'days') + 1;
    const weeks = Math.floor(daysFromCurrentDate/7);
    const contribution_amount = Number(goal_amount)/weeks;

    // For editing a goal
    // Cases:
    // If user does not change goal_amount
    // If user changes goal_amount
    // If user does not change contribution_amount
    // If user changes contribution_amount

    const newGoal = {
      name,
      goal_amount,
      contribution_amount,
      end_date,
    }

    // POST/PATCH goal to server

    try {
      const response = await GoalsService.createUpdateGoal(newGoal, goal.id, method);
      console.log(response);
    }
    catch(error) {
      console.log(error)
    }

  }

  return (
    <form
      onSubmit={(e) =>
        handleSubmitForm(e)
      }
    >
      {error &&
        <div
          className='error'
          role='alert'
        >
          {error}
        </div>
      }
      <label
        htmlFor='name'
      >
        Name: 
      </label>
      <input
        defaultValue={
          (method === 'edit')
          ? goal.name
          : ''
        }
        id='name'
        onChange={() => {

        }}
        method='text'
      />

      <label
        htmlFor='goal_amount'
      >
        Amount: 
      </label>
      <input
        defaultValue={
          (method === 'edit')
          ? goal.goal_amount
          : ''
        }
        id='goal_amount'
        method='text'
      />

      <label
        htmlFor='end_date'
      >
        End Date: 
      </label>
      <input
        defaultValue={
          (method === 'edit')
          ? goal.goal_amount
          : ''
        }
        id='end_date'
        method='text'
      />

      <button>
        Submit
      </button>
    </form>
  )
}
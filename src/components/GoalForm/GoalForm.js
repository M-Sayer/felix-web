import React, { useState, useEffect } from 'react';
import moment from 'moment';
import GoalsService from '../../services/goals-service';

const GoalForm = (props) => {
  console.log(props)
  const { type = 'add', id = '' } = props.match.params;
  const method = (type === 'add') ? 'POST': 'PATCH';

  const [ goal, setGoal ] = useState({});
  const [ error, setError ] = useState(null);

  useEffect(() => {
    if(type === 'edit') {
      async function setInitialFormValues(id) {
        console.log('Meow')
        try {
          const goal = await GoalsService.getGoal(id);
          setGoal(goal);
        }
        catch(error) {
          setError(error);
        }
      }
      setInitialFormValues(id);
    }
  }, [id, type]);

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const name = e.target['name'].value;
    const goal_amount = e.target['goal_amount'].value;

    // Where month = 0-11 (zero-indexed)
    // Where year = YYYY
    // Where day = DD
    const end_date = e.target['end_date'].value;
    
    // Calculate contribution amount
    // Weekly by default 
    // Where number of weeks = Days from now to target date divided by 7
    // Where contribution amount = Goal amount divided by number of weeks
    const currentDate = moment();

    // Temporary
    const targetDate = moment(['2020', '09', '17']);

    // End-date-exclusive, hence +1
    const daysFromCurrentDate =  targetDate.diff(currentDate, 'days') + 1;
    console.log(daysFromCurrentDate, 'days')
    const weeks = Math.floor(daysFromCurrentDate/7);
    console.log(weeks, 'weeks')
    const contribution_amount = Number(goal_amount)/weeks;
    console.log(Number(goal_amount)/weeks)

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
      const response = await GoalsService.createUpdateGoal(newGoal, id, method);
      console.log(response);
      props.history.push('/');
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
          (type === 'edit')
          ? goal.name
          : ''
        }
        id='name'
        onChange={() => {

        }}
        type='text'
      />

      <label
        htmlFor='goal_amount'
      >
        Amount: 
      </label>
      <input
        defaultValue={
          (type === 'edit')
          ? goal.goal_amount
          : ''
        }
        id='goal_amount'
        type='text'
      />

      <label
        htmlFor='end_date'
      >
        End Date: 
      </label>
      <input
        defaultValue={
          (type === 'edit')
          ? goal.end_date
          : ''
        }
        id='end_date'
        type='text'
      />

      <button>
        Submit
      </button>
    </form>
  )
}

export default GoalForm;
import React, { useState, useEffect } from 'react';
import GoalsService from '../../services/goals-service';

import moment from 'moment';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const GoalForm = (props) => {
  const { type = 'add', id = '' } = props.match.params;
  const method = (type === 'add') ? 'POST': 'PATCH';

  const [ goal, setGoal ] = useState({});
  const [ error, setError ] = useState(null);

  const [ date, setDate ] = useState(new Date());

  useEffect(() => {
    if(type === 'edit') {
      async function setInitialFormValues(id) {
        try {
          const goal = await GoalsService.getGoal(id); 
          setDate(new Date(goal.end_date));
          setGoal(goal);
        }
        catch(error) {
          setError(error);
        }
      }
      setInitialFormValues(id);
    }
  }, [id, type]);

  const handleChangeDate = (date) => {
    setDate(date);
    console.log(date);
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const name = e.target['name'].value;
    const goal_amount = e.target['goal_amount'].value;
    const end_date = moment(date); // Native date object
    
    const currentDate = moment();

    const daysFromCurrentDate =  end_date.diff(currentDate, 'days');
    console.log(daysFromCurrentDate, 'days');

    // Refactor
    let numberOfSundays = 0;

    for(let i = 0; i <= daysFromCurrentDate; i++) {
      if(moment().add(i, 'days').day() === 0) {
        numberOfSundays += 1;
      }
    }

    if(numberOfSundays === 0) {
      numberOfSundays = 1;
    }
    
    let contribution_amount = Math.ceil(((Number(goal_amount) / numberOfSundays) * 100) / 100);
    console.log(contribution_amount);

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

      <DatePicker
        selected={date}
        onChange={handleChangeDate}
      />

      <button>
        Submit
      </button>
    </form>
  )
}

export default GoalForm;
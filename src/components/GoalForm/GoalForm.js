import React, { useContext, useState, useEffect } from 'react';
import moment from 'moment';

import GoalsContext from '../../contexts/GoalsContext';
import GoalsService from '../../services/goals-service';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const GoalForm = (props) => {
  const { countNumberOfSundays, calculateContributionAmount } = useContext(GoalsContext);

  const { type = 'add', id = '' } = props.match.params;
  const method = (type === 'add') ? 'POST': 'PATCH';

  const [ goal, setGoal ] = useState({});

  // Set initial date to current date
  // Using native date object
  // DatePicker updated to deprecate using Moment.js
  const [ date, setDate ] = useState(new Date());

  const [ error, setError ] = useState(null);

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
  }, [type, id]);

  const handleChangeDate = (date) => {
    // Form picks up date selected by user and sets state var date
    setDate(date);
  }

  const handleSubmitForm = async (e) => {
    setError(null);
    e.preventDefault();

    const name = e.target['name'].value;
    const goal_amount = e.target['goal_amount'].value;

    // Form picks up date selected by user and sets state var date
    // Use moment wrapper: native date object -> moment object
    // For accuracy & consistency
    const end_date = moment(date);
    const currentDate = moment();

    // Use moment method .diff to calculate number of days from current to end date
    const daysFromCurrentDate =  end_date.diff(currentDate, 'days');

    // Contribution amount is moved from allowance to goals every Sunday, 00:00 UTC
    // Calculate number of Sundays (and not number of weeks)
    // Consider the edge case when there are 3 Sundays but only 20 days
    // Conclusion: Number of weeks from now is not a reliable measure given the above edge case
    const numberOfSundays = countNumberOfSundays(daysFromCurrentDate);
    const contribution_amount = calculateContributionAmount(Number(goal_amount), numberOfSundays);
    
    const newGoal = {
      name,
      goal_amount,
      contribution_amount,
      end_date,
    }

    // POST/PATCH goal to server
    try {
      await GoalsService.createUpdateGoal(newGoal, id, method);
      props.history.push('/');
    }
    catch({ error }) {
      setError(error);
    }

  }

  return (
    <form
      className='formContainer'
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
      </label>
      <input
        className='formInput'
        defaultValue={
          (type === 'edit')
          ? goal.name
          : ''
        }
        id='name'
        onChange={() => {

        }}
        placeholder='name'
        type='text'
      />

      <label
        htmlFor='goal_amount'
      >
      </label>
      <input
        className='formInput'
        defaultValue={
          (type === 'edit')
          ? goal.goal_amount
          : ''
        }
        id='goal_amount'
        placeholder='amount'
        type='text'
      />

      <DatePicker
        className='formInput'
        selected={date}
        onChange={handleChangeDate}
        placeholder={date}
      />
      <div>
        <button
          className='btn secondaryBtnALT'
        >
          Submit
        </button>
        <button
          className='btn cancel secondaryBtnALT'
          onClick={() => {
            props.history.push('/')
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default GoalForm;
// import React, { Component } from 'react';
import React, { useState } from 'react'; 
import moment from 'moment';

const nullGoal = {
  'id' : null,
  'name': null,
  'user_id' : null,
  'goal_amount' : null,
  'contribution_amount' : null,
  'current_amount' : null,
  'end_date' : null
}

const GoalsContext = React.createContext({
  goal: nullGoal,
  goals: [],
  setGoal: () => {},
  setGoals: () => {},
  setError: () => {},
});

export default GoalsContext;

export const GoalsProvider = (props) => {
  const [error, setError] = useState(null);
  const [goal, setGoal] = useState(nullGoal);
  const [goals, setGoals] = useState([]);

  const countNumberOfSundays = (daysFromCurrentDate) => {
    let numberOfSundays = 0;

    for(let i = 0; i <= daysFromCurrentDate; i++) {
      if(moment().add(i, 'days').day() === 0) {
        numberOfSundays += 1;
      }
    }

    if(numberOfSundays === 0) {
      numberOfSundays = 1;
    }

    return numberOfSundays;
  }

  const calculateContributionAmount = (amount, frequency) => {
    Math.ceil(((amount / frequency) * 100) / 100);
  }

  return (
    <GoalsContext.Provider 
      value={{ 
        goal,
        goals,

        setGoal,
        setGoals,

        error,
        setError,

        countNumberOfSundays,
        calculateContributionAmount,
      }}>
      {props.children}
    </GoalsContext.Provider>
  )
}
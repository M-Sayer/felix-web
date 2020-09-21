import React, { useContext, useEffect } from 'react';
import GoalsContext from '../../contexts/GoalsContext';
import GoalsService from '../../services/goals-service';

const GoalsOverview = (props) => {
  const { 
    goals = [],
    setGoals,
    setError,
  } = useContext(GoalsContext);

  useEffect(() => {
    async function getUserGoals() {
      try {
        const goals = await GoalsService.getGoals();
        setGoals(goals);
      }
      catch({ error }) {
        setError(error)
      }
    }
    getUserGoals();
  }, [setGoals, setError]);

  const renderGoals = (goals) => {
    const goalsList = [];
    let i = 0;

    for(const goal of goals) {
      console.log(goal)
      if(i < 3 && i < goals.length && !goal.completed) {
        goalsList.push((
          <ul
            key={i}
          >
            <li>
              Name: {goal.name}
            </li>
            <li>
              Current Amount: {goal.current_amount}/Goal Amount: {goal.goal_amount}
            </li>
          </ul>
        ));
        i++;
      }
    }

    return (
      <>
        <ul>
          {goalsList}
        </ul>
        <button
          onClick={() =>
            props.history.push('/goals')}
            type='click'
        >
          See All Goals
        </button>
      </>
    );
  }

  return (
    <>
      <h2>
        Goals Overview
      </h2>
      <button
          onClick={() =>
            props.history.push('/goal/add/ ')}
            type='click'
        >
          Add a New Goal
      </button>
      {(goals.length)
          ? renderGoals(goals)
          : ''
      }
    </>
  );
}

export default GoalsOverview;
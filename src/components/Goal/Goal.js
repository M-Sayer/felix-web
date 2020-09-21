import React, { useContext, useEffect } from 'react';
import GoalsContext from '../../contexts/GoalsContext';
import GoalsService from '../../services/goals-service';

const Goal = (props) => {
  const { 
    goal = {},
    setGoal 
  } = useContext(GoalsContext);

  useEffect(() => {
    async function getGoal() {
      try {
        const goal = await GoalsService.getGoal(props.match.params.id);
        setGoal(goal);
      }
      catch(error) {
        console.log(error);
      }
    }
    getGoal();

  }, [setGoal, props.match.params]);

  const handleDeleteGoal = async () => {
    try {
      const response = await GoalsService.deleteGoal(goal.id);
      props.history.push(`/goals`);
      console.log(response);
    }
    catch(error) {
      console.log(error);
    }
  }

  return (
    <>
      <ul>
        <li>
          Name: {goal.name}
        </li>
        <li>
          Goal Amount: {goal.goal_amount}
        </li>
        <li>
          Current Amount: {goal.current_amount}
        </li>
        <li>
          Weekly Contribution Amount: {goal.contribution_amount}
        </li>
        <li>
          Target End Date: {goal.end_date}
        </li>
      </ul>
      <button
        onClick={() =>
          props.history.push(`/goal/edit/${goal.id}`)
        }
      >
        Edit
      </button>
      <button
        onClick={() =>
          handleDeleteGoal()
        }
      >
        Delete
      </button>
    </>
  )
}

export default Goal;
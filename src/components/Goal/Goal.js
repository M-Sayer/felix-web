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

    setGoal();
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
    <ul>
      <li>
        {goal.id}
      </li>
      <li>
        {goal.name}
      </li>
      <li>
        {goal.goal_amount}
      </li>
      <li>
        {goal.contribution_amount}
      </li>
      <li>
        {goal.current_amount}
      </li>
      <li>
        {goal.end_date}
      </li>
      <li>
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
      </li>
    </ul>
  )
}

export default Goal;
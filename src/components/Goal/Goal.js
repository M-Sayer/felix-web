import React, { useContext, useEffect } from 'react';
import GoalsContext from '../../contexts/GoalsContext';

const Goal = (props) => {
  const { 
    goal = {},
    setGoal 
  } = useContext(GoalsContext);

  useEffect(() => {
    // Fetch call to get a specific goal
    // Based on id in params

    // Test goal
    const testGoal = {
      'id' : 6,
      'user_id' : 6,
      'name': 'Poker Money',
      'goal_amount' : 100,
      'contribution_amount' : 25,
      'current_amount' : 0,
      'end_date' : '2020-09-16T17:28:55.263Z',
    }

    setGoal(testGoal);
  }, [setGoal])

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
    </ul>
  )
}

export default Goal;
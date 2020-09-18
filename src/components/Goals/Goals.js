import React, { useContext, useEffect } from 'react';
import GoalsContext from '../../contexts/GoalsContext';
import GoalsService from '../../services/goals-service';

const Goals = (props) => {
  const {
    goals = [],
    setGoals,
  } = useContext(GoalsContext);

  useEffect(() => {
    async function getUserGoals() {
      try {
        const goals = await GoalsService.getGoals();
        setGoals(goals);
      }
      catch(error) {
        console.log(error);
      }
    }
    getUserGoals();
  }, [setGoals]);

  const renderGoals = (goals) => {
    return goals
      .map((goal, i) => (
        <ul
          key={i}
        >
          <li>
            {goal.name}
          </li>
          <li>
            {goal.id}
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
                props.history.push(`/goal/${goal.id}`)
              }
            >
              See More Details
            </button>
          </li>
        </ul>
      ));
  }

  return (
    <>
      <h2>
        Goals
      </h2>
      <ul>
        {
          (goals.length)
            ? renderGoals(goals)
            : ''
        }
      </ul>
    </>
  )
}

export default Goals;
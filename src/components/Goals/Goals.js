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
      .map((goal, i) => {
        if(!goal.completed) {
          return (
            <ul
              key={i}
            >
              <li>
                Name: {goal.name}
              </li>
              <li>
                Current Amount: {goal.current_amount} / Goal Amount: {goal.goal_amount}
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
          );
        }
        return '';
      });
  }

  return (
    <article>
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
    </article>
  )
}

export default Goals;
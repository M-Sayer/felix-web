import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GoalsContext from '../../contexts/GoalsContext';
import GoalsService from '../../services/goals-service';
import './Goals.css';

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
            <li
              className='goalsListItem userData2'
              key={i}
            >
              <Link
                className='userData2'
                to={`/goal/${goal.id}`}
              >
                <div
                  className='dataFlexRow'
                >
                  <span>
                    {goal.name}
                  </span>
                  <span>
                    {goal.current_amount} of {goal.goal_amount}
                  </span>
                </div>
              </Link>
            </li>
          );
        }
        return '';
      });
  }

  return (
    <article
      className='goalsContainer'
    >
      <h2
        className='sectionHeader'
      >
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
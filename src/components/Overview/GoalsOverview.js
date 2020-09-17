import React, { useContext } from 'react';
import GoalsContext from '../../contexts/GoalsContext';

const GoalsOverview = (props) => {
  const { goals = [] } = useContext(GoalsContext);

  console.log(goals);

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
        </ul>
      ));
  }

  return (
    <>
      <h2>
        Goals Overview
      </h2>
      <ul>
        {
          (goals.length)
            ? renderGoals(goals)
            : ''
        }
      </ul>
      <button
          onClick={() =>
            props.history.push('/goals')}
            type='click'
        >
          See All Goals
      </button>
    </>
  )
}

export default GoalsOverview;
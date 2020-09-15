import React, { useContext } from 'react';
import GoalsContext from '../../contexts/GoalsContext';

const Goals = () => {
  const {
    goals = [],
  } = useContext(GoalsContext);

  console.log(goals);

  return (
    <>
      Goals
    </>
  )
}

export default Goals;
// import React, { Component } from 'react';
import React, { useState } from 'react'; 

const nullGoal = {
  'id' : null,
  'name': null,
  'user_id' : null,
  'goal_amount' : null,
  'contribution_amount' : null,
  'current_amount' : null,
  'end_date' : null
}

// Refactor later
const GoalsContext = React.createContext({
  goal: nullGoal,
  goals: [],
  setGoal: () => {},
  setGoals: () => {},
});

export default GoalsContext;

export const GoalsProvider = (props) => {
  const [error, setError] = useState(null);
  const [goal, setGoal] = useState(nullGoal);
  const [goals, setGoals] = useState([]);

  // useEffect(() => {
  //   async function getUserGoals() {
  //     try {
  //       const goals = await GoalsService.getGoals();
  //       setGoals(goals);
  //     }
  //     catch(error) {
  //       console.log(error);
  //     }
  //   }
  //   getUserGoals();
  // }, []);

  return (
    <GoalsContext.Provider 
      value={{ 
        goal,
        goals,

        setGoal,
        setGoals,

        error,
        setError
      }}>
      {props.children}
    </GoalsContext.Provider>
  )
}

// export class GoalsProvider extends Component {
//   state = {
//     goal: null, // Change to nullGoal
//     goals: [],
//     error: null
//   }

//   setGoal = (goal) => {
//     this.setState({goal});
//   }

//   setGoals = (goals) => {
//     this.setState({goals});
//   }

//   clearGoals = () => {
//     this.setState({goal: null}); // Change to nullGoal
//   }

//   clearGoals = () => {
//     this.setState({goals: []});
//   }

//   // Pending stretch error handling
//   setError = (error) => {
//     this.setState({error});
//   }

//   render() {
//     return (
//       <GoalsContext.Provider 
//         value={{ 
//           goal: this.state.goal,
//           goals: this.state.goals,

//           setGoal: this.setGoal,
//           setGoals: this.setGoals,
//           clearGoal: this.clearGoal,
//           clearGoals: this.clearGoals,
          
//           error: this.state.error,
//           setError: this.state.setError,
//         }}>
//         {this.props.children}
//     </GoalsContext.Provider>
//     );
//   }
// }
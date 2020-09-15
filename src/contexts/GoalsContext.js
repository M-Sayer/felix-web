// import React, { Component } from 'react';
import React, { useEffect, useState } from 'react'; 
import GoalsService from '../services/goals-service';

// const nullGoal = {
//   'id' : null,
//   'name' : null,
//   'date_created' : null,
//   'amount' : null,
//   'subType' : null
// }

// Refactor later
const GoalsContext = React.createContext({
  goal: {},
  goals: [],
  setGoal: () => {},
  setGoals: () => {},
});

export default GoalsContext;

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

export const GoalsProvider = (props) => {
  const [goal, setGoal] = useState({});
  const [goals, setGoals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getUserGoal() {
      try {
        // const userGoals = await GoalsService.getGoals();
        const { goals } = await GoalsService.getGoals();

        console.log(goals);
        setGoals(goals);
      }
      catch(error) {
        console.log(error);
      }
    }
    getUserGoal();
  }, []);

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
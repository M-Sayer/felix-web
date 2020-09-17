// import React, { Component } from 'react';
import React, { useEffect, useState } from 'react'; 
import GoalsService from '../services/goals-service';

const nullGoal = {
  'id' : null,
  'name': null,
  'user_id' : null,
  'goal_amount' : null,
  'contribution_amount' : null,
  'current_amount' : null,
  'end_date' : null
}

const tempGoal = {
  'id' : 6,
  'user_id' : 6,
  'name': 'Poker Money',
  'goal_amount' : 100,
  'contribution_amount' : 25,
  'current_amount' : 0,
  'end_date' : '2020-09-16T17:28:55.263Z',
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
  useEffect(() => {
    async function getUserGoals() {
      try {
        // const { goals } = await GoalsService.getGoals();

        setGoals([tempGoal]);
      }
      catch(error) {
        console.log(error);
      }
    }
    getUserGoals();
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
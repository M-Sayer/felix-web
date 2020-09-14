import React, { Component } from 'react';

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
  setGoals: () => {},
});

export default GoalsContext;

export class GoalsProvider extends Component {
  state = {
    goal: null, // Change to nullGoal
    goals: [],
    error: null
  }

  setGoal = (goal) => {
    this.setState({goal});
  }

  setGoals = (goals) => {
    this.setState({goals});
  }

  clearGoals = () => {
    this.setState({goal: null}); // Change to nullGoal
  }

  clearGoals = () => {
    this.setState({goals: []});
  }

  // Pending stretch error handling
  setError = (error) => {
    this.setState({error});
  }

  render() {
    return (
      <GoalsContext.Provider 
        value={{ 
          goal: this.state.goal,
          goals: this.state.goals,

          setGoal: this.setGoal,
          setGoals: this.setGoals,
          clearGoal: this.clearGoal,
          clearGoals: this.clearGoals,
          
          error: this.state.error,
          setError: this.state.setError,
        }}>
        {this.props.children}
    </GoalsContext.Provider>
    );
  }
}

// export const TransactionsProvider = (props) => {
//   const [transaction, setTransaction] = useState({});
//   const [transactions, setTransactions] = useState([]);
//   const [error, setError] = useState(null);

//   const clearTransaction = () => setTransaction(nullTransaction);
//   const clearTransactions = () => setTransactions([]);

//   // Filter transactions by property and value
//   const filterTransactions = (transactions, property, value) => {
//     return transactions.filter(trx => trx[property] === value);
//   }
  
//   // Sort transactions by property
//   const sortTransactions = (transactions, property = null) => {
//     if(property === null) {
//       return transactions.sort((a, b) => a - b);
//     }
//     return transactions.sort((a, b) => a[property] - b[property]);
//   }

//   return (
//     <TransactionsContext.Provider 
//       value={{ 
//         transaction,
//         transactions,

//         setTransaction,
//         setTransactions,
//         clearTransaction,
//         clearTransactions,

//         filterTransactions,
//         sortTransactions,

//         error,
//         setError
//       }}>
//       {props.children}
//     </TransactionsContext.Provider>
//   )
// }
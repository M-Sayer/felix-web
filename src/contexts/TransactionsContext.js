import React, { Component } from 'react';

const nullTransaction = {
  'id' : null,
  'name' : null,
  'description' : null,
  'date_created' : null,
  'amount' : null,
  'category' : null
}

const emptyTransactionForm = {
  name : '',
  type : '',
  description : '',
  amount : 0,
  category : ''
}

// Refactor later
const TransactionsContext = React.createContext({
  transactions: [],
  transactionForm : emptyTransactionForm,
  setTransactions : ()=>{},
  clearTransactions : ()=>{},
  clearError: ()=>{},
  filterTransactions : ()=>{},
  sortTransactions : ()=>{},
  setError : () => {},
})

export default TransactionsContext;

export class TransactionsProvider extends Component {
  state = {
    transactions: [],
    error: null
  }

  setTransactions = (transactions) => {
    this.setState({transactions});
  }

  clearTransactions = () => {
    this.setState({transactions: []});
  }

  clearError = () => this.setError({error : null})

  filterTransactions = (transactions, property, value) => {
    return transactions.filter(trx => trx[property] === value);
  }

  sortTransactions = (transactions, property = null) => {
    if(property === null) {
      return transactions.sort((a, b) => a - b);
    }
    return transactions.sort((a, b) => a[property] - b[property]);
  }

  // Pending stretch error handling
  setError = (error) => {
    this.setState({error});
  }

  render() {
    return (
      <TransactionsContext.Provider 
        value={{ 
          transactions: this.state.transactions,
          setTransactions: this.setTransactions,
          clearTransactions: this.clearTransactions,
          clearError: this.clearError,

          filterTransactions: this.filterTransactions,
          sortTransactions: this.sortTransactions,

          error: this.state.error,
          setError: this.setError,
        }}>
        {this.props.children}
    </TransactionsContext.Provider>
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
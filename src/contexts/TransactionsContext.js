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
  transaction: nullTransaction,
  transactions: [],
  type: null,
  transactionForm : emptyTransactionForm,
  setTransaction : ()=>{},
  setTransactions : ()=>{},
  setTransactionForm : () =>{},
  setTransactionFormChange: ()=>{},
  setType: ()=>{},
  clearTransaction : ()=>{},
  clearTransactions : ()=>{},
  clearTransactionForm : () => {},
  clearType: ()=>{},
  filterTransactions : ()=>{},
  sortTransactions : ()=>{},
  setError : () => {},
})

export default TransactionsContext;

export class TransactionsProvider extends Component {
  state = {
    transaction: nullTransaction,
    transactions: [],
    transactionForm : emptyTransactionForm,
    type : null,
    error: null
  }

  setTransaction = (transaction) => {
    this.setState({transaction});
  }

  setTransactions = (transactions) => {
    this.setState({transactions});
  }

  //called on if user is on view single transaction page
  setTransactionForm = () => {
    console.log(this.state.transaction)
    this.setState({transactionForm : this.state.transaction});
  }

  setTransactionFormChange = (name,value) =>{
    this.setState({
      transactionForm :{
         ...this.state.transactionForm ,
         [name] : value} })
  }

  setType = type => this.setState({type})

  clearTransaction = () => {
    this.setState({transaction: nullTransaction});
  }

  clearTransactionForm = () => {
    this.setState({transactionForm: nullTransaction});
  }

  clearTransactions = () => {
    this.setState({transactions: []});
  }

  clearType = () => this.setState({type : null})

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
          transaction: this.state.transaction,
          transactions: this.state.transactions,
          transactionForm : this.state.transactionForm,
          type : this.state.type,

          setTransaction: this.setTransaction,
          setTransactions: this.setTransactions,
          setTransactionForm: this.setTransactionForm,
          setTransactionFormChange: this.setTransactionFormChange,
          setType: this.setType,
          clearTransaction: this.clearTransaction,
          clearTransactions: this.clearTransactions,
          clearTransactionForm : this.clearTransactionForm,
          clearType: this.clearType,

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
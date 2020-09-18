import React, { Component } from 'react';

const nullTransaction = {
  'id' : null,
  'name' : null,
  'date_created' : null,
  'amount' : null,
  'subType' : null
}

const TransactionsContext = React.createContext({
  transaction: {},
  transactions: [],
  setTransactions: () => {},
  sortTransactions: () => {},
});

export default TransactionsContext;

export class TransactionsProvider extends Component {
  state = {
    transaction: nullTransaction,
    transactions: [],
    error: null
  }

  setTransaction = (transaction) => {
    this.setState({transaction});
  }

  setTransactions = (transactions) => {
    this.setState({transactions});
  }

  clearTransaction = () => {
    this.setState({transaction: nullTransaction});
  }

  clearTransactions = () => {
    this.setState({transactions: []});
  }

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

          setTransaction: this.setTransaction,
          setTransactions: this.setTransactions,
          clearTransaction: this.clearTransaction,
          clearTransactions: this.clearTransactions,

          filterTransactions: this.filterTransactions,
          sortTransactions: this.sortTransactions,

          error: this.state.error,
          setError: this.state.setError,
        }}>
        {this.props.children}
    </TransactionsContext.Provider>
    );
  }
}
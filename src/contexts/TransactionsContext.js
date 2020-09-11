import React, { useState } from 'react';

const nullTransaction = {
  'id' : null,
  'name' : null,
  'date_created' : null,
  'amount' : null,
  'subType' : null
}

// Refactor later
const TransactionsContext = React.createContext({
  // transaction: {},
  // transactions: [],
  // setTransactions: () => {},
  // sortTransactions: () => {},
});

export default TransactionsContext;

export const TransactionsProvider = (props) => {
  const [transaction, setTransaction] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);

  const clearTransaction = () => setTransaction(nullTransaction);
  const clearTransactions = () => setTransactions([]);

  // Filter transactions by property and value
  const filterTransactions = (transactions, property, value) => {
    return transactions.filter(trx => trx[property] === value);
  }
  
  // Sort transactions by property
  const sortTransactions = (transactions, property = null) => {
    if(property === null) {
      return transactions.sort((a, b) => a - b);
    }
    return transactions.sort((a, b) => a[property] - b[property]);
  }

  return (
    <TransactionsContext.Provider 
      value={{ 
        transaction,
        transactions,

        setTransaction,
        setTransactions,
        clearTransaction,
        clearTransactions,

        filterTransactions,
        sortTransactions,

        error,
        setError
      }}>
      {props.children}
    </TransactionsContext.Provider>
  )
}
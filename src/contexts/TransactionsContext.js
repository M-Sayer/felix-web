import React, { useState } from 'react';

// Refactor later
const TransactionsContext = React.createContext({
  transaction: {},
  transactions: [],
  setTransactions: () => {},
  sortTransactions: () => {},
});

export default TransactionsContext;

export const TransactionsProvider = (props) => {
  const [transaction, setTransaction] = useState([]);
  const [transactions, setTransactions] = useState([]);

  // Filter transactions by property
  const filterTransactions = (transactions, property, filter) => {
    return transactions.filter(trx => trx[property] === filter);
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

        filterTransactions,
        sortTransactions,
      }}>
      {props.children}
    </TransactionsContext.Provider>
  )
}
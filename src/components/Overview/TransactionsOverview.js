import React, { useContext, useEffect, useState } from 'react';
import TransactionsContext from '../../contexts/TransactionsContext';
import UserService from '../../services/user-service';

const TransactionsOverview = (props) => {
  const { 
    // transactions = [],
    // setTransactions,
    sortTransactions,
  } = useContext(TransactionsContext);

  const [transactions, setTransactions] = useState([]);

  // Show only first 3
  const renderTransactions = (transactions) => {
    return transactions.map((trx, i) => {
      return (
        <li 
          key={i}
        >
            {trx.transaction_category || trx.expense_category}
            {trx.income_amount || trx.expense_amount}
        </li>
      );
    });
  }

  useEffect(() => {
    async function getUserTransactions() {
      try {
        const { income, expenses } = await UserService.getUserTransactions();

        const sortedTransactions = sortTransactions([...income, ...expenses], 'date_created');

        setTransactions(sortedTransactions);
      }
      catch(error) {
        console.log(error);
      }
    }
    getUserTransactions();
  }, [setTransactions, sortTransactions]);

  return (
    <>
      <h2>
        Transactions Overview
      </h2>
      <ul>
        {
          (transactions.length)
            ? renderTransactions(transactions)
            : ''
        }
      </ul>
      <button
        onClick={() =>
          props.history.push('/transactions')}
          type='click'
      >
        See All Transactions
      </button>
    </>
  );
}

export default TransactionsOverview;
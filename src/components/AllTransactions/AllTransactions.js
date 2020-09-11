import React, { useContext, useEffect } from 'react';
import TransactionsContext from '../../contexts/TransactionsContext';
import UserService from '../../services/user-service';

const AllTransactions = (props) => {
  const { 
    transactions = [],
    setTransaction,
    setTransactions,
    sortTransactions,
  } = useContext(TransactionsContext);

  const renderTransactions = (transactions) => {
    return transactions.map((trx, i) => {
      return (
        <li 
          key={i}
        >
          {trx.transaction_category || trx.expense_category}
          {trx.income_amount || trx.expense_amount}
          <button
            onClick={() => {
              // Instead of setting transaction state object
              // That resets on page refresh
              // Have some unique id/name as params
              // Or some other solid solution
              setTransaction(trx);
              props.history.push(`/transaction`)
              }}
          >
            See More Details
          </button>
        </li>
      );
    });
  }

  useEffect(() => {
    async function getUserTransactions() {
      try {
        const { income, expenses } = await UserService.getUserTransactions();

        const sortedTransactions = sortTransactions([...income, ...expenses], 'date_created');
        console.log('Meow')
        setTransactions(sortedTransactions);
      }
      catch(error) {
        console.log(error);
      }
    }
    getUserTransactions();
  }, []);

  return (
    <>
      <h2>
        All Transactions
      </h2>
      <ul>
        {
          (transactions.length)
            ? renderTransactions(transactions)
            : ''
        }
      </ul>
    </>
  );
}

export default AllTransactions;
import React, { useContext, useEffect } from 'react';
import UserContext from '../../contexts/UserContext';
import UserService from '../../services/user-service';


function TransactionsOverview() {
  // Fix this
  const { 
    transactions,
    setIncomeTransactions,
    setExpenseTransactions,
    setTransactions,
  } = useContext(UserContext);

  function sortTransactions(transactions, property = null) {
    if(property === null) {
      return transactions.sort((a, b) => a - b);
    }
    return transactions.sort((a, b) => a[property] - b[property]);
  }

  function renderTransactionList(transactions) {
    console.log(transactions)
    return transactions.map((trx, i) => {
      return (
        <li key={i}>
          {trx.transaction_category || trx.expense_category} {trx.income_amount || trx.expense_amount}
        </li>
      );
    });
  }

  useEffect(() => {
    async function getUserTransactions() {
      try {
        const response = await UserService.getUserTransactions();
        setIncomeTransactions(response.income);
        setExpenseTransactions(response.expenses);
        const sortedTransactions = sortTransactions([...response.income, ...response.expenses], 'date_created');
        setTransactions(sortedTransactions);
      }
      catch(error) {
        console.log(error)
      }
    }
    getUserTransactions();
  }, [setIncomeTransactions, setExpenseTransactions, setTransactions]);

  return (
    <>
      <h2>
        Transactions Overview
      </h2>
      <ul>
        {renderTransactionList(transactions)}
      </ul>
    </>
  );
}

export default TransactionsOverview;
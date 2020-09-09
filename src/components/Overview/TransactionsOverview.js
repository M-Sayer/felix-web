import React, { useContext, useEffect } from 'react';
import UserContext from '../../contexts/UserContext';
import UserService from '../../services/user-service';


function TransactionsOverview() {
  // Fix this
  const { 
    setIncomeTransactions,
    setExpenseTransactions,
  } = useContext(UserContext);

  useEffect(() => {
    async function getUserTransactions() {
      try {
        const response = await UserService.getUserTransactions();
        setIncomeTransactions(response.income);
        setExpenseTransactions(response.expense);
      }
      catch(error) {
        console.log(error)
      }
    }
    getUserTransactions();
  }, [setIncomeTransactions, setExpenseTransactions]);

  return (
    <>
      Transactions Overview
    </>
  );
}

export default TransactionsOverview;
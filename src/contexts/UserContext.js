import React, { useState } from 'react';

// Refactor later
const UserContext = React.createContext({
  user: {},
  incomeTransactions: [],
  expenseTransactions: [],
  transactions: [],
  setUser: () => {},
  setIncomeTransactions: () => {},
  setExpenseTransactions: () => {},
  setTransactions: () => {},
});

export default UserContext;

export const UserProvider = (props) => {
  const [user, setUser] = useState({});
  const [incomeTransactions, setIncomeTransactions] = useState([]);
  const [expenseTransactions, setExpenseTransactions] = useState([]);
  const [transactions, setTransactions] = useState([]);

  return (
    <UserContext.Provider 
      value={{ 
        user,
        incomeTransactions,
        expenseTransactions,
        transactions,
        setUser,
        setIncomeTransactions,
        setExpenseTransactions,
        setTransactions,
      }}>
      {props.children}
    </UserContext.Provider>
  )
}
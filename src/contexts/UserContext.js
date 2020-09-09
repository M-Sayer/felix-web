import React, { useState } from 'react';

// Refactor later
const UserContext = React.createContext({
  user: {},
  setUser: () => {},
});

export default UserContext;

export const UserProvider = (props) => {
  const [user, setUser] = useState({});
  const [incomeTransactions, setIncomeTransactions] = useState([]);
  const [expenseTransactions, setExpenseTransactions] = useState([]);


  return (
    <UserContext.Provider 
      value={{ 
        user,
        incomeTransactions,
        expenseTransactions,
        setUser,
        setIncomeTransactions,
        setExpenseTransactions,
      }}>
      {props.children}
    </UserContext.Provider>
  )
}
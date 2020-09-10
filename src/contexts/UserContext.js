import React, { useState } from 'react';

// Refactor later
const UserContext = React.createContext({
  user: {},
  setUser: () => {},
});

export default UserContext;

export const UserProvider = (props) => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider 
      value={{ 
        user,
        setUser,
      }}>
      {props.children}
    </UserContext.Provider>
  )
}
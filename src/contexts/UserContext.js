import React, { useState } from 'react';

const UserContext = React.createContext({
  userCredentials: {},
  setUserCredentials: () => {},
});

export default UserContext;

export const UserProvider = (props) => {
  const [userCredentials, setUserCredentials] = useState({});

  return (
    <UserContext.Provider 
      value={{ 
        userCredentials,
        setUserCredentials,
      }}>
      {props.children}
    </UserContext.Provider>
  )
}
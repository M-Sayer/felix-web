import React, { useState } from 'react';
//context with functional component

//create context
// identify the values you want to use in context
const UserContext = React.createContext({
  someData: null,
  setSomeData: () => {},
});

export default UserContext; // import userContext from './filepath/UserContext

export const UserProvider = (props) => {
  // define the values you want to use in context
  const [someData, setSomeData] = useState(null);

  // wrap child components in context provider
  // set the value of the provider to the values previously defined
  return (
    <UserContext.Provider 
      value={{ 
        someData, setSomeData
      }}>
      {props.children}
    </UserContext.Provider>
  )
}
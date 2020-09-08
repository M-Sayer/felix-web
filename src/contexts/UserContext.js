import React, { useState } from 'react';

const UserContext = React.createContext({
  someData: null,
  setSomeData: () => {},
});

export default UserContext;

export const UserProvider = (props) => {
  const [someData, setSomeData] = useState(null);

  return (
    <UserContext.Provider 
      value={{ 
        someData, setSomeData
      }}>
      {props.children}
    </UserContext.Provider>
  )
}
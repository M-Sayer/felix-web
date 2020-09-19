import React, { useState } from 'react';

const AlertsContext = React.createContext({
  alerts: [],
  setAlerts: () => {},
});

export default AlertsContext;

export const AlertsProvider = props => {
  const [alerts, setAlerts] = useState();

  return (
    <AlertsContext.Provider 
      value={{
        alerts: alerts, 
        setAlerts: setAlerts
      }}
    >
      {props.children}
    </AlertsContext.Provider>
  );
};
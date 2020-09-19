import React, { useState, useEffect } from 'react';
import { getAlerts } from '../services/alertsService';

const AlertsContext = React.createContext({
  allAlerts: [],
  setAllAlerts: () => {},
  dashboardAlerts: [],
  setDashboardAlerts: () => {},
});

export default AlertsContext;

export const AlertsProvider = props => {
  const [allAlerts, setAllAlerts] = useState([]);
  const [dashboardAlerts, setDashboardAlerts] = useState([])

  const fetchData = async () => {
    const alerts = await getAlerts();
    setAllAlerts(alerts);
  };
  
  useEffect(() => {fetchData()}, []);

  useEffect(() => {
    setDashboardAlerts(allAlerts.filter(alert =>
      alert.read === false))
  }, [allAlerts])

  return (
    <AlertsContext.Provider 
      value={{
        allAlerts: allAlerts, 
        setAllAlerts: setAllAlerts,
        dashboardAlerts: dashboardAlerts,
        setDashboardAlerts: setDashboardAlerts,
      }}
    >
      {props.children}
    </AlertsContext.Provider>
  );
};
import React, { useState, useEffect } from 'react';
import { getAlerts } from '../services/alertsService';
import moment from 'moment';



const AlertsContext = React.createContext({
  allAlerts: [],
  setAllAlerts: () => {},
  dashboardAlerts: [],
  setDashboardAlerts: () => {},
  setState: () => {},
});

export default AlertsContext;

export const AlertsProvider = props => {
  const [state, setState] = useState();
  const [allAlerts, setAllAlerts] = useState([]);
  const [dashboardAlerts, setDashboardAlerts] = useState([])

  //sort alerts by most recent
  const sortAlerts = alerts => {
    return alerts.sort((a, b) => {
      if (moment(a).isBefore(b)) return 1;
      
      return -1
    });
  }
  
  const fetchData = async () => {
    const alerts = await getAlerts();
    const sortedAlerts = sortAlerts(alerts);
    setAllAlerts(sortedAlerts);
  };
  
  useEffect(() => {fetchData()}, [state]);

  useEffect(() => {
    setDashboardAlerts(allAlerts.filter(alert =>
      alert.read === false))
  }, [allAlerts])

  let a = dashboardAlerts[0];
  const b = dashboardAlerts[1];
  a && console.log('a: ', a.date_created)
  b && console.log('b: ', b.date_created);
  a && b && console.log(a.date_created > b.date_created)
  a && b && console.log(moment(a.date_created).isBefore(b.date_created))

  return (
    <AlertsContext.Provider 
      value={{
        allAlerts: allAlerts, 
        setAllAlerts: setAllAlerts,
        dashboardAlerts: dashboardAlerts,
        setDashboardAlerts: setDashboardAlerts,
        setState: setState,
      }}
    >
      {props.children}
    </AlertsContext.Provider>
  );
};
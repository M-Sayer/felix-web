import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { getAlerts } from '../../services/alertsService';
import AlertsContext from '../../contexts/AlertsContext';

const Alerts = () => {
  const alertsContext = useContext(AlertsContext);
  
  const fetchData = async () => {
    const alerts = await getAlerts();
    alertsContext.setAlerts(alerts);
  };

  useEffect(() => {fetchData()}, []);

  const location = useLocation().pathname;
  
  const renderAlerts = () => {

  }

  return (
    <div>alerts</div>
  )
}

export default Alerts;
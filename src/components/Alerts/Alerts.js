import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AlertsContext from '../../contexts/AlertsContext';
import { updateAlert } from '../../services/alertsService';
import moment from 'moment-timezone';

const Alerts = () => {
  const alertsContext = useContext(AlertsContext);
  
  // object where each key is an alert id
  // value is true or false where true is expanded
  const [expanded, setExpanded] = useState({})
  
  const toggleExpand = id => {
    setExpanded({ [id]: !expanded[id] })
  }

  const markRead = async id => {
    await updateAlert(id, {read: true});
    alertsContext.setState({}); //force rerender
  }

  const location = useLocation().pathname;

  const renderAlerts = () => {
    let alerts;

    if (location === '/') {
      alerts = alertsContext.dashboardAlerts
    } 
    if (location === '/alerts') {
      alerts = alertsContext.allAlerts
    }

    return alerts.map(alert => (
      <div key={alert.id}>
        <p>{alert.title}</p>
        <section>
          <p>
            {moment(alert.date_created).format('MMM Do, YYYY')}
          </p>
        </section>
        {expanded[alert.id] 
          ?
          <>
            <p>{alert.message}</p> 
            <button onClick={() => toggleExpand(alert.id)}
            >
              read less
            </button>
          </>
          : <button onClick={() => toggleExpand(alert.id)}
          >
            read more
          </button>
        }
        {!alert.read && 
          <button onClick={() => markRead(alert.id)}
          > 
            mark as read
          </button>}
      </div>
    ))};

  return (
    <div>
      <h1>Alerts</h1>
      {renderAlerts()}
    </div>
  )
}

export default Alerts;
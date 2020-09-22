import React, { useContext } from 'react';
import UserOverview from '../components/Overview/UserOverview';
import GoalsOverview from '../components/Overview/GoalsOverview';
import TransactionsOverview from '../components/Overview/TransactionsOverview';
import Alerts from '../components/Alerts/Alerts';
import AlertsContext from '../contexts/AlertsContext';
import { useHistory } from 'react-router-dom';

const DashboardRoute = (props) => {
  const alertsContext = useContext(AlertsContext);
  const history = useHistory();

  return (
    <>
      <button
        className='btn tertiaryBtn'
        onClick={() => 
          history.push('/alerts')
        }
      >
        alerts
      </button>
      {alertsContext.dashboardAlerts.length > 0 &&
        <section>
          <Alerts />
        </section>
      }
      <section
        className=''
      >
        <UserOverview />
      </section>

      <section
        className=''
      >
        <GoalsOverview
          {...props}
        />
      </section>

      <section>
        <TransactionsOverview
          {...props}
        />
      </section>
    </>
  );
}

export default DashboardRoute;
import React, { useContext } from 'react';
import UserOverview from '../components/Overview/UserOverview';
import TransactionsOverview from '../components/Overview/TransactionsOverview';
import Alerts from '../components/Alerts/Alerts';
import AlertsContext from '../contexts/AlertsContext';
import { useHistory } from 'react-router-dom';

const DashboardRoute = (props) => {
  const alertsContext = useContext(AlertsContext);
  const history = useHistory();

  return (
    <>
      <button onClick={() => history.push('/alerts')}
      >
        alerts
      </button>
      {alertsContext.dashboardAlerts.length > 0 &&
        <section>
          <Alerts />
        </section>
      }
      <section>
        <UserOverview />
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
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
      <div 
        className='overviewSection'
      >
        <button
          className='AlertsButton btn tertiaryBtn'
          onClick={() => 
            history.push('/alerts')
          }
        >
          alerts
        </button>
        {alertsContext.dashboardAlerts.length > 0 &&
          <section
          className='Alerts'
          >
            <Alerts />
          </section>
        }

      </div>   
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

      <section
        className=''
      >
        <TransactionsOverview
          {...props}
        />
      </section>
    </>
  );
}

export default DashboardRoute;
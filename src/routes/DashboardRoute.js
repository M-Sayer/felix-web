import React from 'react';
import UserOverview from '../components/Overview/UserOverview';
import TransactionsOverview from '../components/Overview/TransactionsOverview';
import Alerts from '../components/Alerts/Alerts';

const DashboardRoute = (props) => {
  return (
    <>
      <section>
        <Alerts />
      </section>
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
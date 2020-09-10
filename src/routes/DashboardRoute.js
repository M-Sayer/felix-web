import React from 'react';
import UserOverview from '../components/Overview/UserOverview';
import TransactionsOverview from '../components/Overview/TransactionsOverview';

const DashboardRoute = (props) => {
  return (
    <>
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
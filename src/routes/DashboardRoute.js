import React from 'react';
import UserOverview from '../components/Overview/UserOverview';
import TransactionsOverview from '../components/Overview/TransactionsOverview';

const DashboardRoute = () => {
  return (
    <>
      <section>
        <UserOverview />
      </section>

      <section>
        <TransactionsOverview />
      </section>
    </>
  );
}

export default DashboardRoute;
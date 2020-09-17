import React from 'react';
import UserOverview from '../components/Overview/UserOverview';
import GoalsOverview from '../components/Overview/GoalsOverview';
import TransactionsOverview from '../components/Overview/TransactionsOverview';

const DashboardRoute = (props) => {
  return (
    <>
      <section>
        <UserOverview />
      </section>

      <section>
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
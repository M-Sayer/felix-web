import React from 'react';
import SingleTransaction from '../components/SingleTransaction/SingleTransaction';

const SingleTransactionRoute = (props) => {
  return (
    <>
      <SingleTransaction
        {...props}
      />
    </>
  );
}

export default SingleTransactionRoute;
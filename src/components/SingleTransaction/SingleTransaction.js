import React, { useContext, useEffect } from 'react';
import TransactionsContext from '../../contexts/TransactionsContext';
// import UserService from '../../services/user-service';

const SingleTransaction = (props) => {
  const { transaction = {} } = useContext(TransactionsContext);
  const { date_created, income_amount, expense_amount, transaction_category, expense_category } = transaction;
  // const date = new Date(date_created);

  // useEffect(() => {
   
  // });

  return (
    <>
      <h2>
        Single Transaction Name
      </h2>
      <ul>
        <li>
          {/* {date} */}
        </li>
        <li>
          {income_amount || expense_amount}
        </li>
        <li>
          {transaction_category || expense_category}
        </li>
      </ul>
    </>
  );
}

export default SingleTransaction;
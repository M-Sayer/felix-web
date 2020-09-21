import React, { Component } from 'react';
import TransactionsContext from '../../contexts/TransactionsContext';
import TransactionsService from '../../services/transactions-service';

class TransactionsOverview extends Component {
  static contextType = TransactionsContext;

  renderTransactions(transactions) {
    const transactionsList = [];
    let i = 0;

    for(const trx of transactions) {
      if(i < 3 && i < transactions.length) {
        transactionsList.push(
          <li 
            key={i}
          >
            {trx.income_category || trx.expense_category}: {trx.income_amount || trx.expense_amount}
          </li>
        );
      }
      i++;
    }

    return (
      <>
        <ul>
          {transactionsList}
        </ul>
        <button
          onClick={() =>
            this.props.history.push('/transactions')}
            type='click'
        >
          See All Transactions
        </button>
      </>
    );
  }

  async componentDidMount() {
    try {
      const { income, expenses } = await TransactionsService.getAllTransactions();
      const sortedTransactions = this.context.sortTransactions([...income, ...expenses], 'date_created');
      this.context.setTransactions(sortedTransactions);
    }
    catch(error) {
      this.context.setError(error);
    }
  }

  render() {
    const { transactions = [] } = this.context;

    return (
      <>
        <h2>
          Transactions Overview
        </h2>
        <button
          onClick={() =>
            this.props.history.push('/createtransaction')}
            type='click'
        >
          Add a New Transaction
      </button>
        {(transactions.length)
            ? this.renderTransactions(transactions)
            : ''
        }
      </>
    );
  }
}

export default TransactionsOverview;
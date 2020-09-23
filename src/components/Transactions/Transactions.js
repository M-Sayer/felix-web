import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TransactionsContext from '../../contexts/TransactionsContext';
import TransactionsService from '../../services/transactions-service';
import './Transactions.css';

class Transactions extends Component {
  static contextType = TransactionsContext;

  renderTransactionParams(transaction) {
    if('income_amount' in transaction) {
      return `/transaction/income/${transaction.id}`;
    }

    return `transaction/expenses/${transaction.id}`;
  }

  renderTransactions(transactions) {
    return transactions.map((trx, i) => {
      return (
        <li 
          className='userData2 transactionsListItem'
          key={i}
        >
          <Link
            className='userData2' 
            to={this.renderTransactionParams(trx)}
          >
            <div
              className='dataFlexRow'
            >
              <span>
                {trx.income_category || trx.expense_category}:
              </span>
              <span
                className={
                  (trx.income_amount)
                    ? 'income'
                    : 'expenses'
                }
              >
                {trx.income_amount || trx.expense_amount} 
              </span>

            </div>
          </Link>
        </li>
      );
    });
  }

  async componentDidMount() {
    try {
      const { income, expenses } = await TransactionsService.getAllTransactions();
      const sortedTransactions = this.context.sortTransactions([...income, ...expenses], 'date_created');
      this.context.setTransactions(sortedTransactions);
    }
    catch(error) {
      console.log(error);
    }
  }

  render() {
    const { transactions = [] } = this.context;

    return (
      <article
        className='transactionsContainer'
      >
        <h2
          className='sectionHeader'
        >
          All Transactions
        </h2>
        <ul>
          {
            (transactions.length)
              ? this.renderTransactions(transactions)
              : ''
          }
        </ul>
      </article>
    );
  }
}

export default Transactions;
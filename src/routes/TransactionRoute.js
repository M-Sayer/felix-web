import React from 'react';
import TransactionsContext from '../contexts/TransactionsContext';
import TransactionsService from '../services/transactions-service';
import Transaction from '../components/Transaction/Transaction';

export default class TransactionRoute extends React.Component{
  static contextType = TransactionsContext;

  componentDidMount = async () => {
    try {
      const { type, id } = this.props.match.params;
      const transaction = await TransactionsService.getSingleTransaction(type, id);
      this.context.setTransaction(transaction);
    }
    catch(error) {
      // For now!
      console.log(error)
    }
  }

  render(){
    return(
      <section>
        <h2>
          Transaction
        </h2> 
        <Transaction />
      </section>
    );
  }
}
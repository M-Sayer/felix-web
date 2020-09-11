import React from 'react';
// import TransactionsContext from '../../contexts/TransactionsContext';
import TransactionContext from '../contexts/TransactionContext';
import TransactionDetails from '../components/TransactionDetails/TransactionDetails';
import TransactionService from '../services/transactions-service';

export default class TransactionFullInfo extends React.Component{
    
  static contextType = TransactionContext;

  componentDidMount = () => {
    const { type, id } = this.props.match.params;

    TransactionService.getSingleTransaction(type, id)
      .then(res => this.context.setTransactionInfo(res))
      .catch(error => this.context.setError(error))
  }

  render(){
    return(
      <section>
        <h2>
          Transaction
        </h2> 
        <TransactionDetails />
      </section>
    );
  }
}
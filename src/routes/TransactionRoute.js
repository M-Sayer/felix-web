import React from 'react';
import TransactionsContext from '../contexts/TransactionsContext';
import TransactionsService from '../services/transactions-service';
import Transaction from '../components/Transaction/Transaction';

export default class TransactionRoute extends React.Component{
  static contextType = TransactionsContext;


    componentDidMount = () => {
        const {type, id} = (this.props.match.params)

        this.context.setType(type);       

        TransactionsService.getSingleTransaction(type, id)
        .then(res => this.context.setTransaction(res))
        .then( ()=> this.context.setTransactionForm())
        .catch(error => this.context.setError(error))
    }

    componentWillUnmount = () => {
        this.context.clearTransaction();
        this.context.clearTransactionForm();
        this.context.clearError();
    }

  render(){
    return(
      <section>
        <h2>
          Transaction
        </h2> 
        <Transaction/>
      </section>
    );
  }
}
import React from 'react';
import TransactionsContext from '../contexts/TransactionsContext';
import TransactionsService from '../services/transactions-service';
import Transaction from '../components/Transaction/Transaction';

export default class TransactionRoute extends React.Component{
  static contextType = TransactionsContext;

  //amount
  //desc
  //id
  //name
  //category
  //date
  state = {
    transaction: {},
  }

  handleChange = e => {
    e.preventDefault();
    const {name , value} = e.target;
    this.setState({
      transaction: { 
        ...this.state.transaction,
        [name]: value }
    })
  }
    componentDidMount = () => {
<<<<<<< HEAD
        const {type, id} = (this.props.match.params)

        this.context.setType(type);       

        TransactionsService.getSingleTransaction(type, id)
        .then(res => this.context.setTransaction(res))
        .then( ()=> this.context.setTransactionForm())
        .catch(error => this.context.setError(error))
=======
      const {type, id} = this.props.match.params;

      TransactionsService.getSingleTransaction(type, id)
      .then(res => this.setState({
        transaction: {...res, type: type}
      }))
      .catch(error => this.context.setError(error))
>>>>>>> muhajir-transaction-form
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
        <Transaction handleChange={this.handleChange} transaction={this.state.transaction}/>
      </section>
    );
  }
}
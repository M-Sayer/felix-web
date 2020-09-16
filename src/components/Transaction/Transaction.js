import React from 'react';
// import TransactionsContext from '../../contexts/TransactionsContext';
import TransactionForm from '../TransactionForm/TransactionForm'

import { Button } from '../Misc/Misc';
import TransactionsService from '../../services/transactions-service';

export default class Transaction extends React.Component {  

  state = {
    edit: false,
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit })
  }

   handleDelete =()=> {}

   componentDidMount = () => {
    //  this.context.setTransactionForm();       
   }

   handleSubmit = ev => {
       ev.preventDefault();
      TransactionsService.updateSingleTransaction(this.props.transaction);
      this.toggleEdit();
       
   }

   handleCancel = ev => {
       ev.preventDefault();
       this.context.toggleEdit();
   }

  renderTransaction = () => {
    const {name, date_created, amount, category, description } = this.props.transaction;
    return(
      !this.state.edit ?
      (
      <div className='transaction'>
        <div className='transactionInfo'>
          <p>{name}</p>
          <p>{date_created}</p>
          <p>{category}</p>
          <p>{description}</p>
        </div>
        <div className='amount'>
          <p>{amount}</p>
        </div>
        <Button
        onClick={this.toggleEdit}
        className='transaction_edit'>
          Edit
        </Button>
        <Button className='transaction_delete'>
          Delete
        </Button>
      </div>
        )
        :
        (
          <>
            <TransactionForm
              handleCancel = {this.handleCancel}
              handleChange = {this.props.handleChange} 
              handleSubmit = {this.handleSubmit}
              transaction = {this.props.transaction} //remove date from props
              editing = {true}
            />
          </>
        )
    )
  }

  
  render(){
    return (
      <div className='transaction_details_wrapper'>
        {this.renderTransaction()}
      </div>
    );
  }
}
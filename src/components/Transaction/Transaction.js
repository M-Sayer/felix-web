import React from 'react';
import TransactionForm from '../TransactionForm/TransactionForm'

import { Button } from '../Misc/Misc';
import TransactionsService from '../../services/transactions-service';

export default class Transaction extends React.Component {  

  state = {
    edit: false,
  }

  static defaultProps = {
    transaction : {
      amount: "",
      category: "",
      date_created: "",
      description: "",
      id: 0,
      name: "",
      type: "",
    },
    handleChange : () => {},
    history : {
      push : () => {}
    }
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit })
  }

   handleDelete =()=> {
     const {type, id} = this.props.match.params;
     TransactionsService.deleteSingleTransaction(type,id)
     .then(()=> this.props.history.push('/dashboard'))
   }

   componentDidMount = () => {
    //  this.context.setTransactionForm();       
   }

   handleSubmit = (ev, data) => {
       ev.preventDefault();
      TransactionsService.updateSingleTransaction(data);
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
        <Button
        onClick={this.handleDelete}
         className='transaction_delete'>
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
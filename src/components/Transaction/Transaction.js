import React from 'react';
import TransactionsContext from '../../contexts/TransactionsContext';
import TransactionForm from '../TransactionForm/TransactionForm'

import { Button } from '../Misc/Misc';

export default class Transaction extends React.Component {  

  static contextType = TransactionsContext;

  /**
   * @todo ask about design, like i know having label might not look good when the user has to edit the inputs.... but
   * there kind needed for accessibility.
   * 
   */

   handleDelete =()=> {}

   static contextType = TransactionsContext;

   componentDidMount = () => {
     this.context.setTransactionForm();       
   }

   handleSubmit = ev => {
       ev.preventDefault();
       this.context.setTransaction(this.context.transactionForm)
       this.context.toggleEdit();
       
       console.log(this.context.transactionForm)
   }

   handleChanges = ev =>{
       ev.preventDefault();
      //  console.log(this.context.transactionForm)
      
       const {name , value} = ev.target;
       this.context.setTransactionFormChange(name, value)
   }

   handleCancel = ev => {
       ev.preventDefault();
       this.context.toggleEdit();
   }


  renderEditableTransaction = () =>{
    const {name, date_created, amount, category, description } = this.context.transaction;
          return(
            !this.context.edit ?
            (
            <>
              <div className='transaction_notes'>
                <p>{name}</p>
                <p>{date_created}</p>
                <p>{category}</p>
                <p>{description}</p>
              </div>
              <div className='amount_wrapper'>
                <p className='amount'>{amount}</p>
              </div>
              <Button
              onClick={this.context.toggleEdit}
              className='transaction_edit'>
                Edit
              </Button>
              <Button className='transaction_delete'>
                Delete
              </Button>
            </>
              )
              :
              (
                  <>
                      <TransactionForm
                      handleCancel = {this.handleCancel}
                      handleChanges = {this.handleChanges} 
                      handleSubmit = {this.handleSubmit}
                      transactionFormField = {this.context.transactionForm}
                      editing = {true}
                      />
                  </>
              )
          )
  }

  
  render(){
    return (
      <div className='transaction_details_wrapper'>
        {this.renderEditableTransaction()}
      </div>
    );
  }
}
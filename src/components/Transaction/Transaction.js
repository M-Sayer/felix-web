import React from 'react';
import TransactionForm from '../TransactionForm/TransactionForm'

import { Button } from '../Misc/Misc';
import TransactionsService from '../../services/transactions-service';
import moment from 'moment';

import './transaction.css'

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
    },
    match : {
      params : {
        type : '',
        id : 0
      }
    }
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit })
  }

   handleDelete =()=> {
     const {type, id} = this.props.match.params;
     TransactionsService.deleteSingleTransaction(type,id)
     .then(()=> this.props.history.push('/'))
   }

   handleSubmit = (ev, data) => {
       ev.preventDefault();
       if(data.amount % 1 !== 0  ){
         let {amount} = data
         let a = amount.split('.')
     
         if(a[1].length > 2) a[1] = a[1].substring(0, 2)
     
         amount = a.join('.');
     
         data = {
           ...data,
           amount,
         }
       }
       
       if(this.props.match.params.type === 'income'){
        if(data.amount < 0 ) data.amount *= -1
       }
       else {
        if(data.amount > 0 ) data.amount *= -1
       }

       this.props.handleChange(data)
      // TransactionsService.updateSingleTransaction(data);
      this.toggleEdit();
   }

   handleCancel = ev => {
       ev.preventDefault();
       this.toggleEdit();
   }

  renderTransaction = () => {
    const {name, date_created, amount, category, description } = this.props.transaction;
    const {type} = this.props.match.params; 
    return(
      !this.state.edit ?
      (
      <div className='transaction_wrapper'>
        <div className='transactionInfo_wrapper'>
          <div className='text_info_divider'>
          <p className='transaction name'>{name}</p>
          <p className='transaction date'>{moment(date_created).format('MM/DD/YYYY')}</p>
          <p className='transaction category'>{category}</p>
          <p className='transaction description'>{description}</p>
          </div>
          <div className='amount_wrapper'>
            <p className={`transaction ${type} amount`}>${amount}</p>
          </div>
        </div>
        <div className='button_wrapper'>
          <button
            onClick={this.toggleEdit}
            className='btn secondaryBtnALT'
          >
            Edit
          </button>
          <button
            onClick={this.handleDelete}
            className='btn cancel secondaryBtnALT'
          >
            Delete
          </button>
        </div>
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
      <div className='formContainer'>
        {this.renderTransaction()}
      </div>
    );
  }
}
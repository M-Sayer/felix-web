import React from 'react';
import { Button } from '../Misc/Misc';
import TransactionsContext from '../../contexts/TransactionsContext';
import TransactionForm from '../TransactionForm/TransactionForm';



export default class RenderEditableTextFields extends React.Component {

    state = {
        edit : false
    }


    static contextType = TransactionsContext;


    render(){
        const {name, date_created, amount, category, description } = this.context.transaction;
        return(
          !this.state.edit ?
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
              onClick={()=> this.setState({edit : true}) }
             className='transaction_edit'>
              Edit
            </Button>
          </>
            )
            :
            (
                <>
                    <TransactionForm/>
                </>
            )
        )
    }
  }

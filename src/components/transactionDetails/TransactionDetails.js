import React from 'react';
import {Button} from '../miscellaneous/Misc';
import TransactionContext from '../../contexts/TransactionContext';


export default class TransactionDetails extends React.Component {
    
    
    static contextType = TransactionContext;
    
    
    render(){
        const {name, date_created , amount, subType} = this.context.transactionInfo
        return(
            <div className='transaction_details_wrapper'>
                <div className='transaction_notes'>
                    <p>{name}</p>
                    <p>{date_created}</p>
                    <p>{subType}</p>
                </div>
                <div className='amount_wrapper'>
                    <p className='amount'>{amount}</p>
                </div>
                <Button className='transaction_edit'>Edit</Button>
                <Button className='transaction_delete'>Delete</Button>
            </div>


        );
    }
}
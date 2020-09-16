import React from 'react';
import TransactionsContext from '../../contexts/TransactionsContext';
import RenderEditableTextFields from '../EditableTransactionField/EditableTransactionField'

import { Button } from '../Misc/Misc';

export default class Transaction extends React.Component {  

  static contextType = TransactionsContext;

  /**
   * @todo ask about design, like i know having label might not look good when the user has to edit the inputs.... but
   * there kind needed for accessibility.
   * 
   */

  
    
  render(){

    return (
      <div className='transaction_details_wrapper'>
        <RenderEditableTextFields/>
        <Button className='transaction_delete'>
          Delete
        </Button>
      </div>
    );
  }
}
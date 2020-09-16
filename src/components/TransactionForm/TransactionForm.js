import React from 'react';
import {Button} from '../Misc/Misc'
/**
 * @todo 1:> hook up api
 *       2:> make sure that it can work for both single transaction AND new transaction
 */

 /**
  * @todo
  * transaction form object needs to be a prop
  * event handlers need to be props
  * 
  *     formObj : {
  *         name : '',
  *         description: '',
  *         type : '' ,
  *         category : '' ,
  *         amount : 00,
  *         }
  *     event props : 
  *     handleSubmit : () => {},
  *     handleCancel : () => {},
  *     handleChange : () => {},
  *  
  */

export default class TransactionForm extends React.Component {


    static defaultProps = {
        handleCancel : () => {},
        handleChange : () => {},
        handleSubmit : () => {},
        editing : false, 
        transactionFormField : {
            name : '',
            description: '',
            type : '' ,
            category : '' ,
            amount : 0,
        }
    } 

    renderOptions = arr =>{
        if(arr.length){
            return arr.map((item, i) => {
                return (
                    <option
                    key={i}
                    name={item}
                    value={item}
                    >
                    {item}
                    </option>
                )
            })
        }
    }

    render(){
       console.log(this.props)
       const {name, description, amount, category} = this.props.transactionFormField
        
       const optionForType = 
        this.props.transactionFormField.type === 'income'
        ?
        ['paycheck', 'freelance', 'side_gig', 'other']
        :
        ['bills', 'transportation', 'food', 'entertainment', 'other']
        ;

        return(
            <div className='transaction_form_wrapper'>
                <form
                onSubmit={this.props.handleSubmit}
                onChange={this.props.handleChanges}
                >

                    <div className='transaction_notes'>

                    {
                        !this.props.editing 
                        && 
                        <>
                            <label htmlFor='transactionType'></label>
                            <select name='type'>
                                {this.renderOptions(['income','expenses'])}
                            </select> 
                        </>

                    }
                      <input name='name' value={name} placeholder='name'></input>
                      <select name='category' defaultValue={category}>
                          {this.renderOptions(optionForType)}
                      </select>
                      <textarea name='description' value={description}placeholder='description'></textarea>

                    </div>
                    <div className='amount_wrapper'>
                      <input name='amount' value={amount} className='amount' placeholder='amount'></input>
                    </div>
                    <Button
                    type='submit' 
                    className='transaction_submit'>
                      Submit
                    </Button>
                    <Button
                    onClick={this.props.handleCancel} 
                    className='transaction_form_cancel'>
                        Cancel
                    </Button>
                </form>
            </div>
        )
    }
}
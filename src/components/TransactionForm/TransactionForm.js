import React from 'react';
import {Button} from '../Misc/Misc'

export default class TransactionForm extends React.Component {

  static defaultProps = {
    handleCancel : () => {},
    handleChange : () => {},
    handleSubmit : () => {},
    editing : false, 
    transaction : {
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
          defaultValue={item}
          >
          {item}
          </option>
        )
      })
    }
  }



    render(){
       console.log(this.props)
       const {name, description, amount, category, type } = this.props.transaction
        
       const optionForType = 
        type === 'income'
        ?
        ['paycheck', 'freelance', 'side_gig', 'other']
        :
        ['bills', 'transportation', 'food', 'entertainment', 'other']
        ;

        return(
            <div className='transaction_form_wrapper'>
                <form
                  onSubmit={this.props.handleSubmit}
                  onChange={this.props.handleChange}
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

                    
                      <input name='name' defaultValue={name} placeholder='name'></input>
                      <select name='category' defaultdefaultValue={category}>
                          {this.renderOptions(optionForType)}
                      </select>
                      <textarea name='description' defaultdefaultValue={description}placeholder='description'></textarea>

                    </div>
                    <div className='amount_wrapper'>
                      <input name='amount' defaultdefaultValue={amount} className='amount' placeholder='amount'></input>
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
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
       const {name, description, amount, category, type } = this.props.transaction
        
       const optionForType = 
        type === 'income'
        ?
        ['paycheck', 'freelance', 'side_gig', 'other']
        :
        ['bills', 'transportation', 'food', 'entertainment', 'other']
        ;

        return(
            <div className='transaction_form_wrapper formContainer'>

                <form 
                  className='formContainerALT'
                  onSubmit={this.props.handleSubmit}
                  onChange={this.props.handleChange}
                >
                    <div className='transaction_notes formContainerALT'>
                    {
                      !this.props.editing 
                      && 
                      <>
                        <label 
                          htmlFor='transactionType'>
                        </label>

                        <select 
                          className='formSelect' 
                          name='type'
                        >
                          {this.renderOptions(['income','expenses'])}
                        </select> 
                      </>

                    }
                      <input 
                        className='formInput' 
                        name='name' 
                        value={name} 
                        placeholder='name'>
                      </input>


   
                      <select 
                        className='formSelect'
                        name='category' 
                        defaultValue={category}
                      >
                        {this.renderOptions(optionForType)}
                      </select>

          




                      <textarea 
                        className='formInput' 
                        name='description' 
                        value={description}
                        placeholder='description'>
                      </textarea>
                    </div>



                    <div className='amount_wrapper'>
                      <input 
                        name='amount' 
                        value={amount} 
                        className='amount formInput' 
                        placeholder='amount'>
                      </input>
                    </div>



                    <div className='flexRow'>
                      <Button
                        type='submit' 
                        className='transaction_submit secondaryBtnALT btn'
                      >
                        Submit
                      </Button>

                      <Button
                        onClick={this.props.handleCancel} 
                        className='transaction_form_cancel secondaryBtnALT btn cancel'
                      >
                        Cancel
                      </Button>
                    </div>
                </form>
            </div>
        )
    }
}
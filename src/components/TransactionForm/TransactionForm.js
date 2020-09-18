import React from 'react';
import {Button} from '../Misc/Misc';

export default class TransactionForm extends React.Component {

  static defaultProps = {
    handleCancel: () => {},
    handleSubmit: () => {},
    editing: false,
    transaction: {
      amount: "",
      category: "",
      description: "",
      name: "",
      type: "",
    }
  }; 

	state = {
    amount: "",
    category: "",
    description: "",
    name: "",
    type: "",
  };

  componentDidMount() {
    if (this.props.transaction) {
      this.setState({...this.props.transaction})
    }
  };

  handleChange = event => {
    event.preventDefault();
    const {name , value} = event.target;
    this.setState({
      ...this.state,
      [name]: value 
    });
  };

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
        );
      });
    };
  };



    render(){
      //const {name, description, amount, category, type } = this.state 
      //Unused variables that were previously used to set name={name} of inputs. This was throwing a strange "uncontrolled input/requires defaultValues" error that we haven't fully figured out yet, so I'm leaving them here until then.
      const { type } = this.state;  //For now this is all we need

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
              onSubmit={e => this.props.handleSubmit(e, this.state)}
              onChange={e => this.handleChange(e)}
            >
              <div className='transaction_notes'>
                {
                  !this.props.editing 
                  && 
                  <>
                    <label htmlFor='transactionType'></label>
                    <select name='type' required>
                      <option value=''>select</option>
                      {this.renderOptions(['income','expenses'])}
                    </select> 
                  </>
                }
                <input name='name' placeholder='name' required></input>
                <select name='category' required>
                  <option value=''>select</option>
                  {this.renderOptions(optionForType)}
                </select>
                <textarea name='description' placeholder='description' required></textarea>
              </div>

              <div className='amount_wrapper'>
                <input name='amount' className='amount' placeholder='amount' required></input>
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
        );
    };
};

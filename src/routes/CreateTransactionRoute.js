import React from 'react';
import CreateTransaction from '../components/CreateTransaction/CreateTransaction';



export default class CreateTransactionRoute extends React.Component {
  // state = {
  //   transaction: {},
  // }

  // handleChange = event => {
  //   event.preventDefault();
  //   const {name , value} = event.target;
  //   this.setState({
  //     transaction: { 
  //       ...this.state.transaction,
  //       [name]: value }
  //   })
  // }

  render() {
    return (
      <>
        <section>
          <CreateTransaction 
          // handleChange = {this.handleChange}
          // transaction={this.state.transaction}
          />
        </section>
      </>
    );
  }
}

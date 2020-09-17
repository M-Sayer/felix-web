import React from 'react';
import TransactionForm from '../TransactionForm/TransactionForm'
import TransactionsService from '../../services/transactions-service'
import TransactionsContext from '../../contexts/TransactionsContext';


export default class CreateTransaction extends React.Component {
	static contextType = TransactionsContext;


	componentDidMount = () => {
	}

	handleSubmit = ev => {
			ev.preventDefault();
			console.log(this.context.transactionForm)
			TransactionsService.createTransaction(this.context.transactionForm);
	}

	handleChange = ev =>{
			ev.preventDefault();
			const {name , value} = ev.target;
			this.context.setTransactionFormChange(name, value)
	}

	handleCancel = ev => {
			ev.preventDefault();
			//close the create form somehow
	}

	render() {
		return (
			<TransactionForm
			handleCancel = {this.handleCancel}
			handleChange = {this.handleChange}
			handleSubmit = {this.handleSubmit}
			editing = {false}/>
		);
	};
};

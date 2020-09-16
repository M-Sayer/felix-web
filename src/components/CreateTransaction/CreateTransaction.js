import React from 'react';
import TransactionForm from '../TransactionForm/TransactionForm'
import TransactionsService from '../../services/transactions-service'
import TransactionsContext from '../../contexts/TransactionsContext';


export default class CreateTransaction extends React.Component {
	static contextType = TransactionsContext;


	componentDidMount = () => {
		this.context.clearTransactionForm();      
	}

	handleSubmit = ev => {
			ev.preventDefault();
			this.context.setTransaction(this.context.transactionForm)
			console.log(this.context.transactionForm)
			TransactionsService.createTransaction(this.context.transactionForm);
	}

	handleChanges = ev =>{
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
			handleChanges = {this.handleChanges}
			handleSubmit = {this.handleSubmit}
			editing = {false}/>
		);
	};
};

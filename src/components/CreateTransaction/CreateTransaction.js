import React from 'react';
import TransactionForm from '../TransactionForm/TransactionForm'
import TransactionsService from '../../services/transactions-service'
import TransactionsContext from '../../contexts/TransactionsContext';


export default class CreateTransaction extends React.Component {
	static contextType = TransactionsContext;

	handleSubmit = (e, data) => {
			e.preventDefault();
			console.log(this.state)
			TransactionsService.createTransaction(data);
	}

	handleCancel = ev => {
			this.props.history.push('/createtransaction')
	}

	render() {
		return (
			<TransactionForm
			handleCancel = {this.handleCancel}
			handleSubmit = {this.handleSubmit}
			editing = {false}/>
		);
	};
};

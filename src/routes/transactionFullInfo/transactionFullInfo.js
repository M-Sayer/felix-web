import React from 'react';
import TransactionContext from '../../contexts/TransactionContext';
import TransactionDetails from '../../components/transactionDetails/TransactionDetails'
import TransactionApiService from '../../services/transactions-api-service'

export default class TransactionFullInfo extends React.Component{
    
    
    static contextType =TransactionContext;

    componentDidMount = () => {
        //need to know how im getting type and id
        //props?
        //context ? :c 
        let type; // <========= placeholder
        let id;   // <========= placeholder
        TransactionApiService.getSingleTransaction(type, id)
        .then(res => this.context.setTransactionInfo(res))
        .catch(error => this.context.setError(error))
    }

    componentWillUnmount = () => {
        this.context.clearTransaction();
        this.context.clearError();
    }


    render(){
        return(
            <section>
                <header>
                   <h2>Transaction</h2> 
                </header>
                {this.context.error && <h3>{this.context.error}</h3>}
                <TransactionDetails/>
            </section>
        );
    }
}
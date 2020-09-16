import React from 'react';
import TransactionContext from '../../contexts/TransactionContext';
import TransactionDetails from '../../components/transactionDetails/TransactionDetails'
import TransactionApiService from '../../services/transactions-api-service'

export default class TransactionFullInfo extends React.Component{
    
    
    static contextType =TransactionContext;

    componentDidMount = () => {
        const {type, id} = (this.props.match.params)
        
        

        TransactionApiService.getSingleTransaction(type, id)
        .then(res => this.context.setTransactionInfo(res))
        .catch(error => this.context.setError(error))
    }

    componentWillUnmount = () => {
        this.context.clearTransaction();
        this.context.clearError();
        this.context.clearType();
    }
    renderedError = (error) =>{
        return (
            <h3>{error}</h3>
        )
    }


    render(){
        const {error} = this.context;
        console.log(error)
        return(
            <section>
                <header>
                   <h2>Transaction</h2> 
                </header>
                {error && this.renderedError(error)}
                <TransactionDetails/>
            </section>
        );
    }
}
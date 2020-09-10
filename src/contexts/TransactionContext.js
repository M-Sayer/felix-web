import React from 'react';

const nullTransaction = {
    "id" : null,
    "name" : null,
    "date_created" : null,
    "amount" : null,
    "subType" : null
}

const TransactionContext = React.createContext({
    error : null,
    transactionInfo : nullTransaction,
    clearError : () => {},
    setError : () => {},
    setTransactionInfo : () => {},
    clearTransactionInfo : () => {},
})

export default TransactionContext;

export class TransactionProvider extends React.Component{
    state = {
        error : null,
        transactionInfo : nullTransaction,
    }
    
    setError = error => {
        console.error(error);
        this.setState({ error });
    };

    clearError = () => this.setState({error : null});

    setTransactionInfo = transactionInfo => this.setState({ transactionInfo }) 

    clearTransactionInfo = () => this.setState({transactionInfo : nullTransaction})

    render(){
        const value = {
            error : this.state.error,
            transactionInfo : this.state.transactionInfo,
            setError : this.setError,
            clearError : this.clearError,
            setTransactionInfo : this.setTransactionInfo,
            clearTransactionInfo : this.clearTransactionInfo, 
        }

        return(
            <TransactionContext.Provider value={value}>
                {this.props.children}
            </TransactionContext.Provider>
        )
    };
}
import React from 'react';

const nullIncomeInfo = {
    
        "id": null,
        "user_id": null,
        "name": null,
        "income_amount": null,
        "transaction_category": null,
        "date_created": null
    
};

const nullExpensesInfo = {
    "id": null,
    "user_id": null,
    "name": null,
    "expense_amount": null,
    "expense_category": null,
    "date_created": null
};

const TransactionContext = React.createContext({
    error : null,
    incomeInfo : nullIncomeInfo,
    expensesInfo : nullExpensesInfo,
    clearError : () => {},
    setError : () => {},
    setIncomeState : () => {},
    clearIncomeState : () => {},
    setExpensesInfo : () => {},
    clearExpensesInfo : () => {},
})

export default TransactionContext;

export class TransactionProvider extends React.Component{
    state = {
        error : null,
        incomeInfo : nullIncomeInfo,
        expensesInfo : nullExpensesInfo,
    }
    
    setError = error => {
        console.error(error);
        this.setState({ error });
    };

    clearError = () => this.setState({error : null});

    setIncomeState = incomeInfo => this.setState({incomeInfo});

    clearIncomeState = () => this.setState({ incomeInfo : nullIncomeInfo });

    setExpensesInfo = expensesInfo => this.setState({ expensesInfo });

    clearExpensesInfo = () => this.setState({ expensesInfo : nullExpensesInfo })


    render(){
        const value = {
            error : this.state.error,
            incomeInfo : this.state.incomeInfo,
            expensesInfo : this.state.expensesInfo,
            setError : this.setError,
            clearError : this.clearError,
            setIncomeState : this.setIncomeState,
            clearIncomeState : this.clearIncomeState,
            setExpensesInfo : this.setExpensesInfo,
            clearExpensesInfo : this.clearExpensesInfo
        }

        return(
            <TransactionContext.Provider value={value}>
                {this.props.children}
            </TransactionContext.Provider>
        )
    };
}
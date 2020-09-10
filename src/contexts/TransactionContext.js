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
})

export default TransactionContext;

export class TransactionProvider extends React.Component{
    state = {
        error : null,
        incomeInfo : nullIncomeInfo,
        expensesInfo : nullExpensesInfo,
    }


    render(){
        const value = {
            error : this.state.error,
            incomeInfo : this.state.incomeInfo,
            expensesInfo : this.state.expensesInfo,
        }

        return(
            <TransactionContext.Provider value={value}>
                {this.props.children}
            </TransactionContext.Provider>
        )
    };
}
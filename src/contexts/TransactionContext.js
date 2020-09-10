import React from 'react';

const nullIncomeInfo = {

};

const nullExpensesInfo = {

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
}
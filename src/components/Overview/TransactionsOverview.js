import React, { Component } from 'react';
import TransactionsContext from '../../contexts/TransactionsContext';
import TransactionsService from '../../services/transactions-service';

class TransactionsOverview extends Component {
  static contextType = TransactionsContext;

  renderTransactions(transactions) {
    return transactions.map((trx, i) => {
      return (
        <li 
          key={i}
        >
            {trx.income_category || trx.expense_category}: {trx.income_amount || trx.expense_amount}
        </li>
      );
    });
  }

  async componentDidMount() {
    try {
      const { income, expenses } = await TransactionsService.getAllTransactions();
      const sortedTransactions = this.context.sortTransactions([...income, ...expenses], 'date_created');
      this.context.setTransactions(sortedTransactions);
    }
    catch(error) {
      // For now
      console.log(error);
    }
  }

  render() {
    const { transactions = [] } = this.context;

    return (
      <>
        <h2>
          Transactions Overview
        </h2>
        <ul>
          {
            (transactions.length)
              ? this.renderTransactions(transactions)
              : ''
          }
        </ul>
        <button
          onClick={() =>
            this.props.history.push('/transactions')}
            type='click'
        >
          See All Transactions
        </button>
      </>
    );
  }

}

// const TransactionsOverview = (props) => {
//   const { 
//     // transactions = [],
//     // setTransactions,
//     sortTransactions,
//   } = useContext(TransactionsContext);

//   const [transactions, setTransactions] = useState([]);

//   // Show only first 3
//   const renderTransactions = (transactions) => {
//     return transactions.map((trx, i) => {
//       return (
//         <li 
//           key={i}
//         >
//             {trx.transaction_category || trx.expense_category}
//             {trx.income_amount || trx.expense_amount}
//         </li>
//       );
//     });
//   }

//   useEffect(() => {
//     async function getUserTransactions() {
//       try {
//         const { income, expenses } = await UserService.getUserTransactions();

//         const sortedTransactions = sortTransactions([...income, ...expenses], 'date_created');

//         setTransactions(sortedTransactions);
//       }
//       catch(error) {
//         console.log(error);
//       }
//     }
//     getUserTransactions();
//   }, [setTransactions, sortTransactions]);

//   return (
//     <>
//       <h2>
//         Transactions Overview
//       </h2>
//       <ul>
//         {
//           (transactions.length)
//             ? renderTransactions(transactions)
//             : ''
//         }
//       </ul>
//       <button
//         onClick={() =>
//           props.history.push('/transactions')}
//           type='click'
//       >
//         See All Transactions
//       </button>
//     </>
//   );
// }

export default TransactionsOverview;
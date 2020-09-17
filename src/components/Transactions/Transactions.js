import React, { Component } from 'react';
import TransactionsContext from '../../contexts/TransactionsContext';
import TransactionsService from '../../services/transactions-service';

import '../../styles-wip/OverviewStyles.css'
import '../../styles-wip/index.css'
import '../../styles-wip/ButtonStyles.css'

class Transactions extends Component {
  static contextType = TransactionsContext;

  renderTransactionParams(transaction) {
    if('income_amount' in transaction) {
      return `/transaction/income/${transaction.id}`;
    }

    return `transaction/expenses/${transaction.id}`;
  }

  renderTransactions(transactions) {
    return transactions.map((trx, i) => {
      return (
        <li 
          className='dataFlexRow userData2'
          key={i}
        >
          <span>
            {trx.income_category || trx.expense_category}
          </span> 
          <span className='middleColumnAlign'>
            {trx.income_amount || trx.expense_amount}
          </span>
          <button
            className='tertiaryBtn btn'
            onClick={() =>
              this.props.history.push(this.renderTransactionParams(trx))
            }
          >
            Details
          </button>
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
      console.log(error);
    }
  }

  render() {
    const { transactions = [] } = this.context;

    return (
      <div className='overviewContainer'>
        <h2 className='sectionHeader'>
          All Transactions
        </h2>
        <ul>
          {
            (transactions.length)
              ? this.renderTransactions(transactions)
              : ''
          }
        </ul>
      </div>
    );
  }
}

// const AllTransactions = (props) => {
//   const { 
//     // transaction,
//     // transactions = [],
//     // setTransaction,
//     // setTransactions,
//     sortTransactions,
//   } = useContext(TransactionsContext);

//   const [ transactions, setTransactions ] = useState({});

//   const renderTransactionParams = (transaction) => {
//     if('income_amount' in transaction) {
//       return `/transaction/income/${transaction.id}`;
//     }

//     return `transaction/expenses/${transaction.id}`;
//   }

//   const renderTransactions = (transactions) => {
//     return transactions.map((trx, i) => {
//       return (
//         <li 
//           key={i}
//         >
//           {trx.transaction_category || trx.expense_category}: {trx.income_amount || trx.expense_amount}
//           <button
//             onClick={() => {
//               // setTransaction(trx);
//               props.history.push(renderTransactionParams(trx))
//               }}
//           >
//             See More Details
//           </button>
//         </li>
//       );
//     });
//   }

//   useEffect(() => {
//     async function getAllTransactions() {
//       try {
//         const { income, expenses } = await TransactionsService.getAllTransactions();
//         const sortedTransactions = sortTransactions([...income, ...expenses], 'date_created');
//         setTransactions(sortedTransactions);
//       }
//       catch(error) {
//         console.log(error);
//       }
//     }
//     getAllTransactions();
//   }, [setTransactions, sortTransactions]);

//   return (
//     <>
//       <h2>
//         All Transactions
//       </h2>
//       <ul>
//         {
//           (transactions.length)
//             ? renderTransactions(transactions)
//             : ''
//         }
//       </ul>
//     </>
//   );
// }

export default Transactions;
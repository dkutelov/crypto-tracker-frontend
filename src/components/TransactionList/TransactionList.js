import { useContext } from 'react';
import TransactionItem from '../TransactionItem/TransactionItem';
import styles from './TransactionList.module.css';
import PortfolioContext from '../../context/portfolioContext';

const headings = [
  'Date',
  'Type',
  'Coin',
  'Amount',
  'Price USD',
  'Total USD',
  'Application',
  'Edit',
  'Delete',
];

const TransactionList = () => {
  const { portfolioState } = useContext(PortfolioContext);
  return (
    <div className={styles.container}>
      <table className={styles.wrapper}>
        <thead>
          <tr>
            {headings.map((heading) => (
              <th key={heading}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {portfolioState.transactions.map((transaction) => (
            <TransactionItem key={transaction._id} {...transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;

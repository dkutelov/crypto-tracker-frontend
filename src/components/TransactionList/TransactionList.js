import TransactionItem from '../TransactionItem/TransactionItem';
import styles from './TransactionList.module.css';

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

const TransactionList = ({ transactions }) => (
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
        {transactions.map((transaction) => (
          <TransactionItem key={transaction._id} {...transaction} />
        ))}
      </tbody>
    </table>
  </div>
);

export default TransactionList;

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../../components/Layout/Layout';
import TransactionList from '../../../components/TransactionList/TransactionList';
import isAuth from '../../../hoc/isAuth';
import PortfolioContext from '../../../context/portfolioContext';

import styles from '../Transaction.module.css';

const Transactions = () => {
  const { portfolioState } = useContext(PortfolioContext);
  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.transactionsHeading}>My Transactions</h2>
        <TransactionList transactions={portfolioState.transactions} />
        <div className={styles.newTransactionBtn}>
          <Link to='/transactions/add' className={styles.addLink}>
            Add transaction
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default isAuth(Transactions);

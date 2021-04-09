import { useEffect, useContext, useReducer } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';
import TransactionList from '../../components/TransactionList/TransactionList';
import isAuth from '../../hoc/isAuth';

import styles from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.heading}>My Portfolio</h2>

        <div>
          <p>Current value: USD 123</p>
        </div>

        <div>
          <p>Chart Last 7 Days</p>
        </div>

        <div>
          <h2 className={styles.transactionsHeading}>My transactions</h2>
          <TransactionList />
        </div>

        <div style={{ marginBottom: '2em' }}>
          <Link to='/transaction/add' className={styles.addLink}>
            Add transaction
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default isAuth(Portfolio);

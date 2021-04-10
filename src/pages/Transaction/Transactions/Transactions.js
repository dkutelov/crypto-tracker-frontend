import { useEffect, useContext, useReducer } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../../components/Layout/Layout';
import TransactionList from '../../../components/TransactionList/TransactionList';
import isAuth from '../../../hoc/isAuth';

import styles from '../Transaction.module.css';

const Transactions = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.heading}>My Transactions</h2>

        <TransactionList />

        <div style={{ marginBottom: '2em' }}>
          <Link to='/transactions/add' className={styles.addLink}>
            Add transaction
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default isAuth(Transactions);

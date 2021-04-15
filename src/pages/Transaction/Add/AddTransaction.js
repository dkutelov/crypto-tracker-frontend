import { useContext, useState, useEffect } from 'react';

import Layout from '../../../components/Layout/Layout';
import TransactionForm from '../../../components/TransactionForm/TransactionForm';
import isAuth from '../../../hoc/isAuth';

import styles from '../Transaction.module.css';

import CryptoContext from '../../../context/cryptoContext';
import ErrorContext from '../../../context/errorContext';

const AddTransaction = ({ history }) => {
  const cryptoContext = useContext(CryptoContext);
  const [cryptoOptions, setCryptoOptions] = useState([]);
  const { _, errorDispatch } = useContext(ErrorContext);

  useEffect(() => {
    const cryptoOptions = cryptoContext.map((coin) => ({
      id: coin.id,
      name: coin.name,
    }));
    setCryptoOptions((prevState) => cryptoOptions);
  }, [cryptoContext]);

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.heading}>Add New Transaction</h2>
        <TransactionForm
          formType='add'
          cryptoOptions={cryptoOptions}
          setError={errorDispatch}
        />
      </div>
    </Layout>
  );
};

export default isAuth(AddTransaction);

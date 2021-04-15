import { useContext, useState, useEffect } from 'react';

import Layout from '../../../components/Layout/Layout';
import TransactionForm from '../../../components/TransactionForm/TransactionForm';
import isAuth from '../../../hoc/isAuth';

import CryptoContext from '../../../context/cryptoContext';
import ErrorContext from '../../../context/errorContext';
import styles from '../Transaction.module.css';

const EditTransaction = ({ match }) => {
  const cryptoContext = useContext(CryptoContext);
  const { _, errorDispatch } = useContext(ErrorContext);
  const [cryptoOptions, setCryptoOptions] = useState([]);
  const transactionId = match.params.id;

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
        <h2 className={styles.heading}>Edit Transaction</h2>
        <TransactionForm
          formType='edit'
          cryptoOptions={cryptoOptions}
          id={transactionId}
          setError={errorDispatch}
        />
      </div>
    </Layout>
  );
};

export default isAuth(EditTransaction);

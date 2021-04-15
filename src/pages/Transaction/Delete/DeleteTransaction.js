import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import format from 'date-fns/format';

import Layout from '../../../components/Layout/Layout';
import isAuth from '../../../hoc/isAuth';

import UserContext from '../../../context/userContext';
import PortfolioContext from '../../../context/portfolioContext';
import ErrorContext from '../../../context/errorContext';

import * as portfolioService from '../../../services/portfolioService';
import styles from '../Transaction.module.css';
import { formatPrice } from '../../../utils/formatPrice';

const Deletetransaction = ({ match }) => {
  const transactionId = match.params.id;
  const {
    state: {
      user: { token },
    },
  } = useContext(UserContext);
  const { portfolioState, portfolioDispatch } = useContext(PortfolioContext);
  const { _, errorDispatch } = useContext(ErrorContext);
  const history = useHistory();

  const transaction = portfolioState.transactions.find(
    (x) => x._id === transactionId
  );

  const handleDelete = () => {
    portfolioService
      .deleteTransaction(transactionId, token)
      .then(({ id }) => {
        history.push('/transactions');
        portfolioDispatch({
          type: 'DELETE_TRANSACTION',
          payload: { id },
        });
      })
      .catch((err) => {
        console.log('err', err);
        errorDispatch({
          type: 'SET_ERROR_MESSAGE',
          payload: 'Delete unsuccessful! Try Again!',
        });
      });
  };
  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.heading}>Delete transaction?</h2>
        <div className={styles.transactionWrapper}>
          <p className={styles.transactionDataLabel}>Date</p>
          <p className={styles.transactionDataValue}>
            {format(new Date(transaction.purchasedAt), 'dd-MM-yyyy hh:mm')}
          </p>
          <p className={styles.transactionDataLabel}>Type</p>
          <p className={styles.transactionDataValue}>
            {transaction.type === 'b' ? 'Buy' : 'Sell'}
          </p>
          <p className={styles.transactionDataLabel}>Coin</p>
          <p
            className={styles.transactionDataValue}
            style={{ textTransform: 'capitalize' }}
          >
            {transaction.coinId}
          </p>
          <p className={styles.transactionDataLabel}>Amount</p>
          <p className={styles.transactionDataValue}>{transaction.amount}</p>
          <p className={styles.transactionDataLabel}>Price USD</p>
          <p className={styles.transactionDataValue}>
            {formatPrice(transaction.price)}
          </p>
          <p className={styles.transactionDataLabel}>Application</p>
          <p
            className={styles.transactionDataValue}
            style={{ textTransform: 'capitalize' }}
          >
            {transaction.application}
          </p>

          <button onClick={handleDelete} className={styles.confirmBtn}>
            Delete
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default isAuth(Deletetransaction);

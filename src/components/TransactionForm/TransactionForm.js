import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import * as portfolioService from '../../services/portfolioService';
import { validate } from '../../utils/transactionFormValidation';
import PortfolioContext from '../../context/portfolioContext';

import styles from './TransactionForm.module.css';
import './TransactionForm.css';
import UserContext from '../../context/userContext';

const TransactionForm = ({ formType, cryptoOptions }) => {
  const {
    state: {
      user: { token },
    },
  } = useContext(UserContext);
  const portfolioContext = useContext(PortfolioContext);
  const history = useHistory();

  const [formData, setfFormData] = useState({
    type: 'b',
    coinId: '',
    amount: 0,
    price: 0,
    application: '',
  });
  const [formErrors, setfFormErrors] = useState({
    coinId: '',
    amount: '',
    price: '',
  });

  const handleInputChange = (e) => {
    setfFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { portfolioState } = portfolioContext;

    validate(formData, setfFormErrors);

    portfolioService
      .addTransaction(
        {
          ...formData,
          portfolioId: portfolioState.portfolioId,
        },
        token
      )
      .then((portfolio) => {
        history.push('/portfolio');
      });
  };

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleFormSubmit}>
        <div className={styles.inputGroup} style={{ textAlign: 'left' }}>
          <p style={{ marginBottom: 0 }}>Type of transaction</p>
          <input
            type='radio'
            name='type'
            id='buy'
            value='b'
            checked={formData.type === 'b'}
            onChange={handleInputChange}
            style={{ display: 'none' }}
          />
          <label htmlFor='buy' className={styles.radioSquare}>
            Buy
          </label>
          <input
            type='radio'
            name='type'
            id='sell'
            value='s'
            checked={formData.type === 's'}
            onChange={handleInputChange}
            style={{ display: 'none' }}
          />
          <label htmlFor='sell' className={styles.radioSquare}>
            Sell
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='coin' className={styles.label}>
            Crypto Currency
          </label>
          <select
            id='coin'
            name='coinId'
            value={formData.coinId}
            onChange={handleInputChange}
            className={styles.select}
          >
            <option value='' disabled='disabled' hidden>
              Choose Coin
            </option>
            {cryptoOptions.map((coin) => (
              <option value={coin.id} key={coin.id}>
                {coin.name}
              </option>
            ))}
          </select>
          <span className={styles.error}>
            {formErrors.coinId && formErrors.coinId}
          </span>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='amount' className={styles.label}>
            Amount
          </label>
          <input
            type='number'
            name='amount'
            id='amount'
            value={formData.amount}
            onChange={handleInputChange}
            className={styles.field}
          />
          <span className={styles.error}>
            {formErrors.amount && formErrors.amount}
          </span>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='price' className={styles.label}>
            Price (USD)
          </label>
          <input
            type='number'
            name='price'
            id='price'
            value={formData.price}
            onChange={handleInputChange}
            className={styles.field}
          />
          <span className={styles.error}>
            {formErrors.price && formErrors.price}
          </span>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='application' className={styles.label}>
            App
          </label>
          <select
            id='application'
            name='application'
            value={formData.application}
            onChange={handleInputChange}
            className={styles.select}
          >
            <option value='' disabled='disabled' hidden>
              Choose Application
            </option>
            <option value='binance'>Binance</option>
            <option value='crypterium'>Crypterium</option>
            <option value='other'>Other</option>
          </select>
          <span className={styles.error}>
            {formErrors.coinId && formErrors.coinId}
          </span>
        </div>
        <button type='submit' className={styles.button}>
          {formType}
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;

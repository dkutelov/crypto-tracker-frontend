import { useState, useContext } from 'react';

import styles from './TransactionForm.module.css';
import './TransactionForm.css';
import { validate } from '../../utils/transactionFormValidation';
import PortfolioContext from '../../context/portfolioContext';

const TransactionForm = ({ formType, cryptoOptions }) => {
  const portfolioContext = useContext(PortfolioContext);

  console.log('portfolioContext', portfolioContext);
  const [formData, setfFormData] = useState({
    type: 'b',
    coinId: '',
    amount: 0,
    price: 0,
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
    console.log(formData);

    // validation
    validate(formData, setfFormErrors);

    // service
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
        <button type='submit' className={styles.button}>
          {formType}
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;

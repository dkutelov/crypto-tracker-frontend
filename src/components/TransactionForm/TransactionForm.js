import styles from './TransactionForm.module.css';
import './TransactionForm.css';

const TransactionForm = ({ formType, cryptoOptions }) => {
  return (
    <div className={styles.formWrapper}>
      <form>
        <div className={styles.inputGroup} style={{ textAlign: 'left' }}>
          <p style={{ marginBottom: 0 }}>Type of transaction</p>
          <input
            type='radio'
            name='type'
            id='buy'
            style={{ display: 'none' }}
          />
          <label htmlFor='buy' className={styles.radioSquare}>
            Buy
          </label>
          <input
            type='radio'
            name='type'
            id='sell'
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
          <select id='coin' name='coin' className={styles.select}>
            <option value='' disabled='disabled' defaultValue hidden>
              Choose Coin
            </option>
            {cryptoOptions.map((coin) => (
              <option value={coin.id} key={coin.id}>
                {coin.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='amount' className={styles.label}>
            Amount
          </label>
          <input
            type='number'
            name='amount'
            id='amount'
            className={styles.field}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='price' className={styles.label}>
            Price (USD)
          </label>
          <input
            type='number'
            name='price'
            id='price'
            className={styles.field}
          />
        </div>
        <button type='submit' className={styles.button}>
          {formType}
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;

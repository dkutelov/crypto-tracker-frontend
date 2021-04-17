import { useState, useContext } from 'react';

import Layout from '../../components/Layout/Layout';
import isAuth from '../../hoc/isAuth';

import CryptoContext from '../../context/cryptoContext';
import * as cryptoService from '../../services/cryptoService';
import loadingIcon from '../../assets/icons/loading.gif';
import './BuyCoin.css';
import StripePaymentButton from '../../components/StripePaymentButton/StripePaymentButton';

const BuyCoin = () => {
  const [coin, setCoin] = useState('');
  const [price, setPrice] = useState(null);
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const cryptoContext = useContext(CryptoContext);

  const cryptoOptions = cryptoContext.map((coin) => ({
    id: coin.id,
    name: coin.name,
  }));

  const handleSelectChange = (e) => {
    const coinId = e.target.value;
    setCoin(coinId);
    setLoading(true);
    cryptoService.getCurrentPrice(coinId).then((data) => {
      setPrice(data[coinId].usd);
      setLoading(false);
    });
  };

  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <Layout>
      <div className='container'>
        <h2 className='heading'>Buy Coin</h2>
        <div className='info-section'>
          <h3>Select a coin</h3>
          <select
            id='coin'
            name='coinId'
            value={coin}
            onChange={handleSelectChange}
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
        </div>
        <div className='info-section'>
          <h3>Current price, USD</h3>
          {!coin && <p>No coin selected</p>}
          {loading && (
            <img
              src={loadingIcon}
              alt='loading currency price'
              width={25}
              height={25}
            />
          )}
          {price && !loading && <p>{price}</p>}
        </div>
        <div className='info-section'>
          <label htmlFor='amount' className='label'>
            Coin amount
          </label>
          <input
            type='number'
            name='amount'
            id='amount'
            value={amount}
            onChange={handleInputChange}
            className='field'
          />
        </div>
        {price && amount && (
          <div className='info-section'>
            <h3>Purchase amount, USD</h3>
            <p>{(price * amount).toFixed(2)}</p>
          </div>
        )}

        <div className='info-section'>
          <div className='payBtnWrapper'>
            <StripePaymentButton
              price={price * amount}
              disabled={!price && !amount}
              transaction={{
                coinId: coin,
                price,
                amount,
              }}
            />
          </div>
          <div className='info-credit-card'>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default isAuth(BuyCoin);

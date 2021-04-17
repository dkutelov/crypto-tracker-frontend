import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

import PortfolioContext from '../../context/portfolioContext';
import ErrorContext from '../../context/errorContext';
import UserContext from '../../context/userContext';

import * as portfolioService from '../../services/portfolioService';

import styles from './StripePaymentButton.module.css';

const StripePaymentButton = ({ price, disabled, transaction }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_WBqax2FWVzS9QlpJScO07iuL';

  const {
    state: {
      user: { token },
    },
  } = useContext(UserContext);
  const { portfolioState, portfolioDispatch } = useContext(PortfolioContext);
  const { _, errorDispatch } = useContext(ErrorContext);

  const history = useHistory();

  console.log(transaction);
  const onToken = (stripeToken) => {
    console.log(stripeToken);
    portfolioService
      .addTransaction(
        {
          type: 'b',
          ...transaction,
          portfolioId: portfolioState.portfolioId,
        },
        token
      )
      .then((transaction) => {
        const { createdTransaction } = transaction;
        portfolioDispatch({
          type: 'ADD_TRANSACTION',
          payload: { transaction: createdTransaction },
        });
        history.push('/transactions');
      })
      .catch((err) => {
        errorDispatch({ type: 'SET_ERROR_MESSAGE', payload: err.message });
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Crypterio'
      billingAddress
      shippingAddress
      image='https://www.cryptofonts.com/img/icons/goc.svg'
      description={`Your total is $${price.toFixed(2)}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    >
      <button disabled={disabled} className={styles.payButton}>
        Pay
      </button>
    </StripeCheckout>
  );
};

export default StripePaymentButton;

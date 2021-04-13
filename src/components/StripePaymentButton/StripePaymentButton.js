import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import styles from './StripePaymentButton.module.css';

const StripePaymentButton = ({ price, disabled }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_WBqax2FWVzS9QlpJScO07iuL';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Succesful!');
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

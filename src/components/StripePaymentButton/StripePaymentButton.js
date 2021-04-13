import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripePaymentButton = ({ price }) => {
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
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripePaymentButton;

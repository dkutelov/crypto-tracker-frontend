import StripePaymentButton from '../StripePaymentButton/StripePaymentButton';

const BuyCrypto = () => {
  let price = 1;
  return (
    <div>
      <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripePaymentButton price={price} />
    </div>
  );
};

export default BuyCrypto;

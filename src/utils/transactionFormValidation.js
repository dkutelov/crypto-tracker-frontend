export function validate(data, setfFormErrors) {
  const errors = {
    coinId: '',
    amount: '',
    price: '',
  };

  if (data.price <= 0) {
    errors.price = 'Price can not be negative or zero!';
  } else {
    errors.price = '';
  }

  if (data.coinId === '') {
    errors.coinId = 'Please, select a coin!';
  } else {
    errors.coinId = '';
  }

  if (data.amount <= 0) {
    errors.amount = 'Amount can not be negative or zero!';
  } else {
    errors.amount = '';
  }

  setfFormErrors((prevData) => ({
    ...errors,
  }));
}

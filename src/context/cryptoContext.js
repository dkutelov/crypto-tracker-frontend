import { createContext } from 'react';

const initialData = {
  cryptoData: [],
};

const cryptoContext = createContext(initialData);
cryptoContext.displayName = 'CryptoContext';

export default cryptoContext;

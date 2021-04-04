import { createContext } from 'react';

const initialData = {
  cryptoData: [],
};

const cryptoContext = createContext(initialData);

export default cryptoContext;

import { createContext } from 'react';

const errorContext = createContext({
  message: '',
});
errorContext.displayName = 'ErrorContext';
export default errorContext;

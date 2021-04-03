import { createContext } from 'react';

const initialData = {
  user: null,
  isAuthenticated: false,
};

const userContext = createContext(initialData);

export default userContext;

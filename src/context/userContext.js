import { createContext } from 'react';

const initialData = {
  user: null,
  isAuthenticated: false,
};

const userContext = createContext(initialData);
userContext.displayName = 'UserContext';

export default userContext;

import { useContext, useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Portfolio from './pages/Portfolio';
import Profile from './pages/Profile';
import NotFoundPage from './pages/NotFoundPage';

import UserContext from './context/userContext';
import userReducer from './reducers/user.reducer';

const App = () => {
  const initialUser = useContext(UserContext);
  const [state, dispatch] = useReducer(userReducer, initialUser);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Router>
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/auth/login' component={Login} />
          <Route path='/auth/register' component={Login} />
          <Route path='/profile' component={Profile} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;

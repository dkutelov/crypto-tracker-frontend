import { useState, useEffect, useContext, useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import CoinDetail from './pages/CoinDetail/CoinDetail';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Portfolio from './pages/Portfolio/Portfolio';
import AddTransaction from './pages/Transaction/Add/AddTransaction';
import Profile from './pages/Profile/Profile';
import NotFoundPage from './pages/NotFoundPage';

import UserContext from './context/userContext';
import userReducer from './reducers/user.reducer';
import * as cryptoService from './services/cryptoService';
import CryptoContext from './context/cryptoContext';

const App = () => {
  const [cryptoData, setCryptoData] = useState([]);

  const initialUser = useContext(UserContext);
  const [state, dispatch] = useReducer(userReducer, initialUser);

  useEffect(() => {
    cryptoService
      .getAll()
      .then((data) => {
        setCryptoData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <CryptoContext.Provider value={cryptoData}>
        <Router>
          <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/coins/:name' component={CoinDetail} />
            <Route path='/auth/login' component={Login} />
            <Route path='/auth/register' component={Register} />
            <Route path='/profile' component={Profile} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/transaction/add' component={AddTransaction} />
            <Route path='*' component={NotFoundPage} />
          </Switch>
        </Router>
      </CryptoContext.Provider>
    </UserContext.Provider>
  );
};

export default App;

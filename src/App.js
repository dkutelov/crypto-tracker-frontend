import { useState, useEffect, useContext, useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import CoinDetail from './pages/CoinDetail/CoinDetail';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Portfolio from './pages/Portfolio/Portfolio';
import Transactions from './pages/Transaction/Transactions/Transactions';
import AddTransaction from './pages/Transaction/Add/AddTransaction';
import DeleteTransaction from './pages/Transaction/Delete/DeleteTransaction';
import EditTransaction from './pages/Transaction/Edit/EditTransaction';
import Profile from './pages/Profile/Profile';
import EditProfile from './pages/Profile/EditProfile';
import BuyCoin from './pages/BuyCoin/BuyCoin';
import NotFoundPage from './pages/NotFoundPage';
import Error from './components/Error/Error';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import UserContext from './context/userContext';
import CryptoContext from './context/cryptoContext';
import PortfolioContext from './context/portfolioContext';
import ErrorContext from './context/errorContext';

import userReducer from './reducers/user.reducer';
import portfolioReducer from './reducers/portfolio.reducer';
import errorReducer from './reducers/error.reducer';

import * as cryptoService from './services/cryptoService';
import * as portfolioService from './services/portfolioService';
import * as profileService from './services/profileService';

const App = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});

  const initialUser = useContext(UserContext);
  const initialPortfolio = useContext(PortfolioContext);
  const initialError = useContext(ErrorContext);

  const [state, dispatch] = useReducer(userReducer, initialUser);
  const [portfolioState, portfolioDispatch] = useReducer(
    portfolioReducer,
    initialPortfolio
  );
  const [errorState, errorDispatch] = useReducer(errorReducer, initialError);

  useEffect(() => {
    setLoading(true);
    cryptoService
      .getAll()
      .then((data) => {
        setCryptoData(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        errorDispatch({
          type: 'SET_ERROR_MESSAGE',
          payload: 'Something went wrong! Try again!',
        });
      });
  }, []);

  useEffect(() => {
    if (state.user) {
      portfolioService
        .getOne(state.user?.token)
        .then((portfolio) => {
          portfolioDispatch({ type: 'SET_PORTFOLIO', payload: portfolio });
        })
        .catch((err) => {
          setLoading(false);
          errorDispatch({
            type: 'SET_ERROR_MESSAGE',
            payload: 'Something went wrong! Try again!',
          });
        });
    }
  }, [state.user]);

  useEffect(() => {
    if (state.user) {
      profileService
        .getProfile(state.user?.token)
        .then((profile) => {
          setProfile(profile);
        })
        .catch((err) => {
          setLoading(false);
          errorDispatch({
            type: 'SET_ERROR_MESSAGE',
            payload: 'Something went wrong! Try again!',
          });
        });
    }
  }, [state.user]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <ErrorContext.Provider value={{ errorState, errorDispatch }}>
        {errorState && errorState.message && (
          <Error message={errorState.message} setError={errorDispatch} />
        )}
        <ErrorBoundary>
          <Router>
            <Switch>
              <Route path='/auth/login' component={Login} />
              <Route path='/auth/register' component={Register} />
              <Route
                path='/profile'
                exact
                render={(props) => (
                  <Profile
                    {...props}
                    profile={profile}
                    setProfile={setProfile}
                  />
                )}
              />
              <Route
                path='/profile/edit'
                render={(props) => (
                  <EditProfile
                    {...props}
                    profile={profile}
                    setProfile={setProfile}
                  />
                )}
              />
              <CryptoContext.Provider value={cryptoData}>
                <Route
                  path='/'
                  exact
                  render={() => <Homepage loading={loading} />}
                />
                <Route path='/coins/:name' component={CoinDetail} />
                <PortfolioContext.Provider
                  value={{ portfolioState, portfolioDispatch }}
                >
                  <Route path='/portfolio' component={Portfolio} />
                  <Route path='/buy' component={BuyCoin} />
                  <Route path='/transactions' exact component={Transactions} />
                  <Route path='/transactions/add' component={AddTransaction} />
                  <Route
                    path='/transactions/:id/delete'
                    component={DeleteTransaction}
                  />
                  <Route
                    path='/transactions/:id/edit'
                    component={EditTransaction}
                  />
                </PortfolioContext.Provider>
              </CryptoContext.Provider>
              <Route path='*' component={NotFoundPage} />
            </Switch>
          </Router>
        </ErrorBoundary>
      </ErrorContext.Provider>
    </UserContext.Provider>
  );
};

export default App;

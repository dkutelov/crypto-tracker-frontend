import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Login from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';

import UserContext from './context/userContext';

const App = () => {
  return (
    <UserContext.Provider>
      <Router>
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/auth/login' component={Login} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;

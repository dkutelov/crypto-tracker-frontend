import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;

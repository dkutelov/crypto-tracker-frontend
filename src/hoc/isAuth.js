import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../context/userContext';

const isAuth = (InnerComponent) => {
  const Component = (props) => {
    const {
      state: { isAuthenticated },
    } = useContext(UserContext);

    const history = useHistory();

    if (!isAuthenticated) {
      history.push('/auth/login');

      return null;
    }

    return <InnerComponent {...props} />;
  };

  return Component;
};

export default isAuth;

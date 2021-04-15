import { useContext } from 'react';

import LoginForm from '../../components/AuthForms/Login/LoginForm';
import Layout from '../../components/Layout/Layout';

import UserContext from '../../context/userContext';
import ErrorContext from '../../context/errorContext';

const Login = ({ history }) => {
  const { dispatch } = useContext(UserContext);
  const { _, errorDispatch } = useContext(ErrorContext);

  return (
    <Layout>
      <LoginForm
        history={history}
        dispatch={dispatch}
        setError={errorDispatch}
      />
    </Layout>
  );
};

export default Login;

import { useContext } from 'react';

import LoginForm from '../../components/AuthForms/Login/LoginForm';
import Layout from '../../components/Layout/Layout';
import UserContext from '../../context/userContext';

const Login = ({ history }) => {
  const { dispatch } = useContext(UserContext);
  return (
    <Layout>
      <LoginForm history={history} dispatch={dispatch} />
    </Layout>
  );
};

export default Login;

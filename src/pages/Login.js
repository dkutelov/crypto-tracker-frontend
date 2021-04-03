import { useContext } from 'react';

import AuthForm from '../components/AuthForm/AuthForm';
import Layout from '../components/Layout/Layout';
import UserContext from '../context/userContext';

const Login = ({ history }) => {
  const { dispatch } = useContext(UserContext);
  return (
    <Layout>
      <AuthForm history={history} dispatch={dispatch} />
    </Layout>
  );
};

export default Login;

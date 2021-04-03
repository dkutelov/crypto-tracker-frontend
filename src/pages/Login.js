import AuthForm from '../components/AuthForm/AuthForm';
import Layout from '../components/Layout/Layout';

const Login = ({ history }) => {
  return (
    <Layout>
      <AuthForm history={history} />
    </Layout>
  );
};

export default Login;

import { useContext } from 'react';

import RegisterForm from '../../components/AuthForms/Register/RegisterForm';
import Layout from '../../components/Layout/Layout';

import UserContext from '../../context/userContext';

const Register = ({ history }) => {
  const { dispatch } = useContext(UserContext);
  return (
    <Layout>
      <RegisterForm history={history} dispatch={dispatch} />
    </Layout>
  );
};

export default Register;

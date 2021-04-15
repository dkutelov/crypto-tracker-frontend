import { useContext } from 'react';

import RegisterForm from '../../components/AuthForms/Register/RegisterForm';
import Layout from '../../components/Layout/Layout';

import UserContext from '../../context/userContext';
import ErrorContext from '../../context/errorContext';

const Register = ({ history }) => {
  const { dispatch } = useContext(UserContext);
  const { _, errorDispatch } = useContext(ErrorContext);
  return (
    <Layout>
      <RegisterForm
        history={history}
        dispatch={dispatch}
        setError={errorDispatch}
      />
    </Layout>
  );
};

export default Register;

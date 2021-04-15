import { useState, useContext } from 'react';

import RegisterForm from '../../components/AuthForms/Register/RegisterForm';
import Error from '../../components/Error/Error';
import Layout from '../../components/Layout/Layout';

import UserContext from '../../context/userContext';

const Register = ({ history }) => {
  const [submitError, setSubmitError] = useState('');
  const { dispatch } = useContext(UserContext);
  return (
    <Layout>
      {submitError && <Error message={submitError} setError={setSubmitError} />}
      <RegisterForm
        history={history}
        dispatch={dispatch}
        setSubmitError={setSubmitError}
      />
    </Layout>
  );
};

export default Register;

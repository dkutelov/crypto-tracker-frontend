import { withFormik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import styles from '../AuthForms.module.css';
import * as authService from '../../../services/authService';

const LoginPage = ({ touched, errors }) => {
  return (
    <>
      <div className={styles.formWrapper}>
        <h2 className={styles.heading}>Login</h2>
        <Form className={styles.formContainer}>
          <div className={styles.inputGroup}>
            <label htmlFor='username' className={styles.label}>
              Username
            </label>
            <Field type='text' name='username' className={styles.field} />
            {touched.username && errors.username && (
              <span className={styles.error}>{errors.username}</span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor='password' className={styles.label}>
              Password
            </label>
            <Field type='password' name='password' className={styles.field} />
            {touched.password && errors.password && (
              <span className={styles.error}>{errors.password}</span>
            )}
          </div>
          <button type='submit' className={styles.button}>
            Login
          </button>
        </Form>
        <span className={styles.registerText}>
          Do not have an account yet?{' '}
          <Link to='/auth/register' className={styles.registerLink}>
            Register!
          </Link>
        </span>
      </div>
    </>
  );
};

const LoginFormik = withFormik({
  mapPropsToValues: (props) => {
    return {
      username: props.username || 'dario',
      password: props.password || 'KK12asd&',
      history: props.history,
      dispatch: props.dispatch,
      setError: props.setError,
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(4, 'Username should be min 4 characters!')
      .required('Username is required')
      .matches(
        /^[a-z0-9]+$/,
        'Username can contain only lowercase alphanumeric!'
      ),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/,
        'Password should be min 8 letters, 2 capital letters, one special char, 2 numbers, 3 small letters!'
      )
      .required('Password is required'),
  }),
  handleSubmit: (values) => {
    const { username, password, history, dispatch, setError } = values;
    authService
      .login(username, password)
      .then((user) => {
        dispatch({ type: 'LOGIN_USER', payload: { user } });
        history.push('/');
      })
      .catch((err) => {
        setError({ type: 'SET_ERROR_MESSAGE', payload: err.message });
      });
  },
})(LoginPage);

export default LoginFormik;

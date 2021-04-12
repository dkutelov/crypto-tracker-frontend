import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import PhotoUpload from '../PhotoUpload/PhotoUpload';
import { validate } from '../../utils/transactionFormValidation';

import styles from './profileForm.module.css';
import './ProfileForm.css';
import UserContext from '../../context/userContext';

const CreateProfile = ({ formType, cryptoOptions, id }) => {
  const {
    state: {
      user: { token },
    },
  } = useContext(UserContext);

  const history = useHistory();

  const [formData, setfFormData] = useState({
    avatarUrl: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  const [formErrors, setfFormErrors] = useState({
    coinId: '',
    amount: '',
    price: '',
  });

  const handleInputChange = (e) => {
    setfFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    validate(formData, setfFormErrors);

    if (formType === 'create') {
    } else if (formType === 'edit') {
    }
  };

  return (
    <div className={styles.formWrapper}>
      <span className={styles.label}>Avatar</span>
      <PhotoUpload />
      <form onSubmit={handleFormSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor='first-name' className={styles.label}>
            First Name
          </label>
          <input
            type='text'
            name='firstName'
            id='first-name'
            value={formData.firstName}
            onChange={handleInputChange}
            className={styles.field}
          />
          <span className={styles.error}>
            {formErrors.amount && formErrors.amount}
          </span>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='last-name' className={styles.label}>
            Last Name
          </label>
          <input
            type='text'
            name='lastName'
            id='last-name'
            value={formData.lastName}
            onChange={handleInputChange}
            className={styles.field}
          />
          <span className={styles.error}>
            {formErrors.amount && formErrors.amount}
          </span>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='email' className={styles.label}>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            value={formData.firstName}
            onChange={handleInputChange}
            className={styles.field}
          />
          <span className={styles.error}>
            {formErrors.amount && formErrors.amount}
          </span>
        </div>

        <button type='submit' className={styles.button}>
          {formType}
        </button>
      </form>
    </div>
  );
};

export default CreateProfile;

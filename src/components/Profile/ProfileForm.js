import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import PhotoUpload from '../PhotoUpload/PhotoUpload';
import UserContext from '../../context/userContext';
import * as profileService from '../../services/profileService';

import styles from './profileForm.module.css';
import './ProfileForm.css';

const CreateProfile = ({ formType, setProfile }) => {
  const {
    state: {
      user: { token },
    },
  } = useContext(UserContext);
  const [uploadAvatar, setUploadAvatar] = useState(true);

  const history = useHistory();

  const [formData, setFormData] = useState({
    avatarUrl: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  const [formErrors, setFormErrors] = useState({
    error: '',
  });

  const handleAddAvatar = (downloadUrl) => {
    setFormData((state) => ({ ...state, avatarUrl: downloadUrl }));
    setUploadAvatar(false);
  };

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      formData.firstName === '' ||
      formData.lastName === '' ||
      formData.email === ''
    ) {
      setFormErrors({ error: 'Fields can not be empty!' });
    }

    if (formType === 'create') {
      profileService.createProfile(formData, token).then(({ profile }) => {
        setProfile(profile);
      });
    } else if (formType === 'edit') {
    }
  };

  return (
    <div className={styles.formWrapper}>
      <div>
        <span className={styles.label}>Avatar</span>
        {formData.avatarUrl && !uploadAvatar ? (
          <img
            src={formData.avatarUrl}
            alt='uploaded avatar preview'
            className={styles.avatarPreview}
          />
        ) : (
          <PhotoUpload handleAddAvatar={handleAddAvatar} />
        )}
        <div>
          {!uploadAvatar && (
            <button
              onClick={() => setUploadAvatar(true)}
              className={styles.button}
            >
              Update
            </button>
          )}
        </div>
      </div>
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
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='email' className={styles.label}>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleInputChange}
            className={styles.field}
          />
        </div>

        <div className={styles.error}>
          {formErrors.error && formErrors.error}
        </div>

        <button type='submit' className={styles.button}>
          {formType}
        </button>
      </form>
    </div>
  );
};

export default CreateProfile;

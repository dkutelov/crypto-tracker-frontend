import { useState, useEffect, useContext } from 'react';

import Layout from '../../components/Layout/Layout';
import ProfileForm from '../../components/Profile/ProfileForm';
import isAuth from '../../hoc/isAuth';

import * as profileService from '../../services/profileService';
import UserContext from '../../context/userContext';

import styles from './Profile.module.css';
import Loading from '../../components/Loading/Loading';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [profileExists, setProfileExists] = useState(true);

  const {
    state: { user },
  } = useContext(UserContext);
  useEffect(() => {
    setLoading(true);
    profileService.getProfile(user.id, user.token).then((profile) => {
      if (!profile) {
        setProfileExists(false);
      } else {
        setProfile(profile);
      }
      setLoading(false);
    });
  }, [user.id, user.token]);

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <h2>My Profile</h2>

          {profileExists ? (
            <>
              <p>show profile</p>
            </>
          ) : (
            <>
              <h4>No profile yet, create one!</h4>
              <ProfileForm formType='create' />
            </>
          )}
        </div>
      )}
    </Layout>
  );
};

export default isAuth(Profile);

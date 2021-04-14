import Layout from '../../components/Layout/Layout';
import isAuth from '../../hoc/isAuth';
import ProfileForm from '../../components/Profile/ProfileForm/ProfileForm';

import styles from './Profile.module.css';

const EditProfile = ({ profile, setProfile }) => {
  return (
    <Layout>
      <div className={styles.container}>
        <h2>Edit Your Profile</h2>
        <ProfileForm
          formType='edit'
          setProfile={setProfile}
          profile={profile}
        />
      </div>
    </Layout>
  );
};

export default isAuth(EditProfile);

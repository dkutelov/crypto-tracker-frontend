import Layout from '../../components/Layout/Layout';
import ProfileForm from '../../components/Profile/ProfileForm/ProfileForm';
import DisplayProfile from '../../components/Profile/DisplayProfile/DisplayProfile';
import isAuth from '../../hoc/isAuth';

import styles from './Profile.module.css';

const Profile = ({ profile, setProfile }) => {
  return (
    <Layout>
      <div className={styles.container}>
        <h2>My Profile</h2>

        {profile ? (
          <>
            <DisplayProfile profile={profile} />
          </>
        ) : (
          <>
            <h4>No profile yet, create one!</h4>
            <ProfileForm formType='create' setProfile={setProfile} />
          </>
        )}
      </div>
    </Layout>
  );
};

export default isAuth(Profile);

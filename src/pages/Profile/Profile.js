import Layout from '../../components/Layout/Layout';
import PhotoUpload from '../../components/PhotoUpload/PhotoUpload';
import isAuth from '../../hoc/isAuth';

import styles from './Profile.module.css';

const Profile = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h2>My Profile</h2>

        <h3>Avatar</h3>
        <PhotoUpload />
      </div>
    </Layout>
  );
};

export default isAuth(Profile);

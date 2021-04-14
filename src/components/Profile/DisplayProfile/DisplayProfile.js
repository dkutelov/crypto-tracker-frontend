import { Link } from 'react-router-dom';
import styles from './DisplayProfile.module.css';

const DisplayProfile = ({ profile }) => {
  const { _id, avatarUrl, email, firstName, lastName } = profile;
  return (
    <div>
      <div className={styles.avatarWrapper}>
        <h3 className={styles.avatarHeading}>Avatar</h3>
        <img src={avatarUrl} alt='my avatar' className={styles.avatar} />
      </div>
      <div className={styles.infoWrapper}>
        <p className={styles.infoLabel}>First Name</p>
        <p className={styles.infoData}>{firstName}</p>
        <p className={styles.infoLabel}>Last Name</p>
        <p className={styles.infoData}>{lastName}</p>
        <p className={styles.infoLabel}>Email</p>
        <p className={styles.infoData}>{email}</p>

        <div className={styles.editLinkWrapper}>
          <Link to={`/profile/edit`} className={styles.editLink}>
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DisplayProfile;

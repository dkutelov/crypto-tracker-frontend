import loadingIcon from '../../assets/icons/loading.gif';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <img src={loadingIcon} alt='loading' />
    </div>
  );
};

export default Loading;

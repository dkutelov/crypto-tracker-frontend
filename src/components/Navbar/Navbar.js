import { Link } from 'react-router-dom';

import logo from '../../assets/icons/logo.svg';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <img src={logo} alt='crypto helper' className={styles.logo} />
          <h1 className={styles.heading}>CryptoHelper</h1>
        </div>
        <nav>
          <ul className={styles.navWrapper}>
            <li>
              <Link to='/auth/login' className={styles.loginBtn}>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

import { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import logo from '../../../assets/icons/logo.svg';
import styles from './Navbar.module.css';
import UserContext from '../../../context/userContext';

const Navbar = () => {
  const {
    state: { isAuthenticated },
    dispatch,
  } = useContext(UserContext);
  const history = useHistory();

  function handleLogout() {
    dispatch({ type: 'LOGOUT_USER' });
    history.push('/');
  }
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <NavLink to='/' className={styles.logoWrapper}>
            <img src={logo} alt='crypto helper' className={styles.logo} />
            <h1 className={styles.heading}>Crypterio</h1>
          </NavLink>
        </div>
        <nav className={styles.navigation}>
          <ul className={styles.navWrapper}>
            {isAuthenticated ? (
              <>
                <li className={styles.linkWrapper}>
                  <NavLink to='/portfolio' className={styles.navLink}>
                    Portfio
                  </NavLink>
                </li>
                <li className={styles.linkWrapper}>
                  <NavLink to='/transactions' className={styles.navLink}>
                    Transactions
                  </NavLink>
                </li>
                <li className={styles.linkWrapper}>
                  <NavLink to='/profile' className={styles.navLink}>
                    Profile
                  </NavLink>
                </li>
                <li className={styles.linkWrapper}>
                  <NavLink to='/buy' className={styles.navLinkButton}>
                    Buy
                  </NavLink>
                </li>
                <li className={styles.authBtn} onClick={handleLogout}>
                  Logout
                </li>
              </>
            ) : (
              <li className={styles.linkWrapper}>
                <NavLink to='/auth/login' className={styles.authBtn}>
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

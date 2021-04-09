import { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import logo from '../../assets/icons/logo.svg';
import styles from './Navbar.module.css';
import UserContext from '../../context/userContext';

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
    <header>
      <div className={styles.container}>
        <div>
          <NavLink to='/' className={styles.logoWrapper}>
            <img src={logo} alt='crypto helper' className={styles.logo} />
            <h1 className={styles.heading}>CryptoHelper</h1>
          </NavLink>
        </div>
        <nav>
          <ul className={styles.navWrapper}>
            {isAuthenticated ? (
              <>
                <li>
                  <NavLink to='/portfolio' className={styles.navLink}>
                    My Portfio
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/profile' className={styles.navLink}>
                    Profile
                  </NavLink>
                </li>
                <li className={styles.authBtn} onClick={handleLogout}>
                  Logout
                </li>
              </>
            ) : (
              <li>
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

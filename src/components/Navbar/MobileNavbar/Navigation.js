import { useContext } from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';

import UserContext from '../../../context/userContext';
import styles from './Navbar.module.css';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const menuItems = [
  {
    id: 0,
    path: '/',
    linkName: 'Home',
  },
  {
    id: 1,
    path: '/portfolio',
    linkName: 'Portfolio',
  },
  {
    id: 2,
    path: '/transactions',
    linkName: 'Transactions',
  },
  {
    id: 3,
    path: '/profile',
    linkName: 'Profile',
  },
  {
    id: 4,
    path: '/buy',
    linkName: 'Buy',
  },
];

export const Navigation = () => {
  const {
    state: { isAuthenticated },
    dispatch,
  } = useContext(UserContext);

  function handleLogout() {
    dispatch({ type: 'LOGOUT_USER' });
  }

  return (
    <motion.ul variants={variants} className={styles.linkWrapper}>
      {isAuthenticated ? (
        <>
          {menuItems.map(({ id, path, linkName }) => (
            <MenuItem key={id} linkName={linkName} path={path} />
          ))}
          <MenuItem linkName='Logout' path={'/'} clickHandler={handleLogout} />
        </>
      ) : (
        <MenuItem linkName='Login' path='/auth/login' />
      )}
    </motion.ul>
  );
};

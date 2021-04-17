import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from './useDimensions';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';

import styles from './Navbar.module.css';
import './styles.css';
import logo from '../../../assets/icons/logo.svg';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const MobileNavbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <div className={styles.container}>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
        className={styles.nav}
      >
        <motion.div className='background' variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
      <div>
        <NavLink to='/' className={styles.logoWrapper}>
          <img src={logo} alt='crypto helper' className={styles.logo} />
          <h1 className={styles.heading}>Crypterio</h1>
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNavbar;

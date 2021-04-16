import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ linkName, path, clickHandler = () => {} }) => {
  const style = { border: `2px solid #27be94` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={clickHandler}
    >
      <NavLink
        to={path}
        style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          className='icon-placeholder'
          style={{ ...style, backgroundColor: '#27be94' }}
        />
        <div
          className='text-placeholder'
          style={{
            ...style,
            padding: '0.5em 1em',
            color: '#27be94',
            textDecoration: 'none',
          }}
        >
          {linkName}
        </div>
      </NavLink>
    </motion.li>
  );
};

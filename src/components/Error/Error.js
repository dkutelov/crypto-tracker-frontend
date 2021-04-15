import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import styles from './Error.module.css';

const Error = ({
  message = 'Something went wrong! Please, try again',
  setError,
}) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
    const timeOut = setTimeout(() => {
      setShow(false);
      setError({ type: 'RESET_ERROR_MESSAGE' });
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [message, setError]);

  return (
    <>
      {show && (
        <motion.div animate={{ scale: 2 }} className={styles.errorWrapper}>
          <span>{message}</span>
        </motion.div>
      )}
    </>
  );
};

export default Error;

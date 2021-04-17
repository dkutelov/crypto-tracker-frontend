import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <section className={styles.sectionWrapper}>
        <Navbar />
        <main>
          <section>{children}</section>
        </main>
      </section>
      <Footer />
    </>
  );
};

export default Layout;

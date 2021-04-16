import Footer from '../Footer/Footer';
import MobileNavbar from '../Navbar/MobileNavbar/MobileNavbar';
import Navbar from '../Navbar/Navbar/Navbar';

import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <section className={styles.sectionWrapper}>
        <Navbar />
        <MobileNavbar />
        <main>
          <section>{children}</section>
        </main>
      </section>
      <Footer />
    </>
  );
};

export default Layout;

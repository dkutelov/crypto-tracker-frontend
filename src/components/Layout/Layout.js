import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children, marginTop = 60 }) => {
  return (
    <>
      <section style={{ flex: '1 0 auto' }}>
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

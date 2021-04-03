import Navbar from '../Navbar/Navbar';

const Layout = ({ children, marginTop = 60 }) => {
  return (
    <section>
      <Navbar />
      <main>
        <section>{children}</section>
      </main>
    </section>
  );
};

export default Layout;

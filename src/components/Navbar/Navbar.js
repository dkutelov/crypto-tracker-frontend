import MobileNavbar from './MobileNavbar/MobileNavbar';
import MainNavbar from './Navbar/Navbar';

const Navbar = () => {
  return (
    <header>
      <MainNavbar />
      <MobileNavbar />
    </header>
  );
};

export default Navbar;

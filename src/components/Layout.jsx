import { Outlet } from 'react-router-dom';
import Footer from './global/Footer';
import Navbar from './global/Navbar';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;

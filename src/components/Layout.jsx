import { Outlet } from 'react-router-dom';
import Footer from './global/Footer';
import Navbar from './global/Navbar';
// import SplashCursor from './react-bits/SplashCursor';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      {/* <SplashCursor /> */}
    </>
  );
}

export default Layout;

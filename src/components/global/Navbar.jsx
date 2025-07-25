import { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const asideRef = useRef(null);

  // Close mobile menu on route change or escape key
  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  // Animate aside open/close
  useEffect(() => {
    const aside = asideRef.current;
    if (!aside) return;
    if (mobileOpen) {
      aside.style.display = 'flex';
      setTimeout(() => {
        aside.style.transform = 'translateX(0%)';
      }, 10);
    } else {
      aside.style.transform = 'translateX(100%)';
      setTimeout(() => {
        aside.style.display = 'none';
      }, 300);
    }
  }, [mobileOpen]);

  return (
    <>
      <div className='sticky top-0 bg-white z-50 border-b border-zinc-200'>
        <nav className='min-h-20 max-w-screen-xl mx-auto px-4 flex items-center justify-between'>
          {/* logo */}
          <div id='logo' className='flex items-center gap-2'>
            <img src='/logo.png' alt='logo' className='w-12' />
            <h1 className='text-2xl lg:text-3xl font-bold hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text'>
              Qurasphere
            </h1>
          </div>
          {/* links */}
          <ul className='hidden md:flex'>
            <li>
              <Link to='/' className='px-4 py-2 font-semibold'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/services' className='px-4 py-2 font-semibold'>
                Services
              </Link>
            </li>
            <li>
              <Link to='/about' className='px-4 py-2 font-semibold'>
                About Us
              </Link>
            </li>
            <li>
              <Link to='/contact' className='px-4 py-2 font-semibold'>
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to='/login'
                className='px-8 py-3 font-semibold ml-6 rounded-full bg-black text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 duration-500 transition-colors'
              >
                Login
              </Link>
            </li>
          </ul>
          {/* hamburger */}
          <button
            className='text-2xl md:!hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-zinc-100 transition'
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls='mobileNavbar'
            onClick={() => setMobileOpen(true)}
            style={{ display: mobileOpen ? 'none' : 'inline-block' }}
          >
            <FaBars />
          </button>
        </nav>
      </div>

      <aside
        id='mobileNavbar'
        ref={asideRef}
        tabIndex={-1}
        style={{
          display: mobileOpen ? 'flex' : 'none',
          transform: mobileOpen ? 'translateX(0%)' : 'translateX(100%)',
        }}
        className={`
          fixed top-0 right-0 h-screen w-4/5 max-w-sm bg-white/95 backdrop-blur-md shadow-2xl z-50 
          flex flex-col transition-transform duration-300 ease-in-out md:hidden
          border-l border-zinc-200
        `}
        aria-hidden={!mobileOpen}
      >
        {/* Close button */}
        <div className='flex justify-end p-4'>
          <button
            aria-label='Close menu'
            className='text-3xl text-zinc-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded'
            onClick={() => setMobileOpen(false)}
            tabIndex={mobileOpen ? 0 : -1}
          >
            &times;
          </button>
        </div>
        {/* Navigation Links */}
        <nav className='flex-1'>
          <ul className='flex flex-col gap-3 px-6'>
            <li>
              <Link
                to='/'
                className='block px-5 py-3 rounded-xl font-semibold text-zinc-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
                onClick={() => setMobileOpen(false)}
                tabIndex={mobileOpen ? 0 : -1}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/services'
                className='block px-5 py-3 rounded-xl font-semibold text-zinc-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
                onClick={() => setMobileOpen(false)}
                tabIndex={mobileOpen ? 0 : -1}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className='block px-5 py-3 rounded-xl font-semibold text-zinc-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
                onClick={() => setMobileOpen(false)}
                tabIndex={mobileOpen ? 0 : -1}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className='block px-5 py-3 rounded-xl font-semibold text-zinc-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
                onClick={() => setMobileOpen(false)}
                tabIndex={mobileOpen ? 0 : -1}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to='/login'
                className='block px-5 py-3 mt-6 rounded-full font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-center focus:outline-none focus:ring-2 focus:ring-blue-500'
                onClick={() => setMobileOpen(false)}
                tabIndex={mobileOpen ? 0 : -1}
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Navbar;

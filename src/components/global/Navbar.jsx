import { FaBars } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='sticky top-0 bg-white z-50 border-b border-zinc-200'>
      <nav className='min-h-20 max-w-screen-xl mx-auto px-4 flex items-center justify-between'>
        {/* logo */}
        <div id='logo' className='flex items-center gap-2'>
          <img src='logo.png' alt='logo' className='w-12' />
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
          </li>{' '}
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
        <div className='text-2xl md:hidden'>
          <FaBars />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

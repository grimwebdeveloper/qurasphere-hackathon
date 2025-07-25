import { Link } from 'react-router-dom';
import ShinyText from '../react-bits/ShinyText';

const Footer = () => {
  return (
    <footer className='bg-zinc-900 text-white py-12 relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='font-extrabold text-center text-[10vw] md:text-[7vw] xl:text-[120px] bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text drop-shadow-lg mb-8'>
          <ShinyText text='Qurasphere' speed={3} />
        </h2>

        <div
          id='grid'
          className='pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-zinc-300 md:justify-items-center'
        >
          <div>
            <h3 className='text-xl font-semibold mb-5 text-white tracking-wide uppercase'>
              Services
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/services/seo'
                  className='hover:text-blue-400 transition-colors duration-200'
                >
                  SEO
                </Link>
              </li>
              <li>
                <Link
                  to='/services/webdesign'
                  className='hover:text-blue-400 transition-colors duration-200'
                >
                  Web Design
                </Link>
              </li>
              <li>
                <Link
                  to='/services/webdevelopment'
                  className='hover:text-blue-400 transition-colors duration-200'
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to='/services/websitemaintenance'
                  className='hover:text-blue-400 transition-colors duration-200'
                >
                  Website Maintenance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-5 text-white tracking-wide uppercase'>
              Company
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/about'
                  className='hover:text-blue-400 transition-colors duration-200'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='hover:text-blue-400 transition-colors duration-200'
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-blue-400 transition-colors duration-200'
                >
                  Our Teams
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-blue-400 transition-colors duration-200'
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-5 text-white tracking-wide uppercase'>
              Socials
            </h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='https://www.facebook.com/profile.php?id=61577187622440'
                  className='hover:text-blue-400 transition-colors duration-200'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/qurasphere/'
                  className='hover:text-blue-400 transition-colors duration-200'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/company/qurasphere/'
                  className='hover:text-blue-400 transition-colors duration-200'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href='https://x.com/qurasphere'
                  className='hover:text-blue-400 transition-colors duration-200'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-5 text-white tracking-wide uppercase'>
              Contact
            </h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='mailto:qurasphere@gmail.com'
                  className='hover:text-blue-400 transition-colors duration-200'
                >
                  qurasphere@gmail.com
                </a>
              </li>
              <li>
                <a
                  href='tel:+919942671046'
                  className='hover:text-blue-400 transition-colors duration-200'
                >
                  +91 9942671046
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-blue-400 transition-colors duration-200'
                >
                  Bariatu, Ranchi
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-zinc-700 pt-8 flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
          <div className='text-center md:text-left text-sm text-zinc-400'>
            © 2025{' '}
            <Link to='/' className='hover:text-blue-400 transition-colors'>
              Qurasphere
            </Link>
            . All rights reserved.
          </div>
          <ul className='flex justify-center md:justify-end items-center gap-6 text-sm text-zinc-400'>
            <li>
              <a href='#' className='hover:text-blue-400 transition-colors'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-400 transition-colors'>
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

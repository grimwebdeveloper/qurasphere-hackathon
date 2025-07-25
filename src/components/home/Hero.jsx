import { Link } from 'react-router-dom';
import RotatingText from '../react-bits/RotatingText';
import Cubes from '../spline/Cubes';

const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-44">
      <div className="text-center lg:text-start lg:flex">
        {/* left */}
        <div className="flex flex-col gap-4 lg:w-[60%]">
          <h2 className="text-6xl font-bold">
            Premium Digital Solutions to{' '}
            <span className="text-blue-600">Grow Your Business</span>
          </h2>
          <RotatingText
            texts={['On Time', 'On Budget', 'On Point']}
            mainClassName="text-6xl overflow-hidden py-4 justify-center lg:justify-start bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text font-bold"
            staggerFrom={'last'}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-120%' }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
          <p className="text-2xl text-zinc-600">
            Web, SEO & Full-Stack Digital Growth for Ambitious Brands
          </p>
          <ul className="mt-6 flex justify-center lg:justify-start gap-4">
            {/* <li>
              <button
                type="button"
                className="px-8 py-3 font-semibold rounded-full bg-black text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 duration-500 transition-colors"
              >
                <a href="#our-work">View Our Work</a>
              </button>
            </li> */}
            <li>
              <button
                type="button"
                className="px-8 py-3 font-semibold rounded-full bg-black text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 duration-500 transition-colors"
              >
                <Link to="/contact">Contact Us</Link>
              </button>
            </li>
          </ul>
        </div>
        {/* Right */}
        <div className="hidden lg:block lg:w-[40%] overflow-hidden relative">
          <Cubes />
        </div>
      </div>
    </div>
  );
};

export default Hero;

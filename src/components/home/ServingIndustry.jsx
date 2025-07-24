import { Tilt } from '@jdion/tilt-react';
import {
  FaCartShopping,
  FaLocationDot,
  FaGraduationCap,
  FaRocket,
  FaShield,
  FaMusic,
} from 'react-icons/fa6';

const ServingIndustry = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-4'>
      <div className='text-center'>
        <h2 className='font-bold text-3xl'>Industry-Specific Solutions</h2>
        <p className='text-zinc-900 my-4'>
          We understand your industry's unique challenges
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
        {/* <Tilt style={{ height: 250, width: 250 }}>Tilt ✨</Tilt> */}
        {/* E-commerce */}
        <Tilt>
          <div className='bg-white border border-zinc-200 rounded-2xl p-8 flex flex-col items-center shadow-sm hover:shadow-xl transition group'>
            <div className='flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6 group-hover:bg-blue-600 transition'>
              <FaCartShopping className='text-3xl text-blue-600 group-hover:text-white transition' />
            </div>
            <h3 className='text-lg font-bold text-zinc-900 mb-3 tracking-tight'>
              E-commerce
            </h3>
            <p className='text-center text-zinc-600 font-medium'>
              Conversion-optimized stores, inventory management, and marketing
              automation to maximize online sales.
            </p>
          </div>
        </Tilt>
        {/* Local Business */}
        <Tilt>
          <div className='bg-white border border-zinc-200 rounded-2xl p-8 flex flex-col items-center shadow-sm hover:shadow-xl transition group'>
            <div className='flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-6 group-hover:bg-green-600 transition'>
              <FaLocationDot className='text-3xl text-green-600 group-hover:text-white transition' />
            </div>
            <h3 className='text-lg font-bold text-zinc-900 mb-3 tracking-tight'>
              Local Business
            </h3>
            <p className='text-center text-zinc-600 font-medium'>
              Local SEO, Google My Business optimization, and reputation
              management to dominate your area.
            </p>
          </div>
        </Tilt>
        {/* Coaches & Consultants */}
        <Tilt>
          <div className='bg-white border border-zinc-200 rounded-2xl p-8 flex flex-col items-center shadow-sm hover:shadow-xl transition group'>
            <div className='flex items-center justify-center w-16 h-16 rounded-full bg-purple-50 mb-6 group-hover:bg-purple-600 transition'>
              <FaGraduationCap className='text-3xl text-purple-600 group-hover:text-white transition' />
            </div>
            <h3 className='text-lg font-bold text-zinc-900 mb-3 tracking-tight'>
              Coaches & Consultants
            </h3>
            <p className='text-center text-zinc-600 font-medium'>
              Authority building, lead generation funnels, and client management
              systems for service providers.
            </p>
          </div>
        </Tilt>
        {/* Startups */}
        <Tilt>
          <div className='bg-white border border-zinc-200 rounded-2xl p-8 flex flex-col items-center shadow-sm hover:shadow-xl transition group'>
            <div className='flex items-center justify-center w-16 h-16 rounded-full bg-pink-50 mb-6 group-hover:bg-pink-600 transition'>
              <FaRocket className='text-3xl text-pink-600 group-hover:text-white transition' />
            </div>
            <h3 className='text-lg font-bold text-zinc-900 mb-3 tracking-tight'>
              Startups
            </h3>
            <p className='text-center text-zinc-600 font-medium'>
              MVP development, growth hacking strategies, and scalable systems
              to accelerate your launch.
            </p>
          </div>
        </Tilt>
        {/* Healthcare */}
        <Tilt>
          <div className='bg-white border border-zinc-200 rounded-2xl p-8 flex flex-col items-center shadow-sm hover:shadow-xl transition group'>
            <div className='flex items-center justify-center w-16 h-16 rounded-full bg-cyan-50 mb-6 group-hover:bg-cyan-600 transition'>
              <FaShield className='text-3xl text-cyan-600 group-hover:text-white transition' />
            </div>
            <h3 className='text-lg font-bold text-zinc-900 mb-3 tracking-tight'>
              Healthcare
            </h3>
            <p className='text-center text-zinc-600 font-medium'>
              HIPAA-compliant websites, patient management systems, and medical
              practice marketing.
            </p>
          </div>
        </Tilt>
        {/* Influencers */}
        <Tilt>
          <div className='bg-white border border-zinc-200 rounded-2xl p-8 flex flex-col items-center shadow-sm hover:shadow-xl transition group'>
            <div className='flex items-center justify-center w-16 h-16 rounded-full bg-yellow-50 mb-6 group-hover:bg-yellow-400 transition'>
              <FaMusic className='text-3xl text-yellow-500 group-hover:text-white transition' />
            </div>
            <h3 className='text-lg font-bold text-zinc-900 mb-3 tracking-tight'>
              Influencers
            </h3>
            <p className='text-center text-zinc-600 font-medium'>
              Personal branding, content monetization platforms, and audience
              engagement tools to grow your influence.
            </p>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default ServingIndustry;

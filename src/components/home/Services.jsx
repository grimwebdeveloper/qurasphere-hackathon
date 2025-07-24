import { FaCircleCheck } from 'react-icons/fa6';

const Services = () => {
  return (
    <section className='max-w-screen-xl mx-auto px-4'>
      <div className='text-center mb-10'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 text-zinc-800'>
          Our Services
        </h2>
        <p className='text-base sm:text-lg md:text-xl text-zinc-500 mb-8 max-w-2xl mx-auto'>
          Everything you need to dominate your market
        </p>
      </div>
      <div id='services'>
        {/* SEO */}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 py-10 border-b border-zinc-200'>
          <div className='w-full lg:w-[60%]'>
            <h3 className='text-2xl md:text-3xl font-extrabold mb-3 text-zinc-800'>
              SEO Services
            </h3>
            <p className='text-red-600 font-semibold mb-3'>
              Tired of being invisible on Google while competitors steal your
              customers?
            </p>
            <p className='text-base md:text-lg text-zinc-700'>
              Our proven SEO strategies don't just improve rankings—they drive
              qualified traffic that converts. We focus on long-term,
              sustainable growth that builds your business.
            </p>
            <ul className='my-6 space-y-3'>
              <li className='flex items-center gap-3 text-zinc-700'>
                <FaCircleCheck className='text-blue-600 text-lg' />
                <span>Comprehensive keyword research &amp; strategy</span>
              </li>
              <li className='flex items-center gap-3 text-zinc-700'>
                <FaCircleCheck className='text-blue-600 text-lg' />
                <span>Technical SEO optimization</span>
              </li>
              <li className='flex items-center gap-3 text-zinc-700'>
                <FaCircleCheck className='text-blue-600 text-lg' />
                <span>Content optimization &amp; creation</span>
              </li>
              <li className='flex items-center gap-3 text-zinc-700'>
                <FaCircleCheck className='text-blue-600 text-lg' />
                <span>Local SEO for local businesses</span>
              </li>
              <li className='flex items-center gap-3 text-zinc-700'>
                <FaCircleCheck className='text-blue-600 text-lg' />
                <span>Monthly reporting &amp; optimization</span>
              </li>
            </ul>
            <button
              type='button'
              className='bg-gradient-to-r from-blue-700 to-purple-600 text-white py-3 px-8 rounded-full font-semibold shadow-md hover:from-blue-600 hover:to-purple-700 transition-colors duration-300'
            >
              Contact Us
            </button>
          </div>
          <div className='w-full mt-8 lg:mt-0 lg:w-[40%] hidden lg:flex justify-center'>
            <img
              src='https://img.freepik.com/free-vector/seo-analytics-concept-illustration_114360-9862.jpg?semt=ais_hybrid&w=740'
              alt='SEO analytics illustration'
              className='rounded-xl shadow-lg max-w-xs w-full object-cover'
            />
          </div>
        </div>
        {/* Web Design */}
        <div className='flex flex-col-reverse lg:flex-row items-center justify-between gap-8 py-10 border-b border-zinc-200'>
          <div className='w-full lg:w-[60%]'>
            <h3 className='text-2xl md:text-3xl font-extrabold mb-3 text-zinc-800'>
              Web Design
            </h3>
            <p className='text-red-600 font-semibold mb-3'>
              Is your website failing to impress or convert visitors?
            </p>
            <p className='text-base md:text-lg text-zinc-700'>
              We craft stunning, user-focused websites that elevate your brand
              and drive results. Our designs are modern, responsive, and
              tailored to your business goals.
            </p>
            <ul className='my-6 space-y-3'>
              <li className='flex items-center gap-3 text-zinc-700'>
                <FaCircleCheck className='text-blue-600 text-lg' />
                <span>Custom, mobile-friendly design</span>
              </li>
              <li className='flex items-center gap-3 text-zinc-700'>
                <FaCircleCheck className='text-blue-600 text-lg' />
                <span>UX/UI best practices for higher conversions</span>
              </li>
              <li className='flex items-center gap-3 text-zinc-700'>
                <FaCircleCheck className='text-blue-600 text-lg' />
                <span>Brand-aligned visuals &amp; graphics</span>
              </li>
              <li className='flex items-center gap-3 text-zinc-700'>
                <FaCircleCheck className='text-blue-600 text-lg' />
                <span>Fast loading &amp; SEO-ready structure</span>
              </li>
              <li className='flex items-center gap-3 text-zinc-700'>
                <FaCircleCheck className='text-blue-600 text-lg' />
                <span>Collaborative, feedback-driven process</span>
              </li>
            </ul>
            <button
              type='button'
              className='bg-gradient-to-r from-blue-700 to-purple-600 text-white py-3 px-8 rounded-full font-semibold shadow-md hover:from-blue-600 hover:to-purple-700 transition-colors duration-300'
            >
              Contact Us
            </button>
          </div>
          <div className='w-full mb-8 lg:mb-0 lg:w-[40%] hidden lg:flex justify-center'>
            <img
              src='https://cdni.iconscout.com/illustration/premium/thumb/web-design-illustration-download-in-svg-png-gif-file-formats--sketch-logo-virtual-thinking-designer-digital-pad-development-pack-illustrations-3202981.png'
              alt='web design illustration'
              className='rounded-xl shadow-lg max-w-xs w-full object-cover'
            />
          </div>
        </div>
        {/* Web Development */}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 py-10 border-b border-zinc-200'>
          <div className='w-full lg:w-[60%]'>
            <h3 className='text-2xl md:text-3xl font-extrabold mb-3 text-zinc-800'>
              Web Development
            </h3>
            <p className='text-red-600 font-semibold mb-3'>
              Is your website slow, outdated, or lacking essential features?
            </p>
            <p className='text-base md:text-lg text-zinc-700'>
              We build robust, scalable, and high-performing websites and web
              apps using the latest technologies. Our development ensures your
              site is secure, fast, and easy to manage.
            </p>
            <ul className='my-6 space-y-3'>
              <li className='flex items-center gap-3 text-zinc-700'>
                <FaCircleCheck className='text-blue-600 text-lg' />
                <span>Custom web applications &amp; business sites</span>
              </li>
              <li className='flex items-center gap-3 text-zinc-700'>
                <FaCircleCheck className='text-blue-600 text-lg' />
                <span>Responsive, cross-browser compatibility</span>
              </li>
              <li className='flex items-center gap-3 text-zinc-700'>
                <FaCircleCheck className='text-blue-600 text-lg' />
                <span>SEO-friendly, fast-loading code</span>
              </li>
              <li className='flex items-center gap-3 text-zinc-700'>
                <FaCircleCheck className='text-blue-600 text-lg' />
                <span>Integrations with APIs &amp; third-party services</span>
              </li>
              <li className='flex items-center gap-3 text-zinc-700'>
                <FaCircleCheck className='text-blue-600 text-lg' />
                <span>Ongoing support &amp; future-proof solutions</span>
              </li>
            </ul>
            <button
              type='button'
              className='bg-gradient-to-r from-blue-700 to-purple-600 text-white py-3 px-8 rounded-full font-semibold shadow-md hover:from-blue-600 hover:to-purple-700 transition-colors duration-300'
            >
              Contact Us
            </button>
          </div>
          <div className='w-full mt-8 lg:mt-0 lg:w-[40%] hidden lg:flex justify-center'>
            <img
              src='https://media.istockphoto.com/id/1413922045/vector/programming-at-home.jpg?s=612x612&w=0&k=20&c=_5UhZu0-etj-lWZorNUAkF_PEqXfHpuf44dCeWeCOvc='
              alt='web development illustration'
              className='rounded-xl shadow-lg max-w-xs w-full object-cover'
            />
          </div>
        </div>
        {/* Website Maintenance */}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 py-10'>
          <div className='w-full lg:w-[60%]'>
            <h3 className='text-2xl md:text-3xl font-extrabold mb-3 text-zinc-800'>
              Website Maintenance
            </h3>
            <p className='text-red-600 font-semibold mb-3'>
              Is your website vulnerable, buggy, or in need of regular updates?
            </p>
            <p className='text-base md:text-lg text-zinc-700'>
              We provide ongoing website maintenance to keep your site secure,
              up-to-date, and running smoothly. Our team handles everything from
              updates and backups to troubleshooting and performance
              optimization.
            </p>
            <ul className='my-6 space-y-3'>
              <li className='flex items-center gap-3 text-zinc-700'>
                <FaCircleCheck className='text-blue-600 text-lg' />
                <span>Security monitoring &amp; vulnerability patching</span>
              </li>
              <li className='flex items-center gap-3 text-zinc-700'>
                <FaCircleCheck className='text-blue-600 text-lg' />
                <span>Regular content &amp; software updates</span>
              </li>
              <li className='flex items-center gap-3 text-zinc-700'>
                <FaCircleCheck className='text-blue-600 text-lg' />
                <span>Automated backups &amp; disaster recovery</span>
              </li>
              <li className='flex items-center gap-3 text-zinc-700'>
                <FaCircleCheck className='text-blue-600 text-lg' />
                <span>Bug fixes &amp; technical support</span>
              </li>
              <li className='flex items-center gap-3 text-zinc-700'>
                <FaCircleCheck className='text-blue-600 text-lg' />
                <span>Performance monitoring &amp; optimization</span>
              </li>
            </ul>
            <button
              type='button'
              className='bg-gradient-to-r from-blue-700 to-purple-600 text-white py-3 px-8 rounded-full font-semibold shadow-md hover:from-blue-600 hover:to-purple-700 transition-colors duration-300'
            >
              Contact Us
            </button>
          </div>
          <div className='w-full mt-8 lg:mt-0 lg:w-[40%] hidden lg:flex justify-center'>
            <img
              src='https://img.freepik.com/free-vector/website-maintenance-abstract-concept-vector-illustration-website-service-webpage-seo-maintenance-web-design-corporate-site-professional-support-security-analysis-update-abstract-metaphor_335657-2295.jpg?semt=ais_hybrid&w=740'
              alt='website maintenance illustration'
              className='rounded-xl shadow-lg max-w-xs w-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

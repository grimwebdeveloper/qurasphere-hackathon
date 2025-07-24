import { SiExpress } from 'react-icons/si';
import { RiPhpFill } from 'react-icons/ri';
import { FaBullseye, FaEye, FaRegHandPeace, FaDrupal } from 'react-icons/fa6';
import EachServiceBanner from '../../components/global/EachServiceBanner';
import Heading from '../../components/global/Heading';
import { IoIosRocket } from 'react-icons/io';
import {
  FaBusinessTime,
  FaShoppingCart,
  FaReact,
  FaSearch,
  FaWordpress,
} from 'react-icons/fa';
import { MdMonitor } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiFillThunderbolt } from 'react-icons/ai';
import { TfiHeadphone } from 'react-icons/tfi';
import CTA from '../../components/home/CTA';
import Testimonial from '../../components/home/Testimonial';
import OurDevelopmentProcess from '../../components/services/web-development/OurDevelopmentProcess';
import ChooseDevelopment from '../../components/services/web-development/ChooseDevelopment';

const WebDevelopmentServicePage = () => {
  const prefectForData = [
    {
      id: 1,
      icon: <IoIosRocket className='text-3xl text-blue-600' />,
      iconColor: 'bg-blue-50',
      borderColor: 'hover:border-blue-200',
      title: 'Startups',
      content:
        'Launching your MVP and need a professional website that scales with your growth',
    },
    {
      id: 2,
      icon: <FaBusinessTime className='text-3xl text-green-600' />,
      iconColor: 'bg-green-50',
      borderColor: 'hover:border-green-300',
      title: 'Small Businesses',
      content:
        'Need a modern, mobile-friendly website to compete online and attract customers',
    },
    {
      id: 3,
      icon: <FaShoppingCart className='text-3xl text-purple-600' />,
      iconColor: 'bg-purple-50',
      borderColor: 'hover:border-purple-300',
      title: 'E-commerce Brands',
      content:
        'Want a conversion-focused online store that turns visitors into paying customers',
    },
  ];
  const whatYouGetData = [
    {
      id: 1,
      icon: <MdMonitor className='text-3xl text-blue-600' />,
      iconColor: 'bg-blue-50',
      borderColor: 'hover:border-blue-200',
      title: 'Fully Responsive Design',
      content:
        ' Perfect display on all devices - desktop, tablet, and mobile. Mobile-first approach ensures optimal performance.',
    },
    {
      id: 2,
      icon: <FaReact className='text-3xl text-green-600' />,
      iconColor: 'bg-green-50',
      borderColor: 'hover:border-green-300',
      title: 'Custom Frontend',
      content:
        ' Modern, fast-loading frontend built with React, Next.js, or clean HTML/CSS based on your needs. ',
    },
    {
      id: 3,
      icon: <IoSettingsOutline className='text-3xl text-purple-600' />,
      iconColor: 'bg-purple-50',
      borderColor: 'hover:border-purple-300',
      title: 'Admin Dashboard ',
      content:
        ' User-friendly content management system (WordPress, Strapi, or custom) for easy content updates. ',
    },
    {
      id: 4,
      icon: <AiFillThunderbolt className='text-3xl text-orange-600' />,
      iconColor: 'bg-orange-50',
      borderColor: 'hover:border-orange-200',
      title: 'Speed Optimization',
      content:
        ' Optimized for lightning-fast loading speeds. Image compression, code minification, and CDN setup. ',
    },
    {
      id: 5,
      icon: <FaSearch className='text-3xl text-cyan-600' />,
      iconColor: 'bg-cyan-50',
      borderColor: 'hover:border-cyan-300',
      title: 'SEO-Ready Structure',
      content:
        ' Clean code structure, meta tags, schema markup, and sitemap. Optional full SEO service available. ',
    },
    {
      id: 6,
      icon: <TfiHeadphone className='text-3xl text-red-600' />,
      iconColor: 'bg-red-50',
      borderColor: 'hover:border-red-300',
      title: 'Post-Launch Support',
      content:
        ' 30 days of free support after launch. Bug fixes, minor updates, and guidance included. ',
    },
  ];
  const ourTechStackData = [
    {
      id: 1,
      icon: <FaReact className='text-3xl text-blue-600' />,
      iconColor: 'bg-blue-50',
      borderColor: 'hover:border-blue-200',
      title: 'React.js',
      content:
        'Build fast, interactive, and scalable user interfaces for modern web apps.',
    },
    {
      id: 2,
      icon: <FaWordpress className='text-3xl text-green-600' />,
      iconColor: 'bg-green-50',
      borderColor: 'hover:border-green-300',
      title: 'WordPress',
      content:
        'The leading CMS for easy content management and flexible business sites.',
    },
    {
      id: 3,
      icon: <FaDrupal className='text-3xl text-purple-600' />,
      iconColor: 'bg-purple-50',
      borderColor: 'hover:border-purple-300',
      title: 'Drupal',
      content:
        'Secure, robust, and highly customizable for complex or enterprise websites.',
    },
    {
      id: 4,
      icon: <RiPhpFill className='text-3xl text-orange-600' />,
      iconColor: 'bg-orange-50',
      borderColor: 'hover:border-orange-200',
      title: 'PHP',
      content:
        'Reliable backend language for custom server logic and database integration.',
    },
    {
      id: 5,
      icon: <SiExpress className='text-3xl text-cyan-600' />,
      iconColor: 'bg-cyan-50',
      borderColor: 'hover:border-cyan-300',
      title: 'MERN Stack',
      content:
        'Full-stack JavaScript (MongoDB, Express, React, Node.js) for scalable apps.',
    },
  ];
  return (
    <>
      <main className='max-w-screen-xl mx-auto px-4 py-16'>
        <EachServiceBanner
          heading={
            <>
              Custom Web Development for
              <span className='text-blue-600'> Growing Businesses</span>
            </>
          }
          description=' Fast, responsive, SEO-ready websites built to perform and convert. From startups to enterprises, we create digital experiences that drive results.'
        />

        {/* perfect for */}
        <section className='py-16'>
          <Heading
            title='Perfect For'
            tagline="Is this you? Then you're in the right place."
          />
          <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {prefectForData.map((item) => (
              <div
                key={item.id}
                className={`border border-zinc-200 ${item.borderColor} rounded-xl p-8 flex flex-col items-center bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300`}
              >
                <div
                  className={`flex justify-center items-center rounded-full ${item.iconColor} h-20 w-20 mb-4 shadow-md`}
                >
                  {item.icon}
                </div>
                <h3 className='text-xl font-semibold text-zinc-900 text-center mb-2'>
                  {item.title}
                </h3>
                <p className='text-base text-zinc-700 text-center'>
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* what you get */}
        <section className='py-16'>
          <Heading
            title='What You Get'
            tagline='Everything included in your web development project'
          />
          <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {whatYouGetData.map((item) => (
              <div
                key={item.id}
                className={`border border-zinc-200 ${item.borderColor} rounded-xl p-8 flex flex-col items-center bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300`}
              >
                <div
                  className={`flex justify-center items-center rounded-full ${item.iconColor} h-20 w-20 mb-4 shadow-md`}
                >
                  {item.icon}
                </div>
                <h3 className='text-xl font-semibold text-zinc-900 text-center mb-2'>
                  {item.title}
                </h3>
                <p className='text-base text-zinc-700 text-center'>
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* our tech stack */}
        <section className='py-16'>
          <Heading
            title='Our Tech Stack'
            tagline='We use the best tools to build exceptional websites'
          />
          <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {ourTechStackData.map((item) => (
              <div
                key={item.id}
                className={`border border-zinc-200 ${item.borderColor} rounded-xl p-8 flex flex-col items-center bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300`}
              >
                <div
                  className={`flex justify-center items-center rounded-full ${item.iconColor} h-20 w-20 mb-4 shadow-md`}
                >
                  {item.icon}
                </div>
                <h3 className='text-xl font-semibold text-zinc-900 text-center mb-2'>
                  {item.title}
                </h3>
                <p className='text-base text-zinc-700 text-center'>
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        <OurDevelopmentProcess />

        {/* Testimonials */}
        <Testimonial />

        {/* choose development */}
        <ChooseDevelopment />

        {/* CTA */}
      </main>
      <CTA
        heading='Ready to Build Your Dream Website?'
        paragraph="Join 10+ successful businesses who've transformed their online presence with Qurasphere. Let's discuss your project today."
      />
    </>
  );
};

export default WebDevelopmentServicePage;

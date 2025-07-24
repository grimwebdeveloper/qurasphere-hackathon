import { TfiHeadphone } from 'react-icons/tfi';
import { SiJest } from 'react-icons/si';
import { FaPhone, FaFigma, FaReact, FaRocket } from 'react-icons/fa6';
import Heading from '../../global/Heading';

const OurDevelopmentProcess = () => {
  const ourDevelopmentProcessData = [
    {
      id: 1,
      icon: <FaPhone className='text-3xl text-blue-600' />,
      iconColor: 'bg-blue-50',
      borderColor: 'hover:border-blue-200',
      shadowColor: 'hover:shadow-blue-50',
      title: 'Discovery Call',
      description:
        'Understanding your business goals, target audience, and project requirements',
    },
    {
      id: 2,
      icon: <FaFigma className='text-3xl text-pink-600' />,
      iconColor: 'bg-pink-50',
      borderColor: 'hover:border-pink-200',
      shadowColor: 'hover:shadow-pink-50',
      title: 'Wireframe & Design',
      description:
        'Creating visual mockups and user experience flow for your approval',
    },
    {
      id: 3,
      icon: <FaReact className='text-3xl text-cyan-600' />,
      iconColor: 'bg-cyan-50',
      borderColor: 'hover:border-cyan-200',
      shadowColor: 'hover:shadow-cyan-50',
      title: 'Development',
      description:
        'Coding the frontend and backend with regular progress updates',
    },
    {
      id: 4,
      icon: <SiJest className='text-3xl text-yellow-600' />,
      iconColor: 'bg-yellow-50',
      borderColor: 'hover:border-yellow-200',
      shadowColor: 'hover:shadow-yellow-50',
      title: 'Testing & QA',
      description:
        'Comprehensive testing across devices, browsers, and performance metrics',
    },
    {
      id: 5,
      icon: <FaRocket className='text-3xl text-green-600' />,
      iconColor: 'bg-green-50',
      borderColor: 'hover:border-green-200',
      shadowColor: 'hover:shadow-green-50',
      title: 'Launch',
      description:
        'Deploying to live server with domain setup and SSL configuration',
    },
    {
      id: 6,
      icon: <TfiHeadphone className='text-3xl text-purple-600' />,
      iconColor: 'bg-purple-50',
      borderColor: 'hover:border-purple-200',
      shadowColor: 'hover:shadow-purple-50',
      title: 'Support',
      description: '30-day free support with training and maintenance options',
    },
  ];
  return (
    <section className='py-16'>
      <Heading
        title='Our Development Process'
        tagline='Clear steps, transparent communication, amazing results'
      />
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {ourDevelopmentProcessData.map((item) => (
          <div
            key={item.id}
            className={`border border-zinc-200 ${item.borderColor} rounded-xl p-8 flex flex-col items-center bg-white shadow-xl hover:shadow-2xl ${item.shadowColor} transition-shadow duration-300`}
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
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurDevelopmentProcess;

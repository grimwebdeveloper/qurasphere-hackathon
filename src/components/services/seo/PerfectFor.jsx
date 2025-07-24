import { GiProgression } from 'react-icons/gi';
import { RiGlobalLine } from 'react-icons/ri';
import { TfiMoney } from 'react-icons/tfi';
import { FaGhost } from 'react-icons/fa6';
import Heading from '../../global/Heading';
import CardsStyle from '../../global/CardsStyle';

const PerfectFor = () => {
  const perfectForData = [
    {
      id: 1,
      icon: <RiGlobalLine className='text-3xl text-blue-600' />,
      iconColor: 'bg-blue-50',
      borderColor: 'hover:border-blue-200',
      shadowColor: 'hover:shadow-blue-50',
      title: 'Local Businesses',
      content:
        'Dominate local search results and attract more customers in your area.',
    },
    {
      id: 2,
      icon: <GiProgression className='text-3xl text-green-600' />,
      iconColor: 'bg-green-50',
      borderColor: 'hover:border-green-300',
      shadowColor: 'hover:shadow-green-50',
      title: 'SaaS Companies',
      content:
        'Drive qualified leads and increase trial signups through organic search.',
    },
    {
      id: 3,
      icon: <TfiMoney className='text-3xl text-orange-600' />,
      iconColor: 'bg-orange-50',
      borderColor: 'hover:border-orange-200',
      shadowColor: 'hover:shadow-orange-50',
      title: 'E-commerce',
      content:
        'Boost product visibility and increase online sales through SEO.',
    },
    {
      id: 4,
      icon: <FaGhost className='text-3xl text-purple-600' />,
      iconColor: 'bg-purple-50',
      borderColor: 'hover:border-purple-300',
      shadowColor: 'hover:shadow-purple-50',
      title: 'Service Providers',
      content:
        'Get found by clients searching for your professional services.',
    },
    {
      id: 5,
      icon: <RiGlobalLine className='text-3xl text-cyan-600' />,
      iconColor: 'bg-cyan-50',
      borderColor: 'hover:border-cyan-200',
      shadowColor: 'hover:shadow-cyan-50',
      title: 'Startups',
      content:
        'Accelerate your growth and build brand authority from day one with targeted SEO.',
    },
    {
      id: 6,
      icon: <GiProgression className='text-3xl text-pink-600' />,
      iconColor: 'bg-pink-50',
      borderColor: 'hover:border-pink-200',
      shadowColor: 'hover:shadow-pink-50',
      title: 'Content Creators',
      content:
        'Increase your audience and reach by ranking higher for the topics you cover.',
    },
  ];
  return (
    <section className='py-16'>
      <Heading
        title='Perfect For'
        tagline='Who benefits most from our proven SEO strategies'
      />
      <CardsStyle data={perfectForData} />
    </section>
  );
};

export default PerfectFor;

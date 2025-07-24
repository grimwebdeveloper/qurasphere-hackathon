import { GiProgression } from 'react-icons/gi';
import { RiGlobalLine } from 'react-icons/ri';
import { TfiMoney } from 'react-icons/tfi';
import { FaGhost } from 'react-icons/fa6';
import Heading from '../../global/Heading';
import CardsStyle from '../../global/CardsStyle';

const ChooseDevelopment = () => {
  const chooseDevelopmentData = [
    {
      id: 1,
      icon: <RiGlobalLine className='text-3xl text-blue-600' />,
      iconColor: 'bg-blue-50',
      borderColor: 'hover:border-blue-200',
      shadowColor: 'hover:shadow-blue-50',
      title: 'Performance + SEO First',
      content:
        ' We build with speed and search engine optimization in mind from day one, not as an afterthought. ',
    },
    {
      id: 2,
      icon: <GiProgression className='text-3xl text-green-600' />,
      iconColor: 'bg-green-50',
      borderColor: 'hover:border-green-300',
      shadowColor: 'hover:shadow-green-50',
      title: 'Real-Time Progress Tracking',
      content:
        "Access our client dashboard to see exactly what we're working on and project progress in real-time.",
    },
    {
      id: 3,
      icon: <FaGhost className='text-3xl text-purple-600' />,
      iconColor: 'bg-purple-50',
      borderColor: 'hover:border-purple-300',
      shadowColor: 'hover:shadow-purple-50',
      title: 'Transparent Process, No Ghosting',
      content:
        ' Regular updates, clear communication, and always available when you need us. No disappearing acts. ',
    },
    {
      id: 4,
      icon: <TfiMoney className='text-3xl text-orange-600' />,
      iconColor: 'bg-orange-50',
      borderColor: 'hover:border-orange-200',
      shadowColor: 'hover:shadow-orange-50',
      title: 'Indian Pricing, International Quality',
      content:
        ' Get world-class development at local prices. Best of both worlds for growing businesses. ',
    },
  ];
  return (
    <section className='py-16'>
      <Heading
        title='Why Choose Qurasphere for Web Development?'
        tagline='What makes us different from other developers'
      />
      <CardsStyle data={chooseDevelopmentData} />
    </section>
  );
};

export default ChooseDevelopment;

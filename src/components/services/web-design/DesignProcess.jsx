import { GiProgression } from 'react-icons/gi';
import { RiGlobalLine } from 'react-icons/ri';
import { TfiMoney } from 'react-icons/tfi';
import { FaGhost } from 'react-icons/fa6';
import Heading from '../../global/Heading';
import CardsStyle from '../../global/CardsStyle';

const DesignProcess = () => {
  const designProcessData = [
    {
      id: 1,
      icon: <RiGlobalLine className='text-3xl text-blue-600' />,
      iconColor: 'bg-blue-50',
      borderColor: 'hover:border-blue-200',
      shadowColor: 'hover:shadow-blue-50',
      title: '1. Discovery & Strategy',
      content: 'Understanding your business, goals, and target audience',
    },
    {
      id: 2,
      icon: <FaGhost className='text-3xl text-purple-600' />,
      iconColor: 'bg-purple-50',
      borderColor: 'hover:border-purple-300',
      shadowColor: 'hover:shadow-purple-50',
      title: '2. Wireframing',
      content: 'Creating the blueprint and user flow for your website',
    },
    {
      id: 3,
      icon: <GiProgression className='text-3xl text-green-600' />,
      iconColor: 'bg-green-50',
      borderColor: 'hover:border-green-300',
      shadowColor: 'hover:shadow-green-50',
      title: '3. Visual Design',
      content: 'Bringing your brand to life with stunning UI design',
    },
    {
      id: 4,
      icon: <TfiMoney className='text-3xl text-orange-600' />,
      iconColor: 'bg-orange-50',
      borderColor: 'hover:border-orange-200',
      shadowColor: 'hover:shadow-orange-50',
      title: '4. Feedback & Revisions',
      content: "Collaborative refinement until it's perfect",
    },
    {
      id: 5,
      icon: <GiProgression className='text-3xl text-pink-600' />,
      iconColor: 'bg-pink-50',
      borderColor: 'hover:border-pink-200',
      shadowColor: 'hover:shadow-pink-50',
      title: '5. Launch & Support',
      content: 'Going live with ongoing support and optimization',
    },
  ];
  return (
    <section className='py-16'>
      <Heading
        title='Our Design Process'
        tagline='A proven methodology that delivers results every time'
      />
      <CardsStyle data={designProcessData} />
    </section>
  );
};

export default DesignProcess;

import { GiProgression } from 'react-icons/gi';
import { RiGlobalLine } from 'react-icons/ri';
import { TfiMoney } from 'react-icons/tfi';
import { FaGhost } from 'react-icons/fa6';
import Heading from '../../global/Heading';
import CardsStyle from '../../global/CardsStyle';

const DesignGet = () => {
  const designGetData = [
    {
      id: 1,
      icon: <RiGlobalLine className='text-3xl text-blue-600' />,
      iconColor: 'bg-blue-50',
      borderColor: 'hover:border-blue-200',
      shadowColor: 'hover:shadow-blue-50',
      title: 'UX/UI Design',
      content: 'User-centered design that guides visitors to take action',
    },
    {
      id: 2,
      icon: <GiProgression className='text-3xl text-green-600' />,
      iconColor: 'bg-green-50',
      borderColor: 'hover:border-green-300',
      shadowColor: 'hover:shadow-green-50',
      title: 'Responsive Design',
      content: 'Perfect experience across all devices and screen sizes',
    },
    {
      id: 3,
      icon: <FaGhost className='text-3xl text-purple-600' />,
      iconColor: 'bg-purple-50',
      borderColor: 'hover:border-purple-300',
      shadowColor: 'hover:shadow-purple-50',
      title: 'Wireframing & Prototyping',
      content: 'Strategic planning before we start designing',
    },
    {
      id: 4,
      icon: <TfiMoney className='text-3xl text-orange-600' />,
      iconColor: 'bg-orange-50',
      borderColor: 'hover:border-orange-200',
      shadowColor: 'hover:shadow-orange-50',
      title: 'Modern Development',
      content: 'Built with React, Next.js, and modern frameworks',
    },
    {
      id: 5,
      icon: <RiGlobalLine className='text-3xl text-cyan-600' />,
      iconColor: 'bg-cyan-50',
      borderColor: 'hover:border-cyan-200',
      shadowColor: 'hover:shadow-cyan-50',
      title: 'Design Systems',
      content: 'Consistent, scalable design language for your brand',
    },
    {
      id: 6,
      icon: <GiProgression className='text-3xl text-pink-600' />,
      iconColor: 'bg-pink-50',
      borderColor: 'hover:border-pink-200',
      shadowColor: 'hover:shadow-pink-50',
      title: 'Accessibility & Performance',
      content: 'Fast loading, accessible to all users',
    },
  ];
  return (
    <section className='py-16'>
      <Heading
        title='What You Get'
        tagline=' Complete design solutions that combine beauty with performance '
      />
      <CardsStyle data={designGetData} />
    </section>
  );
};

export default DesignGet;

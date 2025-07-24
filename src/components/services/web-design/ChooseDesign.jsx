import { GiProgression } from 'react-icons/gi';
import { RiGlobalLine } from 'react-icons/ri';
import { TfiMoney } from 'react-icons/tfi';
import { FaGhost } from 'react-icons/fa6';
import Heading from '../../global/Heading';
import CardsStyle from '../../global/CardsStyle';

const ChooseDesign = () => {
  const chooseDesignData = [
    {
      id: 1,
      icon: <RiGlobalLine className='text-3xl text-blue-600' />,
      iconColor: 'bg-blue-50',
      borderColor: 'hover:border-blue-200',
      shadowColor: 'hover:shadow-blue-50',
      title: 'Expert Web Design',
      content:
        'Our team crafts visually stunning, user-friendly websites tailored to your brand and business goals.',
    },
    {
      id: 2,
      icon: <GiProgression className='text-3xl text-green-600' />,
      iconColor: 'bg-green-50',
      borderColor: 'hover:border-green-300',
      shadowColor: 'hover:shadow-green-50',
      title: 'Results-Driven Approach',
      content:
        'We focus on designs that not only look great but also drive conversions and measurable business growth.',
    },
    {
      id: 3,
      icon: <FaGhost className='text-3xl text-purple-600' />,
      iconColor: 'bg-purple-50',
      borderColor: 'hover:border-purple-300',
      shadowColor: 'hover:shadow-purple-50',
      title: 'Transparent Communication',
      content:
        'You’ll always know what’s happening with your project—no ghosting, just clear updates and honest advice.',
    },
    {
      id: 4,
      icon: <TfiMoney className='text-3xl text-orange-600' />,
      iconColor: 'bg-orange-50',
      borderColor: 'hover:border-orange-200',
      shadowColor: 'hover:shadow-orange-50',
      title: 'Affordable, High-Quality Service',
      content:
        'Enjoy international-level design quality at competitive Indian pricing, perfect for growing businesses.',
    },
    {
      id: 5,
      icon: <RiGlobalLine className='text-3xl text-cyan-600' />,
      iconColor: 'bg-cyan-50',
      borderColor: 'hover:border-cyan-200',
      shadowColor: 'hover:shadow-cyan-50',
      title: 'Mobile-First & Responsive',
      content:
        'Every site we build is optimized for all devices, ensuring a seamless experience for your users everywhere.',
    },
    {
      id: 6,
      icon: <GiProgression className='text-3xl text-pink-600' />,
      iconColor: 'bg-pink-50',
      borderColor: 'hover:border-pink-200',
      shadowColor: 'hover:shadow-pink-50',
      title: 'Fast Turnaround & Support',
      content:
        'We deliver your project on time and provide ongoing support to keep your website performing at its best.',
    },
  ];
  return (
    <section className='py-16'>
      <Heading
        title='Why Choose Qurasphere for Web Design?'
        tagline='What makes us different from other designers'
      />
      <CardsStyle data={chooseDesignData} />
    </section>
  );
};

export default ChooseDesign;

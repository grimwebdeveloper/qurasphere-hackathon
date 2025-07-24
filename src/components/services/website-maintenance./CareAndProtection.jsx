import { GiProgression } from 'react-icons/gi';
import { RiGlobalLine } from 'react-icons/ri';
import { TfiMoney } from 'react-icons/tfi';
import { FaGhost } from 'react-icons/fa6';
import Heading from '../../global/Heading';
import CardsStyle from '../../global/CardsStyle';

const CareAndProtection = () => {
  const careAndProtectionData = [
    {
      id: 1,
      icon: <RiGlobalLine className='text-3xl text-blue-600' />,
      iconColor: 'bg-blue-50',
      borderColor: 'hover:border-blue-200',
      shadowColor: 'hover:shadow-blue-50',
      title: 'Security & Backups',
      content:
        'Protect your site with robust security measures and regular backups.',
    },
    {
      id: 2,
      icon: <FaGhost className='text-3xl text-purple-600' />,
      iconColor: 'bg-purple-50',
      borderColor: 'hover:border-purple-300',
      shadowColor: 'hover:shadow-purple-50',
      title: 'Updates & Optimization',
      content:
        'Keep your website fast and up-to-date with ongoing updates and performance tuning.',
    },
    {
      id: 3,
      icon: <GiProgression className='text-3xl text-green-600' />,
      iconColor: 'bg-green-50',
      borderColor: 'hover:border-green-300',
      shadowColor: 'hover:shadow-green-50',
      title: 'Fixes & Support',
      content:
        'Get quick fixes for bugs and reliable support whenever you need it.',
    },
    {
      id: 4,
      icon: <TfiMoney className='text-3xl text-orange-600' />,
      iconColor: 'bg-orange-50',
      borderColor: 'hover:border-orange-200',
      shadowColor: 'hover:shadow-orange-50',
      title: 'Monitoring & Reports',
      content:
        'Stay informed with 24/7 monitoring and regular maintenance reports.',
    },
    {
      id: 5,
      icon: <GiProgression className='text-3xl text-pink-600' />,
      iconColor: 'bg-pink-50',
      borderColor: 'hover:border-pink-200',
      shadowColor: 'hover:shadow-pink-50',
      title: 'Performance Tuning',
      content:
        'We continuously optimize your website for speed and reliability.',
    },
    {
      id: 6,
      icon: <FaGhost className='text-3xl text-yellow-600' />,
      iconColor: 'bg-yellow-50',
      borderColor: 'hover:border-yellow-200',
      shadowColor: 'hover:shadow-yellow-50',
      title: 'Proactive Maintenance',
      content: 'Prevent issues before they happen with regular proactive care.',
    },
  ];
  return (
    <section className='py-16'>
      <Heading
        title='Website Care & Protection'
        tagline='Your website needs to stay secure, fast, and functional'
      />
      <CardsStyle data={careAndProtectionData} />
    </section>
  );
};

export default CareAndProtection;

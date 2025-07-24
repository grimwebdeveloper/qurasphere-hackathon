import { GiProgression } from 'react-icons/gi';
import { RiGlobalLine } from 'react-icons/ri';
import { TfiMoney } from 'react-icons/tfi';
import { FaGhost } from 'react-icons/fa6';
import Heading from '../../global/Heading';
import CardsStyle from '../../global/CardsStyle';

const MaintenanceReason = () => {
  const maintenanceReasonData = [
    {
      id: 1,
      icon: <RiGlobalLine className='text-3xl text-blue-600' />,
      iconColor: 'bg-blue-50',
      borderColor: 'hover:border-blue-200',
      shadowColor: 'hover:shadow-blue-50',
      title: 'Security Threats',
      content: '43% of hacks happen due to outdated software',
    },
    {
      id: 2,
      icon: <FaGhost className='text-3xl text-purple-600' />,
      iconColor: 'bg-purple-50',
      borderColor: 'hover:border-purple-300',
      shadowColor: 'hover:shadow-purple-50',
      title: 'Slow Performance',
      content: '1 second delay = 11% drop in conversions',
    },
    {
      id: 3,
      icon: <GiProgression className='text-3xl text-green-600' />,
      iconColor: 'bg-green-50',
      borderColor: 'hover:border-green-300',
      shadowColor: 'hover:shadow-green-50',
      title: 'SEO Rankings',
      content: 'Slow sites lose Google rankings fast',
    },
    {
      id: 4,
      icon: <TfiMoney className='text-3xl text-orange-600' />,
      iconColor: 'bg-orange-50',
      borderColor: 'hover:border-orange-200',
      shadowColor: 'hover:shadow-orange-50',
      title: 'Broken Features',
      content: 'Forms, payments, and functions break',
    },
    {
      id: 5,
      icon: <GiProgression className='text-3xl text-pink-600' />,
      iconColor: 'bg-pink-50',
      borderColor: 'hover:border-pink-200',
      shadowColor: 'hover:shadow-pink-50',
      title: 'Costly Downtime',
      content: 'Unmaintained sites go offline, costing you sales and reputation',
    },
    {
      id: 6,
      icon: <FaGhost className='text-3xl text-yellow-600' />,
      iconColor: 'bg-yellow-50',
      borderColor: 'hover:border-yellow-200',
      shadowColor: 'hover:shadow-yellow-50',
      title: 'Poor User Experience',
      content: 'Bugs and errors frustrate visitors and drive them away',
    },
  ];
  return (
    <section className='py-16'>
      <Heading
        title="Why Website Maintenance Isn't Optional"
        tagline=' Your website is your digital storefront'
      />
      <CardsStyle data={maintenanceReasonData} />
    </section>
  );
};

export default MaintenanceReason;

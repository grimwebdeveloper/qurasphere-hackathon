import { GiProgression } from 'react-icons/gi';
import { RiGlobalLine } from 'react-icons/ri';
import { TfiMoney } from 'react-icons/tfi';
import { FaGhost } from 'react-icons/fa6';
import Heading from '../../global/Heading';
import CardsStyle from '../../global/CardsStyle';

const ChooseSeo = () => {
  const chooseSeoData = [
    {
      id: 1,
      icon: <RiGlobalLine className='text-3xl text-blue-600' />,
      iconColor: 'bg-blue-50',
      borderColor: 'hover:border-blue-200',
      shadowColor: 'hover:shadow-blue-50',
      title: 'White-Hat SEO Only',
      content:
        "We use only ethical, Google-approved SEO techniques that provide long-term results without risk of penalties.",
    },
    {
      id: 2,
      icon: <GiProgression className='text-3xl text-green-600' />,
      iconColor: 'bg-green-50',
      borderColor: 'hover:border-green-300',
      shadowColor: 'hover:shadow-green-50',
      title: 'Transparent Reporting',
      content:
        "Monthly detailed reports showing exactly what we've done and the results achieved. No black box approaches.",
    },
    {
      id: 3,
      icon: <FaGhost className='text-3xl text-purple-600' />,
      iconColor: 'bg-purple-50',
      borderColor: 'hover:border-purple-300',
      shadowColor: 'hover:shadow-purple-50',
      title: 'Dedicated Account Manager',
      content:
        "You'll have a dedicated SEO specialist who understands your business and is always available for questions.",
    },
    {
      id: 4,
      icon: <TfiMoney className='text-3xl text-orange-600' />,
      iconColor: 'bg-orange-50',
      borderColor: 'hover:border-orange-200',
      shadowColor: 'hover:shadow-orange-50',
      title: 'Proven Track Record',
      content:
        "200+ successful SEO campaigns with an average of 300% increase in organic traffic within 6 months.",
    },
    {
      id: 5,
      icon: <RiGlobalLine className='text-3xl text-cyan-600' />,
      iconColor: 'bg-cyan-50',
      borderColor: 'hover:border-cyan-200',
      shadowColor: 'hover:shadow-cyan-50',
      title: 'Comprehensive Keyword Research',
      content:
        "We identify high-value keywords tailored to your business, ensuring you rank for terms that drive real leads and sales.",
    },
    {
      id: 6,
      icon: <GiProgression className='text-3xl text-pink-600' />,
      iconColor: 'bg-pink-50',
      borderColor: 'hover:border-pink-200',
      shadowColor: 'hover:shadow-pink-50',
      title: 'On-Page & Technical Excellence',
      content:
        "From site speed to mobile optimization and content structure, we ensure your website meets all modern SEO standards.",
    },
  ];
  return (
    <section className='py-16'>
      <Heading
        title='Why Choose Qurasphere for SEO?'
        tagline='What sets our SEO services apart from the rest'
      />
      <CardsStyle data={chooseSeoData} />
    </section>
  );
};

export default ChooseSeo;

import Heading from '../global/Heading';
import { FaBullseye, FaEye, FaRegHandPeace } from 'react-icons/fa6';

const MissionVisionValues = () => {
  const missionVisionValuesData = [
    {
      id: 1,
      icon: <FaBullseye className='text-3xl text-blue-600' />,
      iconColor: 'bg-blue-50',
      title: 'Our Mission',
      content:
        'To empower businesses of all sizes with premium digital solutions that drive measurable growth, increase revenue, and create lasting competitive advantages in the digital marketplace.',
    },
    {
      id: 2,
      icon: <FaEye className='text-3xl text-green-600' />,
      iconColor: 'bg-green-50',
      title: 'Our Vision',
      content:
        'To become the most trusted digital growth partner for ambitious businesses, known for delivering results that transform companies and create industry leaders.',
    },
    {
      id: 3,
      icon: <FaRegHandPeace className='text-3xl text-purple-600' />,
      iconColor: 'bg-purple-50',
      title: 'Our Promise',
      content:
        'Every project we deliver will be strategically designed, expertly executed, and measurably successful. Your growth is our success metric.',
    },
  ];
  return (
    <section className='max-w-screen-xl mx-auto px-4 mb-16'>
      <Heading
        title='Our Mission, Vision & Values'
        tagline='The principles that guide everything we do'
      />
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {missionVisionValuesData.map((item) => (
          <div
            key={item.id}
            className='border border-zinc-200 rounded-xl p-8 flex flex-col items-center bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300'
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
  );
};

export default MissionVisionValues;

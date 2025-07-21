import Heading from '../global/Heading';

const OurWorkingEthic = () => {
  const workingEthicData = [
    {
      id: 1,
      process: 'Book a Free Call',
      processDescription: 'Tell us about your goals and challenges',
    },
    {
      id: 2,
      process: 'Define Your Needs',
      processDescription: 'We analyze your business and create a strategy',
    },
    {
      id: 3,
      process: 'Get a Custom Plan',
      processDescription: 'Receive a detailed proposal and timeline',
    },
    {
      id: 4,
      process: 'Relax While We Build',
      processDescription: 'We handle everything with regular updates',
    },
    {
      id: 5,
      process: 'Watch Your Business Grow',
      processDescription: 'Launch and see the results roll in',
    },
  ];
  return (
    <section className='py-16 px-4 max-w-screen-xl mx-auto'>
      {/* Heading */}
      <Heading title='How we work' tagline='Simple process, amazing results' />
      <div className='text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
        {workingEthicData.map((item, idx) => (
          <div className='flex flex-col gap-4'>
            <div className='bg-blue-600 w-16 h-16 rounded-full flex justify-center items-center text-white mx-auto font-semibold text-xl'>
              {item.id}
            </div>
            <div className='font-semibold text-lg'>{item.process}</div>
            <div className='text-zinc-900'>{item.processDescription}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWorkingEthic;

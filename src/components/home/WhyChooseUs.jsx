import Heading from '../global/Heading';

const WhyChooseUs = () => {
  const chooseUsData = [
    {
      id: 1,
      svg: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
          class='lucide lucide-flame-icon lucide-flame'
        >
          <path d='M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z' />
        </svg>
      ),
      choose: 'Results-Driven Strategy',
      chooseDescription:
        'Every decision backed by data and focused on your ROI',
    },
    {
      id: 2,
      svg: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
          class='lucide lucide-users-round-icon lucide-users-round'
        >
          <path d='M18 21a8 8 0 0 0-16 0' />
          <circle cx='10' cy='8' r='5' />
          <path d='M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3' />
        </svg>
      ),
      choose: 'Industry Expertise',
      chooseDescription: 'Deep knowledge across multiple industries and niches',
    },
    {
      id: 3,
      svg: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
          class='lucide lucide-circle-check-big-icon lucide-circle-check-big'
        >
          <path d='M21.801 10A10 10 0 1 1 17 3.335' />
          <path d='m9 11 3 3L22 4' />
        </svg>
      ),
      choose: 'Seamless Process',
      chooseDescription: 'Smooth project management from start to finish',
    },
    {
      id: 4,
      svg: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
          class='lucide lucide-smile-icon lucide-smile'
        >
          <circle cx='12' cy='12' r='10' />
          <path d='M8 14s1.5 2 4 2 4-2 4-2' />
          <line x1='9' x2='9.01' y1='9' y2='9' />
          <line x1='15' x2='15.01' y1='9' y2='9' />
        </svg>
      ),
      choose: 'Future-Proof Solutions',
      chooseDescription: 'Technology that scales with your business growth',
    },
  ];
  return (
    <section className='py-16 px-4 max-w-screen-xl mx-auto'>
      {/* Heading */}
      <Heading
        title='Why Choose Qurasphere?'
        tagline='What makes us different'
      />
      <div className='text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
        {chooseUsData.map((choose) => (
          <div className='flex flex-col gap-4' key={choose.id}>
            <div className='bg-blue-600 w-16 h-16 rounded-full flex justify-center items-center text-white mx-auto font-semibold text-xl'>
              {choose.svg}
            </div>
            <div className='font-semibold text-lg'>{choose.choose}</div>
            <div className='text-zinc-900'>{choose.chooseDescription}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

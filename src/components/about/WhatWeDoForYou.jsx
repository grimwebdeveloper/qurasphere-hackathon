import Button from '../global/Button';
import Heading from '../global/Heading';

const WhatWeDoForYou = () => {
  const whatWeDoForYouData = [
    {
      id: 1,
      icon: (
        <span
          role='img'
          aria-label='Web Design'
          className='text-3xl text-blue-600'
        >
          🎨
        </span>
      ),
      iconColor: 'bg-blue-50',
      title: 'Web Design',
      content:
        'Beautiful, user-focused website designs that capture your brand and engage your audience across all devices.',
    },
    {
      id: 2,
      icon: (
        <span
          role='img'
          aria-label='Web Development'
          className='text-3xl text-green-600'
        >
          💻
        </span>
      ),
      iconColor: 'bg-green-50',
      title: 'Web Development',
      content:
        'Robust, scalable, and high-performance websites built with the latest technologies to power your business online.',
    },
    {
      id: 3,
      icon: (
        <span
          role='img'
          aria-label='Website Maintenance'
          className='text-3xl text-purple-600'
        >
          🛠️
        </span>
      ),
      iconColor: 'bg-purple-50',
      title: 'Website Maintenance',
      content:
        'Ongoing updates, security, and support to keep your website running smoothly and securely at all times.',
    },
  ];
  return (
    <section className='max-w-screen-xl mx-auto px-4 mb-16'>
      <Heading
        title='Our Mission, Vision & Values'
        tagline='The principles that guide everything we do'
      />
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {whatWeDoForYouData.map((item) => (
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
      <div className='text-center mt-8'>
        <Button content='View All Services' />
      </div>
    </section>
  );
};

export default WhatWeDoForYou;

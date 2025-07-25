import React from 'react';

const ContactBanner = () => {
  return (
    <section className='max-w-screen-xl mx-auto px-4 text-center flex flex-col gap-4 justify-center py-40'>
      <h2 className=' text-4xl md:text-5xl lg:text-6xl font-bold'>
        Let's Build Something{' '}
        <span className='text-blue-600'>Powerful Together</span>
      </h2>
      <p className='text-lg lg:text-xl'>
        Have a project in mind or just a few questions? Fill out the form below
        and our team will be in touch within 24 hours.
      </p>
      <p className='text-lg lg:text-xl'>
        Prefer email? Reach us directly at{' '}
        <a href='mailto:qurasphere@gmail.com' className='text-blue-600'>
          qurasphere@gmail.com
        </a>
      </p>
    </section>
  );
};

export default ContactBanner;

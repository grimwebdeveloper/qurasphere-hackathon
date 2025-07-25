import Button from '../global/Button';

const ServicesBanner = () => {
  return (
    <section className='max-w-screen-xl mx-auto px-4 text-center flex flex-col gap-4 justify-center py-40'>
      <h2 className=' text-4xl md:text-5xl lg:text-6xl font-bold'>
        Comprehensive Digital Solutions for
        <span className='text-blue-600'> Modern Businesses</span>
      </h2>
      <p className='text-lg lg:text-xl'>
        Unlock your business potential with our end-to-end digital
        expertise—branding, web development, SEO, and beyond.
      </p>
      <p className='text-lg lg:text-xl max-w-[888px] mx-auto'>
        Whether you need a stunning website, a robust online strategy, or
        ongoing support, we craft solutions that drive measurable results and
        lasting growth.
      </p>
      <div className='flex gap-4 items-center justify-center mt-6'>
        <Button content='Contact Us' />
      </div>
    </section>
  );
};

export default ServicesBanner;

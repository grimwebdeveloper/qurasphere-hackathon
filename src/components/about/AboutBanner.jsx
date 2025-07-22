import Button from '../global/Button';

const AboutBanner = () => {
  return (
    <section className='max-w-screen-xl mx-auto px-4 text-center flex flex-col gap-4 justify-center py-40'>
      <h2 className=' text-4xl md:text-5xl lg:text-6xl font-bold'>
        Empowering Businesses with
        <span className='text-blue-600'> Premium Digital Solutions</span>
      </h2>
      <p className='text-lg lg:text-xl'>
        We don't just build websites—we build digital empires that drive real
        business growth.
      </p>
      <p className='text-lg lg:text-xl max-w-[888px] mx-auto'>
        We're a full-service digital agency delivering design, SEO, marketing,
        that help ambitious businesses dominate their markets and achieve
        sustainable growth.
      </p>
      <div className='flex gap-4 items-center justify-center mt-6'>
        <Button content='View Our Work' />
        <Button content='Contact Us' />
      </div>
    </section>
  );
};

export default AboutBanner;

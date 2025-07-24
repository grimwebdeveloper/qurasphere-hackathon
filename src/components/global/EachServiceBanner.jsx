import Button from './Button';

const EachServiceBanner = ({ heading, description, descriptionTwo }) => {
  return (
    <section className='max-w-screen-xl mx-auto px-4 text-center flex flex-col gap-4 justify-center min-h-[60vh] mb-16'>
      <h2 className=' text-4xl md:text-5xl lg:text-6xl font-bold'>{heading}</h2>
      <p className='text-lg lg:text-xl max-w-[1024px] mx-auto'>{description}</p>
      <p className='text-lg lg:text-xl max-w-[888px] mx-auto'>
        {descriptionTwo}
      </p>
      <div className='flex gap-4 items-center justify-center mt-6'>
        <Button content='View Our Work' />
        <Button content='Contact Us' />
      </div>
    </section>
  );
};

export default EachServiceBanner;

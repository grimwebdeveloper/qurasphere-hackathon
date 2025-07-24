import Button from '../global/Button';

const CTA = ({heading, paragraph}) => {
  return (
    <section className='bg-gradient-to-r from-blue-600 to-blue-700 py-12'>
      <div className='max-w-screen-xl mx-auto px-4 text-center'>
        <h2 className='font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-3 leading-tight'>{heading}</h2>
        <p className='my-6 text-base md:text-lg lg:text-xl font-medium max-w-2xl mx-auto text-white/90'>{paragraph}</p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-6'>
          <Button content='Contact Us' className='w-full sm:w-auto' />
        </div>
      </div>
    </section>
  );
};

export default CTA;

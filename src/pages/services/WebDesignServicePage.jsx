import EachServiceBanner from '../../components/global/EachServiceBanner';

const WebDesignServicePage = () => {
  return (
    <main className='max-w-screen-xl mx-auto px-4 py-16'>
      <EachServiceBanner
        heading={
          <>
            Custom, <span className='text-blue-600'>Conversion-Focused</span>{' '}
            Web Design for Modern Brands
          </>
        }
        description="We build lightning-fast, beautiful websites that actually convert visitors into customers. No more pretty designs that don't perform."
        descriptionTwo='From strategy and UX to launch and beyond, our team crafts custom web designs that reflect your brand and drive measurable results.'
      />
    </main>
  );
};

export default WebDesignServicePage;

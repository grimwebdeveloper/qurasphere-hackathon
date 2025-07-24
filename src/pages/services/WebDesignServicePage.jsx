import EachServiceBanner from '../../components/global/EachServiceBanner';
import CTA from '../../components/home/CTA';
import Testimonial from '../../components/home/Testimonial';
import ChooseDesign from '../../components/services/web-design/ChooseDesign';
import DesignGet from '../../components/services/web-design/DesignGet';
import DesignProcess from '../../components/services/web-design/DesignProcess';

const WebDesignServicePage = () => {
  return (
    <>
      <main className='max-w-screen-xl mx-auto px-4 py-16'>
        <EachServiceBanner
          heading={
            <>
              Custom, <span className='text-blue-600'>Conversion-Focused</span>{' '}
              Web Design for Modern Brands
            </>
          }
          description="We build lightning-fast, beautiful websites that actually convert visitors into customers. No more pretty designs that don't perform."
        />
        <DesignGet />
        <DesignProcess />
        <Testimonial />
        <ChooseDesign />
      </main>
      <CTA
        heading='Ready to Build Your Dream Website Design?'
        paragraph=" Let's create a website that not only looks amazing but drives real business results. Let's discuss your project today."
      />
    </>
  );
};

export default WebDesignServicePage;

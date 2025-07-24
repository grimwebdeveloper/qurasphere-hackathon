import EachServiceBanner from '../../components/global/EachServiceBanner';
import CTA from '../../components/home/CTA';
import Testimonial from '../../components/home/Testimonial';
import ChooseSeo from '../../components/services/seo/ChooseSeo';
import PerfectFor from '../../components/services/seo/PerfectFor';

const SeoServicePage = () => {
  return (
    <>
      <main className='max-w-screen-xl mx-auto px-4'>
        <EachServiceBanner
          heading={
            <>
              Rank Higher. Get More Traffic.{' '}
              <span className='text-blue-600'>Grow Faster.</span>
            </>
          }
          description=' Our SEO strategies help startups & businesses increase visibility, traffic, and leads — without guesswork. '
          descriptionTwo='From technical audits to content optimization, our team delivers proven SEO results tailored to your business goals.'
        />
        <PerfectFor />
        <ChooseSeo />
        <Testimonial />
      </main>
      <CTA
        heading='Ready to Dominate Search Results?'
        paragraph=" Let's create an SEO strategy that drives real traffic, leads, and revenue for your business. Let's discuss your project today."
      />
    </>
  );
};

export default SeoServicePage;

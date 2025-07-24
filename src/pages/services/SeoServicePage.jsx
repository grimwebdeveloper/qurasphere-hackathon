import EachServiceBanner from '../../components/global/EachServiceBanner';

const SeoServicePage = () => {
  return (
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
    </main>
  );
};

export default SeoServicePage;

import EachServiceBanner from '../../components/global/EachServiceBanner';

const WebsiteMaintenanceServicePage = () => {
  return (
    <main className='max-w-screen-xl mx-auto px-4 py-16'>
      <EachServiceBanner
        heading={
          <>
            Keep Your Website
            <span className='text-blue-600'>
              {' '}
              Fast, Secure &amp; Problem-Free
            </span>
            {' — Always '}
          </>
        }
        description=' Website maintenance plans that protect your digital presence and save you from costly downtime. Focus on your business while we handle the tech. '
        descriptionTwo='From regular updates and security patches to backups and performance monitoring, our team ensures your website runs smoothly—so you never miss a beat.'
      />
    </main>
  );
};

export default WebsiteMaintenanceServicePage;

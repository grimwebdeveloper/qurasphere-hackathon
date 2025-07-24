import EachServiceBanner from '../../components/global/EachServiceBanner';
import CTA from '../../components/home/CTA';
import Testimonial from '../../components/home/Testimonial';
import CareAndProtection from '../../components/services/website-maintenance./CareAndProtection';
import MaintenanceReason from '../../components/services/website-maintenance./MaintenanceReason';

const WebsiteMaintenanceServicePage = () => {
  return (
    <>
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
        />
        <MaintenanceReason />
        <CareAndProtection />
        <Testimonial />
      </main>
      <CTA
        heading="Let's Keep Your Website Worry-Free"
        paragraph=" Join 10+ businesses who trust us to keep their websites secure, fast, and always online.  Let's discuss your project today."
      />
    </>
  );
};

export default WebsiteMaintenanceServicePage;

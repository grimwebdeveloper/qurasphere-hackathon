import ContactPageFormSection from './ContactPageFormSection';
import Otherways from './Otherways';
import ContactSocials from './ContactSocials';
import Response from './Response';

const ContactPageForm = () => {
  return (
    <section className='max-w-screen-xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 pb-10'>
      <ContactPageFormSection />
      <div id='other-ways' className='flex flex-col gap-8 lg:col-span-1'>
        <Otherways />
        <ContactSocials />
        <Response />
      </div>
    </section>
  );
};

export default ContactPageForm;

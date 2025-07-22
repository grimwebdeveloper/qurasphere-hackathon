import ContactBanner from '../components/contact/ContactBanner';
import ContactPageForm from '../components/contact/ContactPageForm';
import CTA from '../components/home/CTA';
import Testimonial from '../components/home/Testimonial';

const ContactUsPage = () => {
  return (
    <main>
      <ContactBanner />
      <ContactPageForm />
      <Testimonial />
      <CTA />
    </main>
  );
};

export default ContactUsPage;

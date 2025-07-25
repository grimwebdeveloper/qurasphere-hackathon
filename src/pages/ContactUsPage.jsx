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
      <CTA
        heading='Ready to Grow?'
        paragraph="Let's talk about your project and discover how we can help you achieve the growth you've been dreaming of. Your success story starts with a conversation."
      />
    </main>
  );
};

export default ContactUsPage;

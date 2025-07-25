import CTA from '../components/home/CTA';
import OurWorkingEthic from '../components/home/OurWorkingEthic';
import Services from '../components/home/Services';
import ServingIndustry from '../components/home/ServingIndustry';
import Testimonial from '../components/home/Testimonial';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ServicesBanner from '../components/services/ServicesBanner';

const ServicesPage = () => {
  return (
    <main>
      <ServicesBanner />
      <WhyChooseUs />
      <Services />
      <ServingIndustry />
      <OurWorkingEthic />
      <Testimonial />
      <CTA 
        heading="Ready to Transform Your Business?" 
        paragraph="Join 30+ successful businesses who've accelerated their growth with our proven digital solutions. Your competitors are already ahead—don't wait any longer." 
      />
    </main>
  );
};

export default ServicesPage;

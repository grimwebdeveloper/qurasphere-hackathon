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
      <CTA />
    </main>
  );
};

export default ServicesPage;

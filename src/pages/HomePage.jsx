import CTA from '../components/home/CTA';
import Hero from '../components/home/Hero';
import OurWork from '../components/home/OurWork';
import OurWorkingEthic from '../components/home/OurWorkingEthic';
import Services from '../components/home/Services';
import ServingIndustry from '../components/home/ServingIndustry';
import Stats from '../components/home/Stats';
import Testimonial from '../components/home/Testimonial';
import WhyChooseUs from '../components/home/WhyChooseUs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <ServingIndustry />
      <OurWork />
      <Testimonial />
      <WhyChooseUs />
      <OurWorkingEthic />
      <CTA
        heading="Ready to Grow? Let's Build Something Amazing Together."
        paragraph="Join 10+ successful businesses who've transformed their online presence with Qurasphere"
      />
    </>
  );
};

export default HomePage;

import Hero from '../components/home/Hero';
import OurWork from '../components/home/OurWork';
import Services from '../components/home/Services';
import ServingIndustry from '../components/home/ServingIndustry';
import Stats from '../components/home/Stats';

const HomePage = () => {
  return (
    <>
      <Hero />
      {/* <Stats />
      <Services />
      <ServingIndustry /> */}
      <OurWork />
    </>
  );
};

export default HomePage;

import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import ServingIndustry from '../components/home/ServingIndustry';
import Stats from '../components/home/Stats';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <ServingIndustry />
    </>
  );
};

export default HomePage;

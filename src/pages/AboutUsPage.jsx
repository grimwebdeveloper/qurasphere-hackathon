import AboutBanner from '../components/about/AboutBanner';
import MissionVisionValues from '../components/about/MissionVisionValues';
import OurTeams from '../components/about/OurTeams';
import WhatWeDoForYou from '../components/about/WhatWeDoForYou';
import CTA from '../components/home/CTA';
import Testimonial from '../components/home/Testimonial';

const AboutUsPage = () => {
  return (
    <main>
      <AboutBanner />
      <MissionVisionValues />
      <WhatWeDoForYou />
      <OurTeams />
      <Testimonial />
      <CTA />
    </main>
  );
};

export default AboutUsPage;

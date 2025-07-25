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
      <CTA
        heading="Ready to Grow?"
        paragraph="Let's talk about your project and discover how we can help you achieve the growth you've been dreaming of. Your success story starts with a conversation."
      />
    </main>
  );
};

export default AboutUsPage;

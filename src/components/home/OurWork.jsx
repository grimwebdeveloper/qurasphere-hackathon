import Heading from '../global/Heading';
import { MdArrowOutward } from 'react-icons/md';

const projectData = [
  {
    img: 'Titan.jpg',
    heading: 'Titan',
    description:
      'We designed and developed several new pages based on Figma designs provided by the client. The pages are built with a clean, component-driven HTML structure and include interactive elements such as carousels and sliders to enhance user engagement.',
  },
  {
    img: 'EME.png',
    heading: 'EME',
    description:
      'EME is a data-rich, multilingual website developed entirely from scratch to present advanced electro-mechanical research insights. A key feature is a dynamic, interactive globe visualization that plots data using latitude and longitude values, enhanced by smooth scroll-triggered animations. The site includes multiple content-rich pages, each utilizing complex filters and a modular component strategy for maintainability and performance.',
  },
  {
    img: 'ThreatsEye.png',
    heading: 'ThreatsEye',
    description:
      'ThreatsEye is an advanced cybersecurity platform that leverages AI to provide real-time threat intelligence and monitoring. We developed a sophisticated dashboard interface that visualizes complex security data through interactive charts and graphs. The platform features real-time alerts, automated threat detection, and comprehensive reporting capabilities, all built with a focus on performance and user experience.',
  },
  {
    img: 'ArcelorMittal.png',
    heading: 'ArcelorMittal',
    description:
      'We developed this website from the ground up, fully tailored to the client’s specifications. It features a comprehensive product catalog with an advanced filtering and sorting system. Built using a component-based architecture, it follows best security practices and supports multilingual functionality.',
  },
  {
    img: 'Share4growth.png',
    heading: 'Share4growth',
    description:
      'This is a highly complex, multilingual platform built to bridge the communication gap between teachers and students. Developed entirely in-house, the site features custom components, dynamic filtering capabilities, and continues to be under active maintenance and enhancement',
  },
  {
    img: 'Neural IT.jpg',
    heading: 'Neural IT',
    description:
      "We developed a modern, responsive website for Neural IT that showcases their IT services and solutions. The site features a clean, professional design with smooth animations and interactive elements. Key highlights include a dynamic service showcase, client testimonials, and an intuitive contact system. Built with performance and user experience in mind, the website effectively communicates Neural IT's expertise in software development and digital transformation.",
  },
  {
    img: 'BTO.webp',
    heading: 'BTO',
    description:
      'For BTO, we revitalized their existing website by crafting a new theme that integrates seamlessly with their CRM (CiviCRM). The project involved API integrations to fetch and visualize nature and bird-related data, all wrapped in a responsive, user-friendly UI. Developed with a component-based system, the site ensures future scalability and efficient content management.',
  },
  {
    img: 'Maltalingua.png',
    heading: 'Maltalingua',
    description:
      "We developed a modern, responsive website for Maltalingua, a leading English language school in Malta. The site features an intuitive booking system for language courses, accommodation options, and cultural activities. Key highlights include a dynamic course catalog, student testimonials, and an interactive campus tour. The multilingual platform effectively showcases the school's vibrant learning environment and Mediterranean location, helping prospective students make informed decisions about their language learning journey.",
  },
];

const OurWork = () => {
  return (
    <section id="our-work" className="max-w-screen-xl mx-auto px-4 py-16">
      {/* Heading */}
      <Heading
        title="Our Work"
        tagline="See how we turn ideas into impactful digital experiences"
      />
      {/* Projects */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, idx) => (
          <div className="border border-zinc-300 rounded-2xl overflow-hidden">
              <img
                src={project.img}
                alt={project.heading}
                className="aspect-video w-full object-cover object-center transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
              <div className="p-6 flex flex-col gap-4">
                <h3 className="font-semibold text-2xl">{project.heading}</h3>
                <p className="text-zinc-600 line-clamp-4">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="flex items-center gap-2 font-semibold bg-gradient-to-r from-blue-700 to-purple-600 text-transparent bg-clip-text"
                >
                  Visit Project <MdArrowOutward className="text-blue-600" />
                </a>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWork;

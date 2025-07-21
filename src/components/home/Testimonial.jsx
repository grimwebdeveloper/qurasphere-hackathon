import Heading from '../global/Heading';
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const Testimonial = () => {
  const testimonialData = [
    {
      testimonial:
        'Qurasphere delivered our project on time and exceeded our expectations. Their team was professional, communicative, and truly understood our business needs. Throughout the entire process, they kept us informed and were always available to answer our questions. The final product not only met our requirements but also included thoughtful touches that demonstrated their commitment to quality. We are thrilled with the results and look forward to working with Qurasphere again in the future.',
      clientName: 'Sarah Williams',
      clientCompany: 'Acme Corp',
    },
    {
      testimonial:
        'The seamless process and attention to detail made working with Qurasphere a pleasure. We saw measurable improvements in our workflow and productivity. Their team took the time to understand our unique challenges and provided tailored solutions that fit perfectly with our operations. The implementation was smooth, and their ongoing support has been invaluable. Choosing Qurasphere was one of the best decisions we made for our business this year.',
      clientName: 'Michael Chen',
      clientCompany: 'BrightPath Solutions',
    },
    {
      testimonial:
        'From start to finish, Qurasphere provided expert guidance and innovative solutions. We highly recommend them to anyone looking to scale their business. Their strategic approach and technical expertise helped us overcome obstacles we had struggled with for months. The team’s dedication to our success was evident in every interaction, and the results speak for themselves. We have seen significant growth and are excited about our continued partnership with Qurasphere.',
      clientName: 'Priya Patel',
      clientCompany: 'NextGen Ventures',
    },
  ];
  return (
    <section id='testimonial' className='max-w-screen-xl mx-auto p-4'>
      <Heading
        title='What Our Clients Say'
        tagline="Don't just take our word for it"
      />
      <Swiper
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {testimonialData.map((testimonial, idx) => (
          <SwiperSlide key={idx}>
            <div className='border border-zinc-200 shadow-xl rounded-2xl p-4 max-w-[992px] mx-auto'>
              <BiSolidQuoteAltLeft className='text-blue-600 text-6xl' />
              <p className='text-lg text-center px-16'>
                {testimonial.testimonial}
              </p>
              <BiSolidQuoteAltRight className='text-blue-600 text-6xl ml-auto' />
              <div className='text-center text-lg text-zinc-600'>
                <span className='text-blue-600'>{testimonial.clientName}</span>{' '}
                | {testimonial.clientCompany}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;

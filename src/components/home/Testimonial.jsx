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
        'Qurasphere delivered our project ahead of schedule and exceeded our expectations. Highly recommended!',
      clientName: 'Sarah Williams',
      clientCompany: 'Acme Corp',
    },
    {
      testimonial:
        'The team at Qurasphere was attentive, efficient, and provided excellent support throughout. Great experience!',
      clientName: 'Michael Chen',
      clientCompany: 'BrightPath Solutions',
    },
    {
      testimonial:
        'Qurasphere’s expertise helped us grow quickly. We’re very happy with the results and their dedication.',
      clientName: 'Priya Patel',
      clientCompany: 'NextGen Ventures',
    },
  ];
  return (
    <section id='testimonial' className='max-w-screen-xl mx-auto p-4 py-16'>
      <Heading
        title='What Our Clients Say'
        tagline="Don't just take our word for it"
      />
      <Swiper
        spaceBetween={32}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className='py-12'
      >
        {testimonialData.map((testimonial, idx) => (
          <SwiperSlide key={idx}>
            <div className='bg-white border border-zinc-200 rounded-2xl shadow-lg px-8 py-8 flex flex-col gap-4 max-w-xl mx-auto mb-4 min-w-full'>
              {/* Avatar, Name, Date */}
              <div className='flex items-center gap-4'>
                <div className='h-12 w-12 rounded-full bg-purple-200 flex items-center justify-center overflow-hidden'>
                  {/* Placeholder avatar: use initials */}
                  <span className='text-xl font-bold text-purple-700'>
                    {testimonial.clientName
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <div>
                  <div className='font-bold text-zinc-900 text-lg leading-tight'>
                    {testimonial.clientName}
                  </div>
                  <div className='text-sm text-zinc-400 font-medium'>
                    {/* Simulate a date for demo */}
                    January 12, 2025
                  </div>
                </div>
              </div>
              {/* Stars */}
              <div className='flex items-center gap-1 mt-1'>
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    className='w-5 h-5 text-yellow-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <polygon points='10,1.5 12.59,7.36 18.9,7.97 14,12.14 15.18,18.36 10,15.27 4.82,18.36 6,12.14 1.1,7.97 7.41,7.36' />
                  </svg>
                ))}
              </div>
              {/* Title */}
              <div className='font-bold text-xl text-zinc-900 mt-2 mb-1'>
                Good choice!
              </div>
              {/* Testimonial */}
              <p className='text-base text-zinc-700 leading-relaxed'>
                {testimonial.testimonial}
              </p>
              {/* Company */}
              <div className='text-sm text-blue-600 font-medium mt-2'>
                {testimonial.clientCompany}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;

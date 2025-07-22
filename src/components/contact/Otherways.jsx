import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaCalendarCheck,
} from 'react-icons/fa6';
import ContactHeadings from './ContactHeadings';

const Otherways = () => {
  const otherWaysData = [
    {
      id: 1,
      way: 'Email',
      wayIcon: <FaEnvelope className='text-xl' />,
      wayContent: 'qurasphere@gmail.com',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
    },
    {
      id: 1,
      way: 'Phone',
      wayIcon: <FaPhone className='text-xl' />,
      wayContent: '+91 99051 00804',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600',
    },
    {
      id: 1,
      way: 'WhatsApp',
      wayIcon: <FaWhatsapp className='text-xl' />,
      wayContent: 'Chat with us instantly',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600',
    },
    {
      id: 1,
      way: 'Book a Call',
      wayIcon: <FaCalendarCheck className='text-xl' />,
      wayContent: 'Schedule free consultation',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600',
    },
  ];
  return (
    <div className='border border-zinc-100 rounded-xl p-4 shadow-sm'>
      <ContactHeadings
        title='Other Ways to Reach Us'
        tagline='Choose the method that works best for you'
      />
      <div>
        {otherWaysData.map((way) => (
          <div
            key={way.id}
            className={`flex items-center gap-4 ${way.bgColor} mt-4 p-4 rounded-md ${way.textColor}`}
          >
            {way.wayIcon}
            <div>
              <h3 className='font-semibold text-black'>{way.way}</h3>
              <p>{way.wayContent}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Otherways;

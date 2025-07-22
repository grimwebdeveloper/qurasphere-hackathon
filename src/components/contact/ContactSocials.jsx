import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';
import ContactHeadings from './ContactHeadings';

const ContactSocials = () => {
  const contactSocialsData = [
    {
      id: 1,
      icon: <FaFacebookF />,
      content: 'Facebook',
    },
    {
      id: 2,
      icon: <FaInstagram />,
      content: 'Instagram',
    },
    {
      id: 3,
      icon: <FaLinkedinIn />,
      content: 'LinkedIn',
    },
    {
      id: 4,
      icon: <FaXTwitter />,
      content: 'X',
    },
  ];
  return (
    <div className='border border-zinc-100 rounded-xl p-4 shadow-sm'>
      <ContactHeadings
        title='Follow Us'
        tagline='Stay connected on social media'
      />
      <div className='grid grid-cols-2 gap-4 py-4'>
        {contactSocialsData.map((social) => (
          <div
            key={social.id}
            className='border border-zinc-200 rounded-md text-center py-1 flex justify-center items-center gap-2'
          >
            {social.icon}
            {social.content}
          </div>
        ))}
      </div>
      <p className='text-center text-red-600'>
        Prefer DMs? Reach out to us on Instagram or LinkedIn!
      </p>
    </div>
  );
};

export default ContactSocials;

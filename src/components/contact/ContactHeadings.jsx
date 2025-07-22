const ContactHeadings = ({ title, tagline }) => {
  return (
    <>
      <h2 className='font-bold text-2xl'>{title}</h2>
      <p className='text-zinc-600 pt-2 pb-4'>{tagline}</p>
    </>
  );
};

export default ContactHeadings;

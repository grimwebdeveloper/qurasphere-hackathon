const Response = () => {
  return (
    <div className='border border-emerald-200 rounded-xl p-4 shadow-sm bg-emerald-100 text-emerald-900'>
      <h2 className='flex items-center gap-2 font-semibold'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
          className='lucide lucide-clock4-icon lucide-clock-4 font-bold'
        >
          <path d='M12 6v6l4 2' />
          <circle cx='12' cy='12' r='10' />
        </svg>
        Quick Response Guarantee
      </h2>
      <p className='py-4'>
        We respond to all inquiries within{' '}
        <span className='font-bold'>24 hours</span>.{' '}
        <span className='font-bold'>Urgent</span> projects get priority
        attention within <span className='font-bold'>4 hours</span>.
      </p>
    </div>
  );
};

export default Response;

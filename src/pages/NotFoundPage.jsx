import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <main className='min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 px-4'>
      <div className='text-center'>
        <h1 className='text-[15vw] md:text-[8vw] font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text drop-shadow-lg mb-4'>
          404
        </h1>
        <h2 className='text-3xl md:text-4xl font-bold text-zinc-800 mb-2'>
          Page Not Found
        </h2>
        <p className='text-zinc-500 mb-8 max-w-md mx-auto'>
          Oops! The page you are looking for does not exist or has been moved.
          Please check the URL or return to the homepage.
        </p>
        <Link
          to='/'
          className='inline-block px-8 py-3 rounded-full bg-black text-white font-semibold text-lg shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-colors duration-300'
        >
          Go Home
        </Link>
      </div>
      <div className='mt-12 opacity-60'>
        <svg
          width='220'
          height='120'
          viewBox='0 0 220 120'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <ellipse cx='110' cy='100' rx='90' ry='15' fill='#a5b4fc' />
          <circle cx='60' cy='60' r='35' fill='#dbeafe' />
          <circle cx='160' cy='70' r='30' fill='#c7d2fe' />
          <ellipse cx='110' cy='80' rx='50' ry='20' fill='#818cf8' />
        </svg>
      </div>
    </main>
  );
};

export default NotFoundPage;

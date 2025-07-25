import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/global/Button';

const LoginPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    remember: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setError('');
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setTimeout(() => {
      setLoading(false);
      if (
        form.email === 'demo@qurasphere.com' &&
        form.password === 'password'
      ) {
        alert('Login successful!');
      } else {
        setError('Invalid email or password');
      }
    }, 1200);
  }

  return (
    <div className='min-h-[90vh] flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-purple-50 py-16'>
      <div className='w-full max-w-2xl flex flex-col justify-center py-12 px-10 bg-white rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden'>
        {/* Decorative background */}
        <div className='absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-2xl opacity-40 pointer-events-none' />
        <div className='absolute -bottom-10 -left-10 w-32 h-32 bg-purple-100 rounded-full blur-2xl opacity-40 pointer-events-none' />
        <h2 className='text-3xl font-extrabold text-gray-900 mb-2 tracking-tight z-10'>
          Client Portal
        </h2>
        <form
          className='mt-6 flex flex-col gap-6 z-10 relative'
          onSubmit={handleSubmit}
          autoComplete='off'
        >
          <div>
            <h3 className='text-xl font-bold text-gray-800 mb-1'>
              Welcome Back
            </h3>
            <p className='text-gray-500 font-medium text-base'>
              Access your projects, messages, and invoices
            </p>
          </div>
          {error && (
            <div className='bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2'>
              <span>⚠️</span>
              {error}
            </div>
          )}
          <div className='flex flex-col gap-1'>
            <label
              htmlFor='email'
              className='text-sm font-semibold text-gray-700'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              className='px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-gray-900 bg-gray-50 transition-all'
              autoComplete='email'
              required
              disabled={loading}
              placeholder='you@email.com'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label
              htmlFor='password'
              className='text-sm font-semibold text-gray-700'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              value={form.password}
              onChange={handleChange}
              className='px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-gray-900 bg-gray-50 transition-all'
              autoComplete='current-password'
              required
              disabled={loading}
              placeholder='Your password'
            />
          </div>
          <div className='flex items-center justify-between'>
            <label className='flex items-center gap-2 text-sm font-medium text-gray-600 cursor-pointer select-none'>
              <input
                type='checkbox'
                id='remember'
                name='remember'
                checked={form.remember}
                onChange={handleChange}
                className='accent-blue-600 w-4 h-4 rounded'
                disabled={loading}
              />
              Remember me
            </label>
            <button
              type='button'
              className='text-sm font-semibold text-blue-600 hover:underline focus:outline-none'
              tabIndex={0}
              disabled={loading}
              onClick={() => alert('Password reset coming soon!')}
            >
              Forgot Password?
            </button>
          </div>
          <div className='mt-2'>
            {loading ? (
              <button
                type='button'
                className='w-full bg-gradient-to-r from-zinc-900 to-zinc-900 text-white font-semibold px-8 py-3 rounded-full cursor-not-allowed opacity-70 flex items-center justify-center gap-2'
                disabled
              >
                <svg
                  className='animate-spin h-5 w-5 text-white'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                    fill='none'
                  />
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z'
                  />
                </svg>
                Logging in...
              </button>
            ) : (
              <button
                type='submit'
                className='w-full bg-gradient-to-r from-zinc-900 to-zinc-900 text-white font-semibold px-8 py-3 rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 duration-500 transition-colors flex items-center justify-center gap-2'
                disabled={loading}
              >
                Login
              </button>
            )}
          </div>
          <p className='text-center text-gray-500 font-medium mt-2'>
            Don't have access?{' '}
            <Link
              to='/signup'
              className='text-blue-600 font-bold hover:underline'
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

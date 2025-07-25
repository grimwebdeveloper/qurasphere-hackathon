import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/global/Button';

const projectTypes = [
  '',
  'SEO',
  'Web Development',
  'Web Design',
  'Website Maintenance',
  'Other',
];

const SignupPage = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    company: '',
    projectType: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    // Simulate async signup
    setTimeout(() => {
      setLoading(false);
      if (form.fullName && form.email && form.company && form.projectType) {
        setSuccess(true);
      } else {
        setError('Please fill in all fields.');
      }
    }, 1200);
  }

  return (
    <div className='min-h-[90vh] flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-purple-50'>
      <div className='w-full max-w-2xl flex flex-col justify-center py-12 px-10 bg-white rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden'>
        {/* Decorative background */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-2xl opacity-40 pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-100 rounded-full blur-2xl opacity-40 pointer-events-none" />
        <h2 className='text-3xl font-extrabold text-gray-900 mb-2 tracking-tight z-10'>
          Client Portal
        </h2>
        <form
          className='mt-6 flex flex-col gap-6 z-10 relative'
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div>
            <h3 className='text-xl font-bold text-gray-800 mb-1'>
              Request Access
            </h3>
            <p className='text-gray-500 font-medium text-base'>
              Fill out the form to request access to your client portal
            </p>
          </div>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
              <span>⚠️</span>
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
              <span>✅</span>
              Request submitted! We'll be in touch soon.
            </div>
          )}
          <div className='flex flex-col gap-1'>
            <label
              htmlFor='fullName'
              className='text-sm font-semibold text-gray-700'
            >
              Full Name
            </label>
            <input
              type='text'
              id='fullName'
              name='fullName'
              value={form.fullName}
              onChange={handleChange}
              className='px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-gray-900 bg-gray-50 transition-all'
              autoComplete='name'
              required
              disabled={loading}
              placeholder='Your full name'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label
              htmlFor='email'
              className='text-sm font-semibold text-gray-700'
            >
              Company Email
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
              placeholder='your@company.com'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label
              htmlFor='company'
              className='text-sm font-semibold text-gray-700'
            >
              Company Name
            </label>
            <input
              type='text'
              id='company'
              name='company'
              value={form.company}
              onChange={handleChange}
              className='px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-gray-900 bg-gray-50 transition-all'
              autoComplete='organization'
              required
              disabled={loading}
              placeholder='Your company name'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label
              htmlFor='projectType'
              className='text-sm font-semibold text-gray-700'
            >
              Project Type
            </label>
            <select
              id='projectType'
              name='projectType'
              value={form.projectType}
              onChange={handleChange}
              className='px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-gray-900 bg-gray-50 transition-all'
              required
              disabled={loading}
            >
              <option value=''>Select project type</option>
              {projectTypes.slice(1).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full mt-2">
            {loading ? (
              <button
                type="button"
                className="w-full bg-gradient-to-r from-zinc-900 to-zinc-900 text-white font-semibold px-8 py-3 rounded-full cursor-not-allowed opacity-70 flex items-center justify-center gap-2"
                disabled
              >
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
                </svg>
                Requesting...
              </button>
            ) : (
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-zinc-900 to-zinc-900 text-white font-semibold px-8 py-3 rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 duration-500 transition-colors"
                disabled={loading}
              >
                Request Access
              </button>
            )}
          </div>
          <p className='text-center text-gray-500 font-medium mt-2'>
            Already have access?{' '}
            <Link
              to='/login'
              className='text-blue-600 font-bold hover:underline'
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;

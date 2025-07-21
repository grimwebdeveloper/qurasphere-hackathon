import Spline from '@splinetool/react-spline';

const LoginPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 min-h-[90vh] lg:flex items-center lg:gap-4">
      {/* Left Part */}
      <div className="lg:w-1/2 flex flex-col justify-center py-12 px-8 bg-white rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
          Client Portal
        </h2>
        <form className="mt-6 flex flex-col gap-6">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              Welcome Back
            </h3>
            <p className="text-gray-500 font-medium text-base">
              Access your projects, messages, and invoices
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-gray-900 bg-gray-50"
              autoComplete="email"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-gray-900 bg-gray-50"
              autoComplete="current-password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                id="remember"
                className="accent-blue-600 w-4 h-4 rounded"
              />
              Remember me
            </label>
            <a
              href="#"
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-lg shadow-sm"
          >
            Login
          </button>
          <p className="text-center text-gray-500 font-medium mt-2">
            Don't have access?{' '}
            <a
              href="/signup"
              className="text-blue-600 font-bold hover:underline"
            >
              Sign up
            </a>
          </p>
        </form>
      </div>
      {/* Right Part */}
      <div className="lg:w-1/2 hidden lg:block h-[70vh]">
        <Spline scene="https://prod.spline.design/e-M8ydMaevyF2mT4/scene.splinecode" />
      </div>
    </div>
  );
};

export default LoginPage;

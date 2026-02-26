import React, { useState, useEffect, useRef } from 'react';

const login = () => {
  const [formDataLogin, setFormDataLogin] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [formDataRegister, setFormDataRegister] = useState({
    email: '',
    username: '',
    password: '',
  });
  const [error, setError] = useState({});
  const containerRef = useRef(null);
  const [register, setRegister] = useState(false)

  const handleChangeLogin = (e) => {
    const { name, value, type, checked } = e.target;
    setFormDataLogin(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleChangeRegister = (e) => {
    const { name, value } = e.target;

    setFormDataRegister(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // validasi input
    const newError = {};

    if (!formDataLogin.email) {
      newError.email = 'Isi Emilnya Woyy!!';
    }
    if (!formDataLogin.password) {
      newError.password = 'Passwordnya Juga Setan!!';
    }
    setError(newError);

    if(Object.keys(newError).length === 0) {
      console.log('Login data:', formDataLogin);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Register data:', formDataRegister);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 overflow-hidden">

      <div className="absolute top-15">
        <h1 className='font-poppins text-[10rem] font-extrabold uppercase'>{register === false ? "Login" : "Register"}<span className='text-white text-stroke-black text-stroke-2'> Page</span></h1>
      </div>

      <div ref={containerRef} className="w-full max-w-6xl flex overflow-hidden relative rounded-md shadow-lg inset-shadow-2xl inset-shadow-black border border-white/20 px-10 bg-white mt-32 " >
        
        {/* Sisi Kiri - Login Form */}
        <div className={`w-1/2 p-8 ${register ?  "hidden" : "block"}`} >
          <div className="text-center mb-8 ">
            <h2 className="text-3xl font-bold text-black">Welcome Back!</h2>
            <p className="text-black mt-2">Login to continue your journey</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6 ">
            {/* Email*/}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Email Address {error.email && <span className="text-red-500 text-xs ml-2">{error.email}</span>}
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formDataLogin.email}
                  onChange={handleChangeLogin}
                  className={`w-full px-4 py-3 pl-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-white focus:border-transparent outline-none transition text-black ${error.email ? 'border-red-500' : ''}`}
                  placeholder="Enter your email"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Password {error.password && <span className="text-red-500 text-xs ml-2">{error.password}</span>}
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={formDataLogin.password}
                  onChange={handleChangeLogin}
                  className={`w-full px-4 py-3 pl-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-white focus:border-transparent outline-none transition text-black ${error.password ? 'border-red-500' : ''}`}
                  placeholder="Enter your password"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formDataLogin.rememberMe}
                  onChange={handleChangeLogin}
                  className="w-4 h-4 text-black border-gray-300 rounded focus:ring-white"
                />
                <span className="ml-2 text-sm text-black">Remember me</span>
              </label>
              <button type="button" className="text-sm text-black hover:text-black">
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-500 to-black text-white py-3 rounded-xl font-semibold hover:opacity-90 transform hover:scale-[1.02] transition duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            >
              Login
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-black">
              Don't have an account?{' '}
              <button onClick={() => setRegister(!register)} onChange={handleChangeLogin} type="button" className="text-black rounded-[3px] px-2 font-semibold cursor-pointer">
                Sign up
              </button>
            </p>
          </form>

          {/* Social Login */}
          <div className="mt-8 ">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 py-1.5 text-white bg-gray-600 backdrop-blur-sm rounded-md">Or login with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-xl hover:text-white transition group text-black hover:bg-gradient-to-r from-gray-500 to-black">
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-xl hover:text-white transition group text-black hover:bg-gradient-to-r from-gray-500 to-black">
                <svg className="w-5 h-5 mr-2 fill-current text-[#1877f2] group-hover:scale-110 transition" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
                </svg>
                Facebook
              </button>
            </div>
          </div>
        </div>

        {/* Sisi Kanan - Register Form */}
        <div className={`w-1/2 p-8 ${register ?  "block" : "hidden"}`}>
          <div className="text-center mb-4 ">
            <h2 className="text-3xl font-bold text-black">Let's Start!</h2>
            <p className="text-black mt-2">Create your new account!</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4 ">
            {/* Email*/}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formDataRegister.email}
                  onChange={handleChangeRegister}
                  className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-white focus:border-transparent outline-none transition text-black"
                  placeholder="Enter your email"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {/* Username*/}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="username"
                  value={formDataRegister.username}
                  onChange={handleChangeRegister}
                  className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-white focus:border-transparent outline-none transition text-black"
                  placeholder="Enter your Username"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={formDataRegister.password}
                  onChange={handleChangeRegister}
                  className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-white focus:border-transparent outline-none transition text-black"
                  placeholder="Enter your password"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-500 to-black text-white py-3 rounded-xl font-semibold hover:opacity-90 transform hover:scale-[1.02] transition duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            >
              Create
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-black">
              Already have an account?{' '}
              <button onClick={() => setRegister(!register)} onChange={handleChangeRegister} type="button" className="text-black rounded-[3px] px-2 font-semibold cursor-pointer">
                Login
              </button>
            </p>
          </form>

          {/* Social Login */}
          <div className="mt-8 ">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 py-1.5 text-white bg-gray-600 backdrop-blur-sm rounded-md">Or Register with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-xl hover:text-white transition group text-black hover:bg-gradient-to-r from-gray-500 to-black">
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-xl hover:text-white transition group text-black hover:bg-gradient-to-r from-gray-500 to-black">
                <svg className="w-5 h-5 mr-2 fill-current text-[#1877f2] group-hover:scale-110 transition" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
                </svg>
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
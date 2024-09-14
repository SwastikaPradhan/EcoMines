'use client';

/**import React, { useState } from 'react';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    state: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
      >
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            style={{ borderColor: '#d1d5db', padding: '0.5rem', borderRadius: '0.25rem' }}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            style={{ borderColor: '#d1d5db', padding: '0.5rem', borderRadius: '0.25rem' }}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            style={{ borderColor: '#d1d5db', padding: '0.5rem', borderRadius: '0.25rem' }}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-black p-2 rounded hover:bg-yellow-600"
          style={{ backgroundColor: '#facc15', color: '#000000', padding: '0.5rem', borderRadius: '0.25rem', border: 'none' }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;**/




/**'use client';

import React, { useState } from 'react';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    state: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-700 to-black">
      <form 
        onSubmit={handleSubmit} 
        className="bg-black p-8 rounded-lg shadow-md w-full max-w-md border border-yellow-500"
      >
        <h1 className="text-2xl font-bold mb-4 text-yellow-500">Sign Up</h1>
        <div className="mb-4">
          <label className="block text-yellow-500 mb-2">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border border-yellow-500 p-2 rounded bg-gray-800 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-yellow-500 mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-yellow-500 p-2 rounded bg-gray-800 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-yellow-500 mb-2">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full border border-yellow-500 p-2 rounded bg-gray-800 text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-black p-2 rounded hover:bg-yellow-600 transition duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp; **/


'use client'; // This allows the use of React hooks in Next.js (since it's a client component)

import React, { useState } from 'react';
import { FaMapMarkerAlt, FaUser, FaLock } from 'react-icons/fa';

function SignInForm() {
  const [state, setState] = useState('');
  const [location, setLocation] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const states = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttarakhand',
    'Uttar Pradesh',
    'West Bengal',
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md px-10 bg-white border border-gray-300 shadow-lg rounded-lg">
        <h2 className="text-lg font-bold text-gray-800 text-center mb-4">Sign In</h2>
        <form className="px-4 py-2">
          <label className="block mb-4">
            <span className="text-gray-700">State:</span>
            <div className="flex items-center mt-1">
              <FaMapMarkerAlt className="mr-2 text-gray-500" />
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700"
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Location:</span>
            <div className="flex items-center mt-1">
              <FaMapMarkerAlt className="mr-2 text-gray-500" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700"
                placeholder="Enter Location"
              />
            </div>
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Username:</span>
            <div className="flex items-center mt-1">
              <FaUser className="mr-2 text-gray-500" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700"
                placeholder="Enter Username"
              />
            </div>
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Password:</span>
            <div className="flex items-center mt-1">
              <FaLock className="mr-2 text-gray-500" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700"
                placeholder="Enter Password"
              />
            </div>
          </label>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Sign In
          </button>

          <div className="px-4 py-2 text-center mt-4">
            <span className="text-gray-600">Don't have an account? </span>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;

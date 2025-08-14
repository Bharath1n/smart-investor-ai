import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Basic sign-up with any details
    login();
    navigate('/');
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-orange-500 mb-4">Sign Up</h1>
      <form onSubmit={handleSignUp} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 bg-gray-700 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 bg-gray-700 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 bg-gray-700 rounded"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-600 hover:bg-green-500 rounded transition"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4">
        Already have an account? <Link to="/signin" className="text-blue-400 hover:underline">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUp;
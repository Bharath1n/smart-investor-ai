import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-orange-500 mb-4">Welcome to Intelvestor</h1>
      <p className="mb-6">Discover AI-powered stock predictions and market insights. Please sign in or sign up to get started.</p>
      <div className="space-x-4">
        <Link
          to="/signin"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded transition"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded transition"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;
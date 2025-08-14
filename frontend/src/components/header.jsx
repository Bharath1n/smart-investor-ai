import React from 'react';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import { LogIn, LogOut, UserPlus } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center border-b border-gray-700">
      <h1 className="text-xl font-bold text-orange-500">Intelvestor</h1>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        {isAuthenticated ? (
          <button
            onClick={logout}
            className="flex items-center px-3 py-1 bg-red-600 hover:bg-red-500 rounded transition"
          >
            <LogOut className="w-5 h-5 mr-1" />
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/signin"
              className="flex items-center px-3 py-1 bg-blue-600 hover:bg-blue-500 rounded transition"
            >
              <LogIn className="w-5 h-5 mr-1" />
              Sign In
            </Link>
            <Link
              to="/signup"
              className="flex items-center px-3 py-1 bg-green-600 hover:bg-green-500 rounded transition"
            >
              <UserPlus className="w-5 h-5 mr-1" />
              Sign Up
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
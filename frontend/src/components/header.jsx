import React, { useState } from 'react';

// A better long-term solution is a shared theme file.
const theme = {
    primaryColor: '#007bff',
};

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigationLinks = [
        { name: "Home", path: "/" },
        { name: "Market Trends", path: "#trends" },
        { name: "Portfolio", path: "#portfolio" },
        { name: "Analysis", path: "#analysis" },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="/" className="text-2xl font-bold" style={{ color: theme.primaryColor }}>
                           AI Stock Insights
                        </a>
                    </div>
                    <nav className="hidden md:flex md:space-x-8">
                        {navigationLinks.map(link => (
                            <a key={link.name} href={link.path} className="font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200">
                                {link.name}
                            </a>
                        ))}
                    </nav>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navigationLinks.map(link => (
                            <a key={link.name} href={link.path} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header; // This line is crucial!
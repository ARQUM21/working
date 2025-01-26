import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-gray-100 py-3 shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 lg:px-20 flex justify-between items-center">
                {/* Logo */}
                <Link 
                    to="/" 
                    className="text-2xl font-bold tracking-wide text-teal-400 hover:text-teal-300 transition duration-300"
                >
                    Microfinance App
                </Link>
                <Link 
                    to="/login" 
                    className="inline-block px-6 py-2 bg-teal-500 text-gray-900 rounded-full hover:bg-teal-400 transition duration-300"
                >
                    Login
                </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
                <button 
                    type="button" 
                    className="text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-300"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="2" 
                        stroke="currentColor" 
                        className="w-6 h-6"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M4 6h16M4 12h16M4 18h16" 
                        />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-100 py-6 mt-10">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
                    {/* Company Info */}
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold text-teal-400">
                            Saylani Microfinance App
                        </h2>
                        <p className="text-gray-400 text-sm mt-2">
                            Empowering communities through microfinance solutions.
                        </p>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex space-x-4">
                        <a 
                            href="https://facebook.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-400 hover:text-teal-400 transition duration-300"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="currentColor" 
                                viewBox="0 0 24 24" 
                                className="w-6 h-6"
                            >
                                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495V14.708h-3.13v-3.622h3.13V8.412c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.462.099 2.792.143v3.241l-1.916.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.591l-.467 3.622h-3.124V24h6.125c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                            </svg>
                        </a>
                        <a 
                            href="https://twitter.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-400 hover:text-teal-400 transition duration-300"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="currentColor" 
                                viewBox="0 0 24 24" 
                                className="w-6 h-6"
                            >
                                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.93 4.93 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.949 13.949 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.897 4.897 0 01-2.228-.616v.062a4.917 4.917 0 003.946 4.827 4.935 4.935 0 01-2.224.084 4.919 4.919 0 004.6 3.419A9.867 9.867 0 010 21.539a13.93 13.93 0 007.548 2.212c9.058 0 14.01-7.512 14.01-14.01 0-.213-.005-.425-.015-.637A10.012 10.012 0 0024 4.557z" />
                            </svg>
                        </a>
                        <a 
                            href="https://linkedin.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-400 hover:text-teal-400 transition duration-300"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="currentColor" 
                                viewBox="0 0 24 24" 
                                className="w-6 h-6"
                            >
                                <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.206 24 24 23.226 24 22.271V1.729C24 .774 23.206 0 22.225 0zM7.069 20.452H3.605V9.031h3.464v11.421zM5.337 7.776c-1.089 0-1.975-.896-1.975-2.002 0-1.105.886-2.001 1.975-2.001s1.975.896 1.975 2.001c0 1.106-.886 2.002-1.975 2.002zm15.115 12.676h-3.464v-5.938c0-1.415-.03-3.236-1.973-3.236-1.973 0-2.276 1.54-2.276 3.128v6.046H9.275V9.031h3.33v1.561h.048c.464-.874 1.598-1.792 3.289-1.792 3.518 0 4.166 2.316 4.166 5.334v6.318z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="text-center text-sm text-gray-400 mt-6">
                    <p>&copy; 2025 Saylani Microfinance App. All rights reserved.</p>
                    <p>Designed by Arqum</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

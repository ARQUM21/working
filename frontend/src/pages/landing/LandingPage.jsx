import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-teal-700 text-black py-20 px-6 text-center shadow-xl">
                <h1 className="text-6xl font-extrabold mb-4 tracking-tight">
                    Saylani Microfinance
                </h1>
                <p className="text-lg font-medium max-w-4xl mx-auto">
                    Empowering communities with financial solutions tailored to meet your dreams.
                </p>
            </header>

            {/* Main Content */}
            <main className="container mx-auto py-16 px-6 lg:px-20 flex-grow">
                <h2 className="text-5xl font-bold text-teal-700 mb-12 text-center">
                    Explore Our Loan Categories
                </h2>

                {/* Loan Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
                    {[
                        { name: "Wedding Loans", path: "/wedding-loans" },
                        { name: "Home Construction Loans", path: "/home-construction-loans" },
                        { name: "Business Startup Loans", path: "/business-startup-loans" },
                        { name: "Education Loans", path: "/education-loans" },
                    ].map((loan, index) => (
                        <Link to={loan.path} key={index}>
                            <div className="group bg-teal-600 p-10 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                                <h3 className="text-white font-bold text-2xl mb-3 text-center group-hover:text-gray-100 tracking-wide">
                                    {loan.name}
                                </h3>
                                <p className="text-gray-200 text-center text-sm group-hover:text-white">
                                    Explore how {loan.name.toLowerCase()} can help make your aspirations a reality.
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            
        </div>
    );
};

export default LandingPage;

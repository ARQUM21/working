import React from "react";
import { useNavigate } from "react-router-dom";

const HomeConstructionLoanPage = () => {
    const navigate = useNavigate();  // To navigate programmatically

    const handleCategoryClick = (categoryName) => {
        // Navigate to the LoanRequestPage
        navigate("/loan-request", { state: { category: categoryName } });
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <header className="bg-teal-800 text-black py-16 text-center px-6 lg:px-20 shadow-md">
                <h1 className="text-4xl font-extrabold leading-tight">Home Construction Loans</h1>
                <p className="mt-4 text-lg font-medium max-w-3xl mx-auto">
                    Explore the various options available for financing your home construction.
                </p>
            </header>

            {/* Main Content */}
            <main className="container mx-auto py-16 px-6 lg:px-20">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Home Construction Loan Subcategories</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            { name: "Structure", description: "Funding for construction materials like cement, wood, and more." },
                            { name: "Finishing", description: "Financial assistance for workers involved in the construction process." },
                            { name: "Loan", description: "Financing for the design and decoration of your new home." },
                        ].map((subcategory, index) => (
                            <div
                                key={index}
                                className="bg-white border-2 border-gray-200 p-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                                style={{ height: "300px" }}
                                onClick={() => handleCategoryClick(subcategory.name)}
                            >
                                <h3 className="text-teal-700 font-bold text-2xl mb-4 text-center tracking-wide">{subcategory.name}</h3>
                                <p className="text-gray-600 text-base">{subcategory.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomeConstructionLoanPage;
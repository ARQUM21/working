import React from "react";
import { useNavigate } from "react-router-dom";

const EducationLoanPage = () => {
    const navigate = useNavigate();  // To navigate programmatically

    const handleCategoryClick = (categoryName) => {
        // Navigate to the LoanRequestPage
        navigate("/loan-request", { state: { category: categoryName } });
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <header className="bg-teal-600 text-black py-16 text-center px-6 lg:px-20 shadow-md">
                <h1 className="text-4xl font-extrabold leading-tight">Education Loans</h1>
                <p className="mt-4 text-lg font-medium max-w-3xl mx-auto">
                    Explore loan options for your higher education journey.
                </p>
            </header>

            {/* Main Content */}
            <main className="container mx-auto py-16 px-6 lg:px-20">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Education Loan Subcategories</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            { name: "Tuition Fees", description: "Loan to cover tuition fees for your studies." },
                            { name: "Living Expenses", description: "Financial aid for your living expenses while studying." },
                            { name: "Books & Supplies", description: "Funding for textbooks and necessary study materials." },
                        ].map((subcategory, index) => (
                            <div
                                key={index}
                                className="bg-white border-2 border-gray-300 p-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                style={{ height: "300px" }}
                                onClick={() => handleCategoryClick(subcategory.name)}  // Add onClick handler
                            >
                                <h3 className="text-teal-600 font-bold text-2xl mb-4 text-center tracking-wide">{subcategory.name}</h3>
                                <p className="text-gray-700 text-base">{subcategory.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default EducationLoanPage;

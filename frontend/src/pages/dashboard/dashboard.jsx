import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook

const Dashboard = () => {
  const [loanDetails, setLoanDetails] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Retrieve the CNIC from local storage
    const cnic = localStorage.getItem("cnic");

    // Retrieve loan details from local storage
    const storedLoanDetails = JSON.parse(localStorage.getItem("loanDetails"));

    // Filter loan details based on the CNIC
    if (storedLoanDetails && storedLoanDetails.cnic === cnic) {
      setLoanDetails(storedLoanDetails);
    }
  }, []);

  // Function to navigate to the landing page
  const navigateToLanding = () => {
    navigate("/landing"); // Replace "/landing" with your actual landing page path
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Dashboard</h1>
      {loanDetails ? (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl overflow-hidden">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Your Loan Details</h2>
          
          {/* Loan Details Table */}
          <div className="overflow-auto max-h-[400px]">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border px-6 py-3 text-left text-sm font-semibold text-gray-700">Field</th>
                  <th className="border px-6 py-3 text-left text-sm font-semibold text-gray-700">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="border px-6 py-4 text-sm font-medium text-gray-700">CNIC</th>
                  <td className="border px-6 py-4 text-sm text-gray-900">{loanDetails.cnic}</td>
                </tr>
                <tr>
                  <th className="border px-6 py-4 text-sm font-medium text-gray-700">Email</th>
                  <td className="border px-6 py-4 text-sm text-gray-900">{loanDetails.email}</td>
                </tr>
                <tr>
                  <th className="border px-6 py-4 text-sm font-medium text-gray-700">Name</th>
                  <td className="border px-6 py-4 text-sm text-gray-900">{loanDetails.name}</td>
                </tr>
                <tr>
                  <th className="border px-6 py-4 text-sm font-medium text-gray-700">Loan Type</th>
                  <td className="border px-6 py-4 text-sm text-gray-900">{loanDetails.loanType}</td>
                </tr>
                <tr>
                  <th className="border px-6 py-4 text-sm font-medium text-gray-700">Sub Category</th>
                  <td className="border px-6 py-4 text-sm text-gray-900">{loanDetails.subCategory}</td>
                </tr>
                <tr>
                  <th className="border px-6 py-4 text-sm font-medium text-gray-700">Amount</th>
                  <td className="border px-6 py-4 text-sm text-gray-900">PKR {loanDetails.amount}</td>
                </tr>
                <tr>
                  <th className="border px-6 py-4 text-sm font-medium text-gray-700">Initial Deposit</th>
                  <td className="border px-6 py-4 text-sm text-gray-900">PKR {loanDetails.initialDeposit}</td>
                </tr>
                <tr>
                  <th className="border px-6 py-4 text-sm font-medium text-gray-700">Loan Period</th>
                  <td className="border px-6 py-4 text-sm text-gray-900">{loanDetails.period} years</td>
                </tr>
                <tr>
                  <th className="border px-6 py-4 text-sm font-medium text-gray-700">Monthly Payment</th>
                  <td className="border px-6 py-4 text-sm text-gray-900">PKR {loanDetails.monthlyPayment.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Button to navigate to landing page */}
          <button
            onClick={navigateToLanding}
            className="mt-6 px-4 py-2 bg-teal-600 text-black rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Go to home Page
          </button>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-gray-700 text-lg mt-6">No loan details found for your CNIC.</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

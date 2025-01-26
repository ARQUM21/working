import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoanRequestForm = () => {
  const navigate = useNavigate();
  const [cnic, setCnic] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState(""); // Add password state
  const [loanType, setLoanType] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [initialDeposit, setInitialDeposit] = useState("");
  const [loanDetails, setLoanDetails] = useState(null);

  const loanTypes = {
    "Wedding Loans": {
      subCategories: ["Valima", "Valima Food", "Jahez", "Furniture"],
      maxAmount: 500000,
      period: 3,
    },
    "Home Construction Loans": {
      subCategories: ["Structure", "Finishing", "Paints"],
      maxAmount: 1000000,
      period: 5,
    },
    "Business Startup Loans": {
      subCategories: ["Buy Stall", "Advance Rent For Shop", "Shop Assets", "Shop Machinery"],
      maxAmount: 1000000,
      period: 5,
    },
    "Education Loans": {
      subCategories: ["Elementary and Primary School Fees Loan", "College Fees Loan", "University Fees Loan"],
      maxAmount: "Based on requirement",
      period: 4,
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (cnic.length !== 13 || isNaN(cnic)) {
      alert("Please enter a valid CNIC number (13 digits).");
      return;
    }
  
    const loanDetails = {
      cnic,
      email,
      name,
      password,
      loanType,
      subCategory,
      amount,
      initialDeposit,
      period: loanTypes[loanType].period,
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/loan/submit-loan-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loanDetails),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        navigate("/login");
      } else {
        alert("Failed to submit loan request");
      }
    } catch (error) {
      console.error("Error submitting loan request:", error);
      alert("Error submitting loan request");
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Loan Request Form</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">CNIC</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter your CNIC"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            maxLength="13"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Loan Type</label>
          <select
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={loanType}
            onChange={(e) => setLoanType(e.target.value)}
            required
          >
            <option value="">Select Loan Type</option>
            {Object.keys(loanTypes).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        {loanType && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Sub Category</label>
            <select
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              required
            >
              <option value="">Select Sub Category</option>
              {loanTypes[loanType].subCategories.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
        )}
        {loanType && (
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">
              Maximum Loan Amount: {loanTypes[loanType].maxAmount === "Based on requirement" ? "Based on requirement" : `PKR ${loanTypes[loanType].maxAmount}`}
            </p>
            <p className="text-sm font-semibold text-gray-700 mb-2">Loan Period: {loanTypes[loanType].period} years</p>
          </div>
        )}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Loan Amount</label>
          <input
            type="number"
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Initial Deposit</label>
          <input
            type="number"
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={initialDeposit}
            onChange={(e) => setInitialDeposit(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-black font-semibold py-3 rounded-lg transition duration-200"
        >
          Submit
        </button>
      </form>

      {loanDetails && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-4">Loan Details</h2>
          <table className="w-full text-left">
            <tbody>
              <tr>
                <th className="border px-4 py-2">CNIC</th>
                <td className="border px-4 py-2">{loanDetails.cnic}</td>
              </tr>
              <tr>
                <th className="border px-4 py-2">Email</th>
                <td className="border px-4 py-2">{loanDetails.email}</td>
              </tr>
              <tr>
                <th className="border px-4 py-2">Name</th>
                <td className="border px-4 py-2">{loanDetails.name}</td>
              </tr>
              <tr>
                <th className="border px-4 py-2">Loan Type</th>
                <td className="border px-4 py-2">{loanDetails.loanType}</td>
              </tr>
              <tr>
                <th className="border px-4 py-2">Sub Category</th>
                <td className="border px-4 py-2">{loanDetails.subCategory}</td>
              </tr>
              <tr>
                <th className="border px-4 py-2">Amount</th>
                <td className="border px-4 py-2">{loanDetails.amount}</td>
              </tr>
              <tr>
                <th className="border px-4 py-2">Initial Deposit</th>
                <td className="border px-4 py-2">{loanDetails.initialDeposit}</td>
              </tr>
              <tr>
                <th className="border px-4 py-2">Loan Period</th>
                <td className="border px-4 py-2">{loanDetails.period} years</td>
              </tr>
              <tr>
                <th className="border px-4 py-2">Monthly Payment</th>
                <td className="border px-4 py-2">PKR {loanDetails.monthlyPayment.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LoanRequestForm;
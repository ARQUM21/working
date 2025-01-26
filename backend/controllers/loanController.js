const LoanRequest = require('../models/LoanRequest');

// Submit loan request
const submitLoanRequest = async (req, res) => {
  const { cnic, email, name, password, loanType, subCategory, amount, initialDeposit, period } = req.body;

  // Calculate the monthly payment
  const monthlyPayment = (amount - initialDeposit) / (period * 12);

  try {
    const newLoanRequest = new LoanRequest({
      cnic,
      email,
      name,
      password,
      loanType,
      subCategory,
      amount,
      initialDeposit,
      monthlyPayment,
      period,
    });

    await newLoanRequest.save();

    res.status(201).json({ message: "Loan request submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error in submitting loan request" });
  }
};

module.exports = {
  submitLoanRequest,
};

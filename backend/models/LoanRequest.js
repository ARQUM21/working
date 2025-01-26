const mongoose = require('mongoose');

const LoanRequestSchema = new mongoose.Schema({
  cnic: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  loanType: { type: String, required: true },
  subCategory: { type: String, required: true },
  amount: { type: Number, required: true },
  initialDeposit: { type: Number, required: true },
  monthlyPayment: { type: Number, required: true },
  period: { type: Number, required: true },
});

const LoanRequest = mongoose.model('LoanRequest', LoanRequestSchema);

module.exports = LoanRequest;

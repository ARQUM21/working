import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/landing/LandingPage";
import WeddingLoanPage from "./pages/landing/WeddingLoanPage";
import HomeConstructionLoanPage from "./pages/landing/HomeConstructionLoanPage";
import BusinessStartupLoanPage from "./pages/landing/BusinessStartupLoanPage";
import EducationLoanPage from "./pages/landing/EducationLoanPage";
import LoginPage from "./pages/Login";
import LoanRequestForm from "./pages/requestfrom/loanRequestForm";
import Dashboard from "./pages/dashboard/dashboard";


const App = () => {
    return (
        <Router>
            <Navbar />  {/* Navbar will be shown on all pages */}
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/wedding-loans" element={<WeddingLoanPage />} />
                <Route path="/home-construction-loans" element={<HomeConstructionLoanPage />} />
                <Route path="/business-startup-loans" element={<BusinessStartupLoanPage />} />
                <Route path="/education-loans" element={<EducationLoanPage />} />
                <Route path="/login" element={<LoginPage />} /> {/* Login Route */}
                <Route path="/loan-request" element={<LoanRequestForm />} />
                <Route path ="/dashboard" element={<Dashboard />} />
                <Route path ='/landing' element={<LandingPage />} />
            </Routes>
            <Footer />  {/* Footer will be shown on all pages */}
        </Router>
    );
};

export default App;
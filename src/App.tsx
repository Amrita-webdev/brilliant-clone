// import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import LandingPage from './Components/LandingPage';
import Signup from './Components/Signup';
import Login from './Components/Login'
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <>
      <div className="pt-6">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

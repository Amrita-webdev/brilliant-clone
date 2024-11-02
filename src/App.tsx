// import { useState } from 'react'
import './App.css';
// import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import LandingPage from './Components/LandingPage';
// import Signup from './Components/Signup';

function App() {
  return (
    <>
      <div className="pt-6 pl-8 pr-8">
        <Header />
        <LandingPage />
        {/* <Dashboard />
        <Signup /> */}
      </div>
    </>
  );
}

export default App;

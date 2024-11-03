// import { useState } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
// import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import LandingPage from './Components/LandingPage';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import useUserData from './hooks/useUserDetails';
import Courses from './Components/Dashboard/Courses';

function App() {
  const { userDetails } = useUserData();

  return (
    <>
      <div className="pt-6">
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                userDetails ? <Navigate to="/dashboard" /> : <LandingPage />
              }
            />
            <Route
              path="/signup"
              element={userDetails ? <Navigate to="/dashboard" /> : <Signup />}
            />
            <Route
              path="/login"
              element={userDetails ? <Navigate to="/dashboard" /> : <Login />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/courses" element={<Courses />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

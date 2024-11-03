import React from 'react';
import {
  BrilliantIcon,
  CoursesIcon,
  HamburgerIcon,
  HomeIcon,
} from '../assets/icons';
import { Link } from 'react-router-dom';
import useUserData from '../hooks/useUserDetails';

const Header: React.FC = () => {
  const { userDetails } = useUserData();
  return (
    <div className="flex items-center justify-between border-b-2 px-10 h-14 pl-20 pr-20">
      {/* Logo */}
      <div className="flex justify-between gap-10">
        <Link to="/">
          <div className="flex items-center justify-center">
            <BrilliantIcon className="h-4" />
          </div>
        </Link>
        {userDetails && (
          <Link to="/dashboard">
            <div className="flex items-center justify-center gap-2">
              <HomeIcon className="h-4" />
              <span>Home</span>
            </div>
          </Link>
        )}
        {userDetails && (
          <Link to="/dashboard/courses">
            <div className="flex items-center justify-center gap-2">
              <CoursesIcon className="h-4" />
              <span>Courses</span>
            </div>
          </Link>
        )}
      </div>

      {/* Login Button */}
      {!userDetails && (
        <div>
          <Link to="/login">
            <button className="h-12 w-20 px-4 py-2 text-black bg-[#F4F4F4] hover:border-black border-2 border-opacity-50 rounded-full">
              Log in
            </button>
          </Link>
        </div>
      )}
      {userDetails && (
        <button className="hover: bg-[#E5E5E5]">
          <div className="hover: bg-[#E5E5E5]">
            <HamburgerIcon className="h-4" />
          </div>
        </button>
      )}
    </div>
  );
};

export default Header;

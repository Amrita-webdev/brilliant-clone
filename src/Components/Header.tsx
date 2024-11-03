import React, { useState } from 'react';
import {
  BrilliantIcon,
  CoursesIcon,
  HamburgerIcon,
  HomeIcon,
  LightningIcon,
} from '../assets/icons';
import { Link } from 'react-router-dom';
import useUserData from '../hooks/useUserDetails';
import { auth } from '../firebase';

const Header: React.FC = () => {
  const { userDetails } = useUserData();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogout: () => Promise<void> = async () => {
    try {
      await auth.signOut();
      window.location.href = '/login';
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between border-b-2 px-20 h-14 pb-4 shadow-md">
        {/* Logo */}
        <div className="flex justify-between gap-10">
          <Link to="/">
            <div className="flex items-center justify-center">
              <BrilliantIcon className={userDetails ? `h-6` : `h-8`} />
            </div>
          </Link>
          {userDetails && (
            <>
              <Link to="/dashboard">
                <div className="flex items-center justify-center gap-2">
                  <HomeIcon className="h-4" />
                  <span>Home</span>
                </div>
              </Link>
              <Link to="/dashboard/courses">
                <div className="flex items-center justify-center gap-2">
                  <CoursesIcon className="h-4" />
                  <span>Courses</span>
                </div>
              </Link>
            </>
          )}
        </div>

        {/* Login Button */}
        {!userDetails ? (
          <div>
            <Link to="/login">
              <button className="h-12 w-20 px-4 py-2 text-black bg-[#F4F4F4] hover:border-black border-2 border-opacity-50 rounded-full">
                Log in
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div className="">
              <form>
                <input
                  type="search"
                  placeholder="Search..."
                  className="rounded-lg border-2 border-gray-200 p-2"
                />
              </form>
            </div>
            <div>
              <button className="h-auto w-auto px-4 py-2 text-green-700 border-green-700 border-2 hover:shadow-md rounded-full">
                <span className="text-md font-medium">Gift Premium</span>
              </button>
            </div>
            <div className="flex items-center grow jusitify-between">
              <span className="font-bold text-xl">1</span>
              <LightningIcon className="h-5 text-white" />
            </div>
            <button
              className="bg-white hover: bg-[#E5E5E5]"
              onClick={toggleMenu}
            >
              <div className="bg-white hover: bg-[#E5E5E5]">
                <HamburgerIcon className="h-4" />
              </div>
            </button>
          </div>
        )}
      </div>
      {/* Floating Menu */}
      {isMenuOpen && (
        <div className="absolute flex w-80 m-4 right-10 bg-[#F4F4F4] shadow-lg z-10 rounded-lg">
          <div className="flex flex-col p-4 w-full">
            <div className="border-b-2 border-gray-300 py-2">
              <div className="hover:bg-gray-200 py-2">
                <button>
                  <p>Account</p>
                </button>
              </div>
            </div>
            <div className="border-b-2 flex flex-col py-2">
              <div className="hover:bg-gray-200 py-2">
                <button>
                  <p>Testimonials</p>
                </button>
              </div>
              <div className="hover:bg-gray-200 py-2">
                <button>
                  <p>Help</p>
                </button>
              </div>
            </div>
            <div className="py-2">
              <div className="hover:bg-gray-200 py-2">
                <button onClick={handleLogout}>
                  <p>Logout</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

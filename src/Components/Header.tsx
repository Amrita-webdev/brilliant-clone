import React from 'react';
import { BrilliantIcon } from '../assets/icons';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-10 h-16 pl-20 pr-20">
      {/* Logo */}
      <Link to="/">
        <div className="">
          <BrilliantIcon className="h-8" />
        </div>
      </Link>

      {/* Login Button */}
      <div>
        <Link to="/signup">
          <button className="h-12 w-20 px-4 py-2 text-black bg-#F4F4F4 hover:border-black border-2 border-opacity-50 rounded-full">
            Log in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

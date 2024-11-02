import React from 'react';
import { BrilliantIcon } from '../assets/icons';

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between pl-16 pr-16">
      {/* Logo */}
      <div className="">
        <BrilliantIcon className="h-8" />
      </div>

      {/* Login Button */}
      <div>
        <button className="h-12 w-20 px-4 py-2 text-black bg-#F4F4F4 hover:border-black border-2 border-opacity-50 rounded-full">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Header;

import React from 'react';

const LandingPage: React.FC = () => {
  return (
  <>
    <div className="flex h-screen pl-16 pr-16 items-center">
        {/* Text Section */}
        <div className="flex items-center justify-start w-1/2">
            <div className="flex flex-col gap-y-6 max-w-lg">
            <h2 className="text-6xl font-medium font-serif">
                Learn by <span className="text-blue-500">doing</span>
            </h2>
            <p className="text-lg">
                Guided interactive problem solving that’s effective and fun. Master concepts in 15 minutes a day.
            </p>
            <button className="w-64 h-16 rounded-full bg-green-500 text-white hover:bg-green-400">
                Get started
            </button>
            </div>
        </div>

        {/* Image Section */}
        <div className="flex w-1/2 border-black border-2 rounded-lg h-2/4">
            <img
            src="https://brilliant.org/images/homepage/learn-by-doing.png"
            alt="ipad-view"
            className=""
            />
        </div>
    </div>

  </>
  );
};

export default LandingPage;

import React from 'react';
import {
  ComputerScienceIcon,
  DataAnalysisIcon,
  MathIcon,
  ProgrammingAndAIIcon,
  ScienceAndEngineeringIcon,
} from '../assets/icons';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  return (
    <>
      <div className="pb-10">
        <div className="flex h-[80vh] pl-20 pr-20 items-center">
          {/* Text Section */}
          <div className="flex items-center justify-start w-1/2">
            <div className="flex flex-col gap-y-6 max-w-lg">
              <h2 className="text-6xl font-medium font-serif">
                Learn by <span className="text-blue-500">doing</span>
              </h2>
              <p className="text-lg">
                Guided interactive problem solving that’s effective and fun.
                Master concepts in 15 minutes a day.
              </p>
              <div>
                <div>
                    <svg width="134" height="100%" viewBox="0 0 134 56" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M71.238 56 103.57 0h30.022L101.26 56H71.238ZM.801 56 33.133 0h58.89L59.69 56H.801Z" fill="#fff"></path></svg>
                </div>
                <button className="w-64 h-16 rounded-full bg-green-500 text-white border-b-4 border-green-600 hover:bg-green-400">
                    Get started
                </button>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex flex-col pt-4 w-1/2 border-black border-2 border-r-8 border-b-8 rounded-2xl h-3/4">
            <div className="p-2 h-8 border-grey border-b w-full flex items-center justify-center gap-8">
              <div className="bg-gray-300 h-1 w-[400px] rounded-full">
                <div className="bg-green-500 rounded-full h-1 w-[320px]"></div>
              </div>
              <div>
                <p className="font-semibold text-green-500">80</p>
              </div>
            </div>
            <div className="pb-8">
              <img
                src="https://brilliant.org/videos/homepage/courses/posters/foundational-math.png"
                alt="ipad-view"
                className="object-contain"
              />
            </div>
          </div>
        </div>
        {/* Icons */}
        <div className="flex items-center justify-between pl-20 pr-20 h-20 w-full">
          <div className="flex items-center justify-between gap-2">
            <MathIcon className="h-6" />
            <p>Math</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <DataAnalysisIcon className="h-6" />
            <p>Data Analysis</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <ComputerScienceIcon className="h-6" />
            <p>Computer Science</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <ProgrammingAndAIIcon className="h-6" />
            <p>Programming & AI</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <ScienceAndEngineeringIcon className="h-6" />
            <p>Science & Engineering</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;

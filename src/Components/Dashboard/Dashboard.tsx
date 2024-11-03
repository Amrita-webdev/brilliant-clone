import React from 'react';
import useUserData from '../../hooks/useUserDetails';
import { courses } from '../../courses';
import { BatteryIcon, LightningIcon } from '../../assets/icons';
import { Loader, RecommendedCourseCard } from '../../assets/components';

const Dashboard: React.FC = () => {
  const { userDetails } = useUserData();

  if (!userDetails) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader size={`h-20 w-20`} />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-10 bg-gray">
        <div className="flex gap-20 justify-around ">
          {/* Left */}
          <div className="w-1/3 flex gap-y-4 flex-col">
            <p className="text-xl font-bold pb-2">
              Welcome, {userDetails?.firstName}
            </p>
            <div className="w-[428px] h-auto rounded-xl border-2 border-gray-300 bg-[#FFFFFF]">
              <div className="p-[0.75rem]">
                <div className="flex items-center grow jusitify-between">
                  <span className="font-bold text-5xl">1</span>
                  <LightningIcon className="h-10 text-white" />
                </div>
                <h2 className="grow">
                  Solve <span className="font-bold">3 problems</span> to
                  continue your streak
                </h2>
                {/* Days */}
                <div className="flex grow items-center justify-between">
                  <div className="flex flex-col">
                    <div className="bg-lime-300 rounded-full w-12 h-12 flex items-center justify-center border border-gray-200">
                      <LightningIcon className="h-10" />
                    </div>
                    <span className="font-bold text-xl text-center">Tu</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="rounded-full w-12 h-12 flex items-center justify-center border border-gray-200">
                      <LightningIcon className="h-10" />
                    </div>
                    <span className="text-gray-300 text-xl text-center">W</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="rounded-full w-12 h-12 flex items-center justify-center border border-gray-200">
                      <LightningIcon className="h-10" />
                    </div>
                    <span className="text-gray-300 text-xl text-center">T</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="rounded-full w-12 h-12 flex items-center justify-center border border-gray-200">
                      <LightningIcon className="h-10" />
                    </div>
                    <span className="text-gray-300 text-xl text-center">F</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="rounded-full w-12 h-12 flex items-center justify-center border border-gray-200">
                      <LightningIcon className="h-10" />
                    </div>
                    <span className="text-gray-300 text-xl text-center">S</span>
                  </div>
                  {/* Battery */}
                  <div className="flex flex-col items-center">
                    <BatteryIcon className="h-5 rotate-90" />
                    <BatteryIcon className="h-5 rotate-90" />
                  </div>
                </div>
              </div>
            </div>
            {/* Unlock Leagues */}
            <div className="w-[428px] flex p-4 h-auto rounded-xl border-2 border-gray-300 flex items-center gap-4">
              <div className="">
                <img
                  src="https://brilliant.org/cdn-cgi/image/width=128,quality=75,format=auto/images/loggedInHomepage/leagues-locked.svg"
                  alt="unlockLeagues"
                />
              </div>
              <div>
                <p className="font-bold text-xs">UNLOCK LEAGUES</p>
                <p className="text-gray-500">70 of 175 XP</p>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="w-2/3 flex gap-y-4 flex-col">
            <p className="text-xl font-bold pb-2">Start Learning</p>
            {/* Card top */}
            <div className="w-[572px] h-auto rounded-xl border-2 border-gray-300 p-4">
              <div className="h-2/3">
                <svg
                  viewBox="0 0 593 209"
                  focusable="false"
                  preserveAspectRatio="none"
                >
                  <g clip-path="url(#:rbj:)">
                    <path
                      d="M-105.109 79H0.810913L144.988 146.5H699.028V209H-105.109V79Z"
                      fill="#F5EFFF"
                    ></path>
                    <path
                      d="M699.047 89H593.239L449.216 160.566L-106.045 160.566V209L699.047 209V89Z"
                      fill="#EBE0FF"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id=":rbj:">
                      <rect width="593" height="209" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="h-1/3 flex items-center gap-2 flex-col justify-center pt-2">
                <span className="text-yellow-700 font-bold text-xs underline decoration-yellow-700">
                  SCIENCE: LEVEL 1
                </span>
                <h3 className="font-bold text-2xl">Scientific Thinking</h3>
                <button
                  type="submit"
                  className="w-full h-16 flex items-center justify-center rounded-full bg-slate-800 text-white border-2 border-b-4 border-black"
                >
                  Continue path
                </button>
              </div>
            </div>
            {/* Recommended for you */}
            <p className="text-xl font-bold pb-2">Recommended for you</p>
            <div className="flex gap-6 w-[572px] flex-wrap">
              {courses.slice(0, 4).map((course, index) => (
                <RecommendedCourseCard
                  key={index}
                  title={course.title}
                  image={course.image}
                  category={course.category}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

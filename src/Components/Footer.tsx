import React from 'react';
import { BestAppIcon, FiveStarIcon } from '../assets/icons';

const Footer: React.FC = () => {
  return (
    <div className="h-60 bg-gray-300 flex flex-col items-center justify-center pt-10">
      <div>
        <p className="font-bold text-xl">
          Join over 10 million people learning on Brilliant
        </p>
      </div>
      {/* News Paper section */}
      <div className="flex items-center w-full justify-around pl-10 pr-10 pt-10">
        <div className="grow flex items-center justify-center w-20 flex gap-4">
          <img
            alt="newYorkTimes"
            className="h-6"
            src="https://brilliant.org/images/paywall/new-york-times.png"
          />
          <img
            alt="theAtlantic"
            className="h-4"
            src="https://brilliant.org/images/paywall/the-atlantic-long.png"
          />
        </div>
        <div className=" w-20 grow flex flex-col items-center justify-start">
          <FiveStarIcon className="h-8" />
          <p className="text-xs">Over 50,000 5-star app reviews</p>
        </div>
        {/* <div className="w-20">Trustpilot Section</div> */}
        <div className="flex grow items-center justify-center gap-4">
          {/* <EditorsChoiceIcon className="h-8 w-8"/> */}
          <BestAppIcon className="h-10" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from 'react';
import { FacebookIcon, GoogleIcon } from './icons';

interface LoaderProps {
  size: string;
}
const Loader: React.FC<LoaderProps> = ({ size }) => {
  return (
    <div
      className={`animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500 ${size}`}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

interface CourseCardProps {
  isNew: boolean;
  title: string;
  image: string;
}

interface RecommendedCourseCardProps {
  title: string;
  image: string;
  category: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ isNew, title, image }) => {
  return (
    <>
      <div className="flex flex-col gap-4 w-48 h-48 rounded-xl border-2 border-b-4 border-slate-200 relative">
        {isNew && (
          <div className="text-xs text-white absolute top-2 right-2 p-[0.25rem] rounded-lg bg-green-500 w-[49px] h-[20px] font-semibold flex items-center justify-center">
            <span>NEW</span>
          </div>
        )}
        <div className="flex flex-col items-center justify-end p-10">
          <img alt={title} src={image} className="w-[102px] h-[102px]" />
        </div>
        <p className="text-center">{title}</p>
      </div>
    </>
  );
};

const RecommendedCourseCard: React.FC<RecommendedCourseCardProps> = ({
  title,
  image,
  category,
}) => {
  return (
    <>
      <div className="w-40 h-auto rounded-xl border-2 border-b-4 border-slate-200 hover:border-slate-300 cursor-pointer relative pt-10 px-4 pb-8">
        <div className="flex flex-col gap-4 items-center justify-end">
          <img alt={title} src={image} className="w-[102px] h-[102px]" />
          <p className="text-center text-xs text-blue-700 font-bold">{title}</p>
          <p className="text-center text-md font-bold">{category}</p>
        </div>
      </div>
    </>
  );
};

const GoogleAuthButton: React.FC = () => {
  return (
    <button className="w-60 h-16 flex items-center justify-center rounded-full bg-white text-white border-2 border-b-4 border-gray-200">
      <GoogleIcon className="h-6" />
    </button>
  );
};

const FacebookAuthButton: React.FC = () => {
  return (
    <button className="w-60 h-16 flex items-center justify-center rounded-full bg-white text-white border-2 border-b-4 border-gray-200">
      <FacebookIcon className="h-6" />
    </button>
  );
};

export {
  Loader,
  CourseCard,
  RecommendedCourseCard,
  GoogleAuthButton,
  FacebookAuthButton,
};

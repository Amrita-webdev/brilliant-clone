import React from 'react';
import { courses } from '../../courses';
import { CourseCard } from '../../assets/components';

const Courses: React.FC = () => {
  return (
    <div className="flex items-center px-20 pt-10 bg-gray">
      <div className="flex gap-10 flex-col justify-start w-screen">
        <div>
          <div className="">
            <p className="text-xl text-left font-bold pb-2">
              Browse all 70+ courses
            </p>
            <div className="">
              <form>
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full rounded-full border-2 border-gray-200 p-2"
                />
              </form>
            </div>
          </div>
        </div>
        {/* Filter chips */}
        <div>
          <div className="flex gap-4">
            <button className="h-auto w-auto px-4 py-2 font-medium text-black border-black border-2 rounded-full">
              New courses
            </button>
            <button className="h-12 w-auto px-4 py-2 font-medium text-black border-gray-300 border-2 rounded-full">
              Math
            </button>
            <button className="h-12 w-auto px-4 py-2 font-medium text-black border-gray-300 border-2 rounded-full">
              Data
            </button>
            <button className="h-12 w-auto px-4 py-2 font-medium text-black border-gray-300 border-2 rounded-full">
              Computer Science
            </button>
            <button className="h-12 w-auto px-4 py-2 font-medium text-black border-gray-300 border-2 rounded-full">
              Science
            </button>
          </div>
        </div>
        <div>
          <p className="text-xl text-left font-bold pb-2">New Courses</p>
          <div className="flex flex-wrap gap-8">
            {courses.map((course, index) => (
              <div className="py-8" key={index}>
                <CourseCard
                  key={index}
                  isNew={course?.isNew}
                  title={course.title}
                  image={course.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

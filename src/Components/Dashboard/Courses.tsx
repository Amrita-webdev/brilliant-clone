import React from 'react';
import { courses } from '../../courses';
import { CourseCard } from '../../assets/components';

const Courses: React.FC = () => {
  return (
    <>
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          isNew={course?.isNew}
          title={course.title}
          image={course.image}
        />
      ))}
    </>
  );
};

export default Courses;

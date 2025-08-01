import React from 'react';

const CourseDetails = ({ courses }) => {
  return (
    <div>
      <h2>🎓 Course List</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course.name} - {course.instructor}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;

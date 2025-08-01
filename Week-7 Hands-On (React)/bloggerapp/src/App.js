import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [activeView, setActiveView] = useState("books");

  const books = [
    { name: "React for Beginners", author: "John Smith" },
    { name: "Advanced JavaScript", author: "Jane Doe" }
  ];

  const blogs = [
    { title: "React Hooks Deep Dive", category: "React" },
    { title: "JS Tips", category: "JavaScript" }
  ];

  const courses = [
    { name: "Full Stack Development", instructor: "Mr. A" },
    { name: "Frontend Mastery", instructor: "Ms. B" }
  ];

  // Element variable example
  let content = null;
  if (activeView === "books") {
    content = <BookDetails books={books} />;
  } else if (activeView === "blogs") {
    content = <BlogDetails blogs={blogs} />;
  } else if (activeView === "courses") {
    content = <CourseDetails courses={courses} />;
  }

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>📖 Blogger App</h1>

      <div>
        <button onClick={() => setActiveView("books")}>Show Books</button>
        <button onClick={() => setActiveView("blogs")}>Show Blogs</button>
        <button onClick={() => setActiveView("courses")}>Show Courses</button>
      </div>

      <hr />

      {/* Conditional rendering using element variable */}
      {content}

      {/* AND operator rendering */}
      {activeView === "blogs" && <p>You're currently viewing blog posts!</p>}

      {/* Ternary operator rendering */}
      <p>
        {activeView === "books"
          ? "You're viewing book details."
          : activeView === "courses"
          ? "You're viewing course info."
          : "You're viewing blog details."}
      </p>
    </div>
  );
}

export default App;

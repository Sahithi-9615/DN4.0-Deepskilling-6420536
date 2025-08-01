import React from 'react';

const BlogDetails = ({ blogs }) => {
  return (
    <div>
      <h2>📝 Blog Posts</h2>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index}>{blog.title} - {blog.category}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;

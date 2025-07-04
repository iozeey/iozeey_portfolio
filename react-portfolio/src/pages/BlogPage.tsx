import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogIndex from '../components/BlogIndex';

const BlogPage: React.FC = () => {
  return (
    <div className="blog-container">
      <Routes>
        <Route path="/" element={<BlogIndex />} />
        <Route path="/*" element={<div>Blog post not found</div>} />
      </Routes>
    </div>
  );
};

export default BlogPage;

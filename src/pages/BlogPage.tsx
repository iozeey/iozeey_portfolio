import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogIndex from '../components/BlogIndex';
import BlogPost from '../components/BlogPost';

const BlogPage: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BlogIndex />} />
        <Route path=":category/:slug" element={<BlogPost />} />
        <Route path="*" element={<div>Blog post not found</div>} />
      </Routes>
    </div>
  );
};

export default BlogPage;

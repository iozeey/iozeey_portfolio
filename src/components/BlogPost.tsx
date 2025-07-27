import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost: React.FC = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const [content, setContent] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!category || !slug) {
      setError('Invalid post path');
      return;
    }
    const path = `/blog/${category}/${slug}.html`;
    fetch(path)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`Failed to load post: ${res.status}`);
        }
        const html = await res.text();
        setContent(html);
      })
      .catch((err) => {
        console.error(err);
        setError('Unable to load the blog post.');
      });
  }, [category, slug]);

  if (error) {
    return <div className="container"><h2>{error}</h2></div>;
  }

  return (
    <div className="container">
      <article
        className="blog-post"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default BlogPost;

import React, { useEffect } from 'react';

const BlogIndex: React.FC = () => {
  const blogLinks = [
    { href: '/blog/react/', title: 'React' },
    { href: '/blog/redux/', title: 'Redux' },
    { href: '/blog/typescript/', title: 'Typescript' },
    { href: '/blog/javascript/', title: 'JavaScript' },
    { href: '/blog/docker/configure-docker-in-mac.html', title: 'Docker' },
    { href: '/blog/ai/ai-ml-notes.html', title: 'AI & ML Notes' },
    { href: '/blog/nginx/', title: 'Nginx' },
    { href: '/blog/tech-guides/convert-webm-to-mp4-with-ffmpeg.html', title: 'Webm to mp4 via ffmpeg' },
    { href: '#', title: 'Python - Django - Todo' },
    { href: '#', title: 'Ruby on Rails - Todo' }
  ];

  useEffect(() => {
    // Load blog template script
    const script = document.createElement('script');
    script.src = '/theme/blog-template.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  const toggleDarkMode = () => {
    // This function will be available from the loaded script
    if ((window as any).toggleDarkMode) {
      (window as any).toggleDarkMode();
    }
  };

  return (
    <div>
      <button onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
      <div>
        <h1>Blog</h1>
        <ul>
          {blogLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogIndex;

import React, { useEffect } from 'react';

const BlogIndex: React.FC = () => {
  interface Post { slug: string; title: string; }
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [errorLoading, setErrorLoading] = React.useState<string>('');
  const [currentPage, setCurrentPage] = React.useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    // Load blog template script and fetch posts.json
    const script = document.createElement('script');
    script.src = '/theme/blog-template.js';
    script.async = true;
    document.body.appendChild(script);
    fetch('/blog/posts.json')
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load posts.json: ${res.status}`);
        return res.json();
      })
      .then((data: Post[]) => setPosts(data))
      .catch(err => setErrorLoading(err.message))
      .finally(() => setLoading(false));

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

  // Calculate paginated posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div>
      <button onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
      <div>
        <h1>Blog</h1>
        {loading ? (
          <p>Loading posts...</p>
        ) : errorLoading ? (
          <p>Error: {errorLoading}</p>
        ) : (
          <>  {/* Blog list and pagination */}
            <ul>
              {currentPosts.map((post) => (
                <li key={post.slug}>
                  <a href={`/blog/${post.slug}`}>{post.title}</a>
                </li>
              ))}
            </ul>
            {totalPages > 1 && (
              <div className="pagination" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
                  Prev
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    style={{ fontWeight: pageNum === currentPage ? 'bold' : 'normal' }}
                  >
                    {pageNum}
                  </button>
                ))}
                <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BlogIndex;

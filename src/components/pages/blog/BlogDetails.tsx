import { useSuspenseQuery } from '@tanstack/react-query';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { fetchAllPostQuery } from '../../../services/posts/postsQuery';
import './blog.css';

export default function BlogDetails() {
  const { limit } = useSearch({ from: '/blog/' });
  const { data: posts } = useSuspenseQuery(fetchAllPostQuery({ limit }));
  const navigate = useNavigate();

  return (
    <>
      <div className='blog-container'>
        <h1 className='blog-title'>Random Blog Posts</h1>
        <div className='blog-grid'>
          {posts.length > 0 ? (
            posts.map((post) => (
              <div
                className='blog-card'
                key={post.id}
                onClick={() =>
                  navigate({ to: '/blog/$blogId', params: { blogId: post.id } })
                }
                tabIndex={0}
                role='button'
                onKeyDown={(e) => {
                  if (e.key === 'Enter')
                    navigate({
                      to: '/blog/$blogId',
                      params: { blogId: post.id },
                    });
                }}
              >
                <div className='blog-card-title'>{post.title}</div>
                <div className='blog-card-body'>{post.body}</div>
                <div className='blog-card-footer'>
                  <span className='blog-card-user'>User #{post.userId}</span>
                </div>
              </div>
            ))
          ) : (
            <div>No posts found.</div>
          )}
        </div>
      </div>
    </>
  );
}

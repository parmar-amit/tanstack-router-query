import { Link, useLoaderData } from '@tanstack/react-router';
import './blog.css';

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type LoaderData = {
  posts: Post[];
};

export default function BlogDetails() {
  const { posts } = useLoaderData({ from: '/blog/' }) satisfies LoaderData;

  return (
    <div className='blog-container'>
      <h1 className='blog-title'>Random Blog Posts</h1>
      <div className='blog-grid'>
        {posts.map((post) => (
          <div className='blog-card' key={post.id}>
            <Link to={'/blog/$blogId'} params={{ blogId: post.id }}>
              <div className='blog-card-title'>{post.title}</div>
              <div className='blog-card-body'>{post.body}</div>
              <div className='blog-card-footer'>
                <span className='blog-card-user'>User #{post.userId}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

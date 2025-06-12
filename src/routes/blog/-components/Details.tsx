import React, { useEffect, useState } from 'react';
import Loading from '../../../components/Loader/Loading';
import './blog.css';

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const Details: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Using JSONPlaceholder for random blog posts
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className='blog-container'>
      <h1 className='blog-title'>Random Blog Posts</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className='blog-grid'>
          {posts.map((post) => (
            <div className='blog-card' key={post.id}>
              <div className='blog-card-title'>{post.title}</div>
              <div className='blog-card-body'>{post.body}</div>
              <div className='blog-card-footer'>
                <span className='blog-card-user'>User #{post.userId}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Details;

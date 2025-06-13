import { useNavigate } from '@tanstack/react-router';
import React from 'react';

type BlogByIdProps = {
  title: string;
  body: string;
  userId: number;
};

const BlogById: React.FC<BlogByIdProps> = ({ body, title, userId }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className='blog-details-container'>
        <h1 className='blog-details-title'>{title}</h1>
        <p className='blog-details-body'>{body}</p>
        <p className='blog-details-user'>User ID: {userId}</p>
      </div>
      <div
        style={{
          position: 'fixed',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
        }}
      >
        <button
          onClick={() => navigate({ to: '..' })}
          style={{
            padding: '10px 24px',
            fontSize: '16px',
            borderRadius: '8px',
            border: 'none',
            background: '#007bff',
            color: '#fff',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          Go Back
        </button>
      </div>
    </>
  );
};

export default BlogById;

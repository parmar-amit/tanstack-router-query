import { useNavigate } from '@tanstack/react-router';
import React from 'react';
import './not-found.css';

interface NotFoundProps {
  message?: string;
}
const NotFound: React.FC<NotFoundProps> = ({ message = '' }) => {
  const navigate = useNavigate();
  return (
    <div className='not-found-container'>
      <div className='not-found-title'>404</div>
      <div className='not-found-message'>
        {message ? message : `Oops! The page you're looking for doesn't exist.`}
      </div>
      <button
        onClick={() => navigate({ to: '/' })}
        className='not-found-home-link'
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;

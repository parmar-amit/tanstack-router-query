import React from 'react';

const NotFound: React.FC = () => (
  <div className='not-found-container'>
    <style>
      {`
                .not-found-container {
                    min-height: 80vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%);
                    color: #2d3748;
                    font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
                }
                .not-found-title {
                    font-size: 5rem;
                    font-weight: bold;
                    letter-spacing: 0.1em;
                    color: #3182ce;
                    margin-bottom: 0.5rem;
                }
                .not-found-message {
                    font-size: 1.5rem;
                    margin-bottom: 1.5rem;
                }
                .not-found-home-link {
                    display: inline-block;
                    padding: 0.75rem 2rem;
                    background: #3182ce;
                    color: #fff;
                    border-radius: 2rem;
                    text-decoration: none;
                    font-weight: 500;
                    box-shadow: 0 2px 8px rgba(49,130,206,0.1);
                    transition: background 0.2s;
                }
                .not-found-home-link:hover {
                    background: #2563eb;
                }
            `}
    </style>
    <div className='not-found-title'>404</div>
    <div className='not-found-message'>
      Oops! The page you're looking for doesn't exist.
    </div>
    <a href='/' className='not-found-home-link'>
      Go Home
    </a>
  </div>
);

export default NotFound;

import React from 'react';

const Loading: React.FC = () => (
  <div className='loading-container'>
    <style>
      {`
        .loading-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 60vh;
          background: #f9f9f9;
        }
        .pulse-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          animation: pulse 1s ease-in-out infinite;
        }
        .spinner {
          width: 100px;
          height: 100px;
          border: 10px solid #e0e0e0;
          border-top: 10px solid #3498db;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
      `}
    </style>
    <div className='pulse-wrapper'>
      <div className='spinner' />
    </div>
  </div>
);

export default Loading;

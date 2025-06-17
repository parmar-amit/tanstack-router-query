import React from 'react';
import './Loading.css';

const Loading: React.FC = () => (
  <div className='loading-container'>
    <div className='pulse-wrapper'>
      <div className='spinner' />
    </div>
  </div>
);

export default Loading;

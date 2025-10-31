import React from 'react';

function ProgressBar({ completed, total }) {
  const progress = Math.round((completed / total) * 100);
  return (
    <div className="progress-bar">
      <div style={{
        width: progress + '%',
        background: 'green',
        height: '10px',
        borderRadius: '5px'
      }}></div>
      <span>{progress}% Complete</span>
    </div>
  );
}

export default ProgressBar;

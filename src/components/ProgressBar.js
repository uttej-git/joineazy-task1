import React from 'react';

function ProgressBar({ completed, total }) {
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="progress w-100 mb-4" style={{ height: '1.25rem', minWidth: 0 }}>
      <div
        className="progress-bar bg-success"
        role="progressbar"
        style={{ width: `${progress}%` }}
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {progress}% Complete
      </div>
    </div>
  );
}

export default ProgressBar;

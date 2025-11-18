
import React from 'react';

const Spinner: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={`animate-spin rounded-full h-6 w-6 border-b-2 border-white ${className}`}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;

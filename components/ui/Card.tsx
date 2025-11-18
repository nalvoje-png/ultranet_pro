
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-slate-800 rounded-xl shadow-xl p-6 md:p-8 transition-colors hover:bg-slate-700 border border-slate-700 ${className}`}>
      {children}
    </div>
  );
};

export default Card;

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, id, ...props }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-1">
        {label}
      </label>
      <input
        id={id}
        className="w-full px-4 py-2 border border-slate-600 rounded-lg bg-slate-700 text-white focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition"
        {...props}
      />
    </div>
  );
};

export default Input;
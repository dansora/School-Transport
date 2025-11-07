
import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, icon: Icon, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 m-2 md:m-4 ${className}`}>
      <div className="flex items-center mb-3">
        {Icon && <Icon className="h-6 w-6 mr-3 text-sky-600" />}
        <h3 className="text-lg font-bold text-slate-800">{title}</h3>
      </div>
      <div className="text-slate-600 space-y-2">
        {children}
      </div>
    </div>
  );
};

export default Card;

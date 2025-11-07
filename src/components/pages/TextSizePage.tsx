import React from 'react';
import type { Page } from '../../types';
import Card from '../ui/Card';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

type TextSize = 'sm' | 'base' | 'lg';

interface TextSizePageProps {
  currentSize: TextSize;
  onSizeChange: (size: TextSize) => void;
  onNavigate: (page: Page) => void;
}

const TextSizePage: React.FC<TextSizePageProps> = ({ currentSize, onSizeChange, onNavigate }) => {
  const options: { id: TextSize; label: string }[] = [
    { id: 'sm', label: 'Small' },
    { id: 'base', label: 'Medium' },
    { id: 'lg', label: 'Large' },
  ];

  return (
    <div className="p-2">
       <div className="flex items-center px-4 pt-4">
            <button onClick={() => onNavigate('settings')} className="p-2 mr-2 -ml-2 rounded-full hover:bg-slate-200">
                <ArrowLeftIcon className="h-6 w-6 text-slate-800" />
            </button>
            <h2 className="text-2xl font-bold text-slate-900">Text Size</h2>
        </div>

      <Card title="Adjust Text Size">
        <div className="flex justify-around items-center p-4">
            <span className="text-sm">A</span>
            <span className="text-base">A</span>
            <span className="text-lg">A</span>
        </div>
        <div className="flex justify-between space-x-2">
          {options.map(option => (
            <button
              key={option.id}
              onClick={() => onSizeChange(option.id)}
              className={`w-full font-bold py-2 px-4 rounded-lg transition-colors ${
                currentSize === option.id 
                  ? 'bg-sky-600 text-white' 
                  : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        <p className="text-center mt-4 text-slate-500">
            This setting adjusts the text size across the entire application for better readability.
        </p>
      </Card>
    </div>
  );
};

export default TextSizePage;

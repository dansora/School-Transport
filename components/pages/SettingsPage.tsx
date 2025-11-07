
import React from 'react';
import type { Page } from '../../types';
import Card from '../ui/Card';
import { ChevronRightIcon, DocumentTextIcon, LockClosedIcon, ScaleIcon, UserGroupIcon } from '@heroicons/react/24/outline';

interface SettingsPageProps {
  onNavigate: (page: Page) => void;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ onNavigate }) => {
  const settingsOptions: { id: Page; label: string; icon: React.ElementType }[] = [
    { id: 'settings/text-size', label: 'Text Size', icon: ScaleIcon },
    { id: 'settings/contacts', label: 'Contact Directory', icon: UserGroupIcon },
    { id: 'settings/terms', label: 'Terms & Conditions', icon: DocumentTextIcon },
    { id: 'settings/privacy', label: 'Privacy Policy', icon: LockClosedIcon },
  ];

  return (
    <div className="p-2">
      <h2 className="text-2xl font-bold text-slate-900 px-4 pt-4">Settings</h2>
      <Card title="Application Settings">
        <ul className="divide-y divide-slate-200">
          {settingsOptions.map(option => (
            <li 
              key={option.id} 
              onClick={() => onNavigate(option.id)}
              className="py-3 flex justify-between items-center cursor-pointer hover:bg-slate-50 rounded-md -mx-4 px-4"
            >
                <div className="flex items-center">
                    <option.icon className="h-6 w-6 mr-4 text-slate-500" />
                    <span className="font-semibold">{option.label}</span>
                </div>
                <ChevronRightIcon className="h-5 w-5 text-slate-400" />
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default SettingsPage;

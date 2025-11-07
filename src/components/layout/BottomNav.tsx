
import React from 'react';
import type { Page } from '../../types';
import { HomeIcon, UserCircleIcon, MegaphoneIcon, Cog6ToothIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid';

interface BottomNavProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activePage, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'profile', label: 'Profile', icon: UserCircleIcon },
    { id: 'announcements', label: 'Alerts', icon: MegaphoneIcon },
    { id: 'settings', label: 'Settings', icon: Cog6ToothIcon },
    { id: 'feedback', label: 'Feedback', icon: ChatBubbleBottomCenterTextIcon },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-sky-200 border-t border-sky-300 shadow-t-lg z-10">
      <div className="flex justify-around max-w-screen-md mx-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id as Page)}
            className={`flex flex-col items-center justify-center w-full pt-2 pb-1 text-center transition-colors duration-200 ${
              activePage === item.id ? 'text-sky-800' : 'text-slate-600 hover:text-sky-700'
            }`}
          >
            <item.icon className="h-6 w-6" />
            <span className="text-xs font-medium mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;

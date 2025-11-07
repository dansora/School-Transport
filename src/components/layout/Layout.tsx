
import React from 'react';
import type { User, Page } from '../../types';
import Header from './Header';
import BottomNav from './BottomNav';

interface LayoutProps {
  children: React.ReactNode;
  user: User;
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, user, activePage, onNavigate }) => {
  return (
    <div className="flex flex-col h-screen font-sans bg-teal-50 text-slate-800">
      <Header user={user} />
      <main className="flex-grow overflow-y-auto pb-20">
        {children}
      </main>
      <BottomNav activePage={activePage} onNavigate={onNavigate} />
    </div>
  );
};

export default Layout;

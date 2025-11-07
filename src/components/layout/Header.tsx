
import React from 'react';
import type { User } from '../../types';
import Logo from '../ui/Logo';

interface HeaderProps {
  user: User;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="bg-sky-200 shadow-md p-4 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center space-x-3">
        <Logo className="h-10 w-10 text-sky-700" />
        <h1 className="text-xl md:text-2xl font-bold text-slate-900">School Transport UK</h1>
      </div>
      <div className="text-right">
        <p className="text-sm text-slate-700">Welcome,</p>
        <p className="font-semibold text-slate-900">{user.name}</p>
      </div>
    </header>
  );
};

export default Header;

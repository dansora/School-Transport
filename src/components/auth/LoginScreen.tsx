import React, { useState } from 'react';
import type { User } from '../../types';
import Logo from '../ui/Logo';
import {
  Cog8ToothIcon,
  BuildingLibraryIcon,
  BriefcaseIcon,
  UserCircleIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/solid';

interface LoginScreenProps {
  users: User[];
  onLogin: (user: User) => void;
  onViewLegal: (page: 'terms' | 'privacy') => void;
}

const roleInfo: { [key in User['role']]: { name: string; icon: React.ElementType } } = {
  SYSTEM_ADMIN: { name: 'System Admin', icon: WrenchScrewdriverIcon },
  CONTRACT_ADMIN: { name: 'Contract Admin', icon: BuildingLibraryIcon },
  OPERATOR: { name: 'Operator', icon: BriefcaseIcon },
  DRIVER: { name: 'Driver', icon: UserCircleIcon }, // Using a generic user icon for driver
  ASSISTANT: { name: 'Assistant', icon: UserGroupIcon },
  USER: { name: 'Parent/User', icon: UserCircleIcon },
};

const LoginScreen: React.FC<LoginScreenProps> = ({ users, onLogin, onViewLegal }) => {
  const [hasConsented, setHasConsented] = useState(false);

  return (
    <div className="min-h-screen bg-cyan-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-2xl p-6 sm:p-8">
        <div className="flex flex-col items-center mb-6">
          <Logo className="h-12 w-12 text-sky-700" />
          <h1 className="text-3xl font-bold text-slate-900 mt-4">School Transport App</h1>
          <p className="text-slate-500 mt-2 text-center">Select your role to begin</p>
        </div>
        
        <div className="space-y-3">
          {users.map((user) => {
            // FIX: Component variables must be capitalized for JSX to recognize them.
            const Icon = roleInfo[user.role].icon;
            return (
              <button
                key={user.id}
                onClick={() => onLogin(user)}
                disabled={!hasConsented}
                className="w-full text-left p-3 bg-slate-50 hover:bg-sky-100 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 flex items-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-slate-50"
              >
                <div className="w-1/3 flex justify-center items-center pr-3">
                  <div className="p-3 bg-sky-100 rounded-full">
                    <Icon className="h-8 w-8 text-sky-700" />
                  </div>
                </div>
                <div className="w-2/3">
                  <p className="font-bold text-slate-800">{roleInfo[user.role].name}</p>
                  <p className="text-sm text-slate-600">{user.name}</p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-6 pt-6 border-t border-slate-200">
          <div className="flex items-start">
            <input
              id="consent-checkbox"
              type="checkbox"
              checked={hasConsented}
              onChange={(e) => setHasConsented(e.target.checked)}
              className="h-5 w-5 rounded border-gray-300 text-sky-600 focus:ring-sky-500 mt-0.5"
            />
            <label htmlFor="consent-checkbox" className="ml-3 text-sm text-slate-600">
              I have read and agree to the{' '}
              <button onClick={() => onViewLegal('terms')} className="font-medium text-sky-600 hover:underline">
                Terms & Conditions
              </button>{' '}
              and the{' '}
              <button onClick={() => onViewLegal('privacy')} className="font-medium text-sky-600 hover:underline">
                Privacy Policy
              </button>.
            </label>
          </div>
          {!hasConsented && (
              <p className="text-xs text-red-600 mt-2 text-center font-semibold">
                  You must accept the terms to continue.
              </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
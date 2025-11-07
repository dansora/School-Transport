
import React from 'react';
import type { User } from '../../types';
import Logo from '../ui/Logo';

interface LoginScreenProps {
  users: User[];
  onLogin: (user: User) => void;
}

const roleNames: { [key in User['role']]: string } = {
  SYSTEM_ADMIN: 'System Admin',
  CONTRACT_ADMIN: 'Contract Admin',
  OPERATOR: 'Operator',
  DRIVER: 'Driver',
  ASSISTANT: 'Assistant',
  USER: 'Parent/User',
};

const LoginScreen: React.FC<LoginScreenProps> = ({ users, onLogin }) => {
  return (
    <div className="min-h-screen bg-teal-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-2xl p-8">
        <div className="flex flex-col items-center mb-6">
          <Logo className="h-20 w-20 text-sky-700" />
          <h1 className="text-3xl font-bold text-slate-900 mt-4">School Transport UK</h1>
          <p className="text-slate-500 mt-2">Select a role to continue</p>
        </div>
        <div className="space-y-3">
          {users.map((user) => (
            <button
              key={user.id}
              onClick={() => onLogin(user)}
              className="w-full text-left p-4 bg-slate-100 hover:bg-sky-100 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <p className="font-bold text-slate-800">{roleNames[user.role]}</p>
              <p className="text-sm text-slate-600">{user.name}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;

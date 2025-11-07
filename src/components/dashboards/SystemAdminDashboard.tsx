
import React from 'react';
import type { User } from '../../types';
import Card from '../ui/Card';
import { CogIcon, UsersIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

interface SystemAdminDashboardProps {
  user: User;
}

const SystemAdminDashboard: React.FC<SystemAdminDashboardProps> = ({ user }) => {
  return (
    <div className="p-2">
        <h2 className="text-2xl font-bold text-slate-900 px-4 pt-4">System Administrator Dashboard</h2>
        <Card title="System Control" icon={CogIcon}>
            <p>You have full access to all application services and settings.</p>
            <button className="mt-2 w-full bg-sky-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-sky-700 transition-colors">
                Manage Services
            </button>
        </Card>
        <Card title="User Management" icon={UsersIcon}>
            <p>Oversee all user accounts across different roles and authorities.</p>
             <button className="mt-2 w-full bg-sky-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-sky-700 transition-colors">
                View All Users
            </button>
        </Card>
        <Card title="Security & Compliance" icon={ShieldCheckIcon}>
            <p>Ensure all operations comply with authority agreements and security protocols.</p>
            <button className="mt-2 w-full bg-slate-200 text-slate-800 font-bold py-2 px-4 rounded-lg hover:bg-slate-300 transition-colors">
                Audit Logs
            </button>
        </Card>
    </div>
  );
};

export default SystemAdminDashboard;

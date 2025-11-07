
import React from 'react';
import type { User } from '../../types';
import Card from '../ui/Card';
import { BriefcaseIcon, UserIcon, UsersIcon } from '@heroicons/react/24/outline';

interface OperatorDashboardProps {
  user: User;
}

const OperatorDashboard: React.FC<OperatorDashboardProps> = ({ user }) => {
  const { contracts, drivers, assistants } = user.data;

  return (
    <div className="p-2">
      <h2 className="text-2xl font-bold text-slate-900 px-4 pt-4">Operator Dashboard</h2>
      <p className="text-slate-600 px-4 mb-2">{user.company}</p>

      <Card title="Assigned Contracts" icon={BriefcaseIcon}>
        {contracts.map((contract: any) => (
          <div key={contract.id} className="p-2 bg-slate-50 rounded-md mb-2">
            <p className="font-bold">{contract.name}</p>
            <p className="text-sm">{contract.authority}</p>
          </div>
        ))}
      </Card>

      <Card title="Team Overview" icon={UsersIcon}>
        <div className="flex justify-around text-center">
            <div>
                <p className="text-2xl font-bold">{drivers.length}</p>
                <p className="text-sm text-slate-500">Drivers</p>
            </div>
            <div>
                <p className="text-2xl font-bold">{assistants.length}</p>
                <p className="text-sm text-slate-500">Assistants</p>
            </div>
        </div>
      </Card>
    </div>
  );
};

export default OperatorDashboard;

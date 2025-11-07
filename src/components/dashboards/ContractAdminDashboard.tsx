
import React from 'react';
import type { User } from '../../types';
import Card from '../ui/Card';
import { DocumentTextIcon, UserGroupIcon, PlusCircleIcon } from '@heroicons/react/24/outline';

interface ContractAdminDashboardProps {
  user: User;
}

const ContractAdminDashboard: React.FC<ContractAdminDashboardProps> = ({ user }) => {
  const { contracts } = user.data;

  return (
    <div className="p-2">
      <div className="flex justify-between items-center px-4 pt-4">
        <h2 className="text-2xl font-bold text-slate-900">Contract Management</h2>
        <button className="flex items-center bg-sky-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-sky-700 transition-colors">
            <PlusCircleIcon className="h-5 w-5 mr-2" />
            New
        </button>
      </div>
      
      {contracts.map((contract: any) => (
        <Card key={contract.id} title={contract.name} icon={DocumentTextIcon}>
          <p><span className="font-semibold">Contract ID:</span> {contract.id}</p>
          <p><span className="font-semibold">Issuing Authority:</span> {contract.authority}</p>
          <div className="flex items-center text-sm mt-2">
            <UserGroupIcon className="h-5 w-5 mr-2 text-slate-500" />
            <span>{contract.drivers.length} Drivers, {contract.assistants.length} Assistants, {contract.children.length} Children</span>
          </div>
          <div className="flex space-x-2 mt-4">
             <button className="w-full bg-slate-200 text-slate-800 font-bold py-2 px-4 rounded-lg hover:bg-slate-300 transition-colors">
                Modify
            </button>
             <button className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors">
                Delete
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ContractAdminDashboard;

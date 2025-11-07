import React from 'react';
import type { User } from '../../types';
import Card from '../ui/Card';
import { ShieldCheckIcon, UserIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { TruckIcon as BusIcon } from '@heroicons/react/24/solid';

interface UserDashboardProps {
  user: User;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ user }) => {
  const { childName, route, authority, operator, driver, assistant } = user.data;

  return (
    <div className="p-2">
      <h2 className="text-2xl font-bold text-slate-900 px-4 pt-4">Transport Details for {childName}</h2>
      
      <Card title="Route Information" icon={BusIcon}>
        <p><span className="font-semibold">Route Name:</span> {route.name}</p>
        <p><span className="font-semibold">Operator:</span> {operator.name}</p>
      </Card>

      <Card title="Key Contacts" icon={PhoneIcon}>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold">{driver.name}</p>
              <p className="text-sm text-slate-500">Driver</p>
            </div>
          </div>
           <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold">{assistant.name}</p>
              <p className="text-sm text-slate-500">Personal Assistant</p>
            </div>
             <a href={`tel:${assistant.phone}`} className="flex items-center bg-sky-500 text-white font-bold py-2 px-3 rounded-lg hover:bg-sky-600 transition-colors">
                  <PhoneIcon className="h-5 w-5" />
                  <span className="ml-2 text-sm">Call</span>
             </a>
          </div>
        </div>
      </Card>

      <Card title="Issuing Authority" icon={ShieldCheckIcon}>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">{authority.name}</p>
          </div>
           <a href={`tel:${authority.phone}`} className="flex items-center bg-slate-200 text-slate-800 font-bold py-2 px-3 rounded-lg hover:bg-slate-300 transition-colors">
                  <PhoneIcon className="h-5 w-5" />
           </a>
        </div>
      </Card>
    </div>
  );
};

export default UserDashboard;

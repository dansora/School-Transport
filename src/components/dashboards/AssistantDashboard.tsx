
import React from 'react';
import type { User, Child } from '../../types';
import Card from '../ui/Card';
import { UserCircleIcon, PhoneIcon, MapPinIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';

interface AssistantDashboardProps {
  user: User;
}

const AssistantDashboard: React.FC<AssistantDashboardProps> = ({ user }) => {
  const { route, driver, operator, authority, children, vehicleRegistration } = user.data;

  return (
    <div className="p-2">
      <h2 className="text-2xl font-bold text-slate-900 px-4 pt-4">Assistant Dashboard</h2>
      <p className="text-slate-600 px-4 mb-2">{route.name}</p>
      
      <Card title="Route & Driver Information" icon={UserCircleIcon}>
        <p><span className="font-semibold">Route:</span> {route.name}</p>
        <p><span className="font-semibold">Authority:</span> {authority.name}</p>
        <p><span className="font-semibold">Vehicle Reg:</span> {vehicleRegistration}</p>
        <div className="border-t my-2"></div>
        <div className="flex justify-between items-center">
          <div>
            <p><span className="font-semibold">Driver:</span> {driver.name}</p>
            <p className="text-sm text-slate-500">License: {driver.license}</p>
          </div>
          <a href={`tel:${driver.phone}`} className="flex items-center bg-sky-500 text-white font-bold py-2 px-3 rounded-lg hover:bg-sky-600 transition-colors">
            <PhoneIcon className="h-5 w-5" />
          </a>
        </div>
      </Card>

      <Card title="Operator Contact" icon={BuildingOffice2Icon}>
        <div className="flex justify-between items-center">
            <p className="font-semibold">{operator.name}</p>
             <a href={`tel:${operator.phone}`} className="flex items-center bg-slate-200 text-slate-800 font-bold py-2 px-3 rounded-lg hover:bg-slate-300 transition-colors">
                 <PhoneIcon className="h-5 w-5" />
             </a>
        </div>
      </Card>

      <Card title="Assisted Children" icon={MapPinIcon}>
        <ul className="divide-y divide-slate-200">
          {children.map((child: Child) => (
            <li key={child.id} className="py-3 flex justify-between items-center">
              <div>
                <p className="font-semibold">{child.name}</p>
                <p className="text-sm text-slate-500">Guardian: {child.guardianName}</p>
              </div>
               <a href={`tel:${child.guardianPhone}`} className="flex items-center bg-sky-500 text-white font-bold py-2 px-3 rounded-lg hover:bg-sky-600 transition-colors">
                  <PhoneIcon className="h-5 w-5" />
               </a>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default AssistantDashboard;

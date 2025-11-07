
import React from 'react';
import type { User, Child } from '../../types';
import Card from '../ui/Card';
import MapView from '../map/MapView';
import { MapIcon, UserIcon, UserGroupIcon, PhoneIcon } from '@heroicons/react/24/outline';

interface DriverDashboardProps {
  user: User;
}

const DriverDashboard: React.FC<DriverDashboardProps> = ({ user }) => {
  const { route, assistant, children, contractId } = user.data;

  return (
    <div>
        <h2 className="text-2xl font-bold text-slate-900 px-4 pt-4">Driver's Route</h2>
        <p className="text-slate-600 px-4 mb-2">{route.name} (Contract: {contractId})</p>
        
        <Card title="Live Route Map" icon={MapIcon} className="m-0 md:m-0">
             <MapView route={route} />
        </Card>

        <Card title="Personal Assistant" icon={UserIcon}>
            <div className="flex justify-between items-center">
                <p className="font-semibold">{assistant.name}</p>
                <a href={`tel:${assistant.phone}`} className="flex items-center bg-sky-500 text-white font-bold py-2 px-3 rounded-lg hover:bg-sky-600 transition-colors">
                    <PhoneIcon className="h-5 w-5" />
                </a>
            </div>
        </Card>
        
        <Card title="Children on Route" icon={UserGroupIcon}>
            <ul className="divide-y divide-slate-200">
                {children.map((child: Child) => (
                    <li key={child.id} className="py-2">
                        <p className="font-semibold">{child.name}</p>
                        <p className="text-sm text-slate-500">{child.address}</p>
                    </li>
                ))}
            </ul>
        </Card>
    </div>
  );
};

export default DriverDashboard;

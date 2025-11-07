
import React from 'react';
import type { User } from '../../types';
import Card from '../ui/Card';
import { MegaphoneIcon } from '@heroicons/react/24/outline';

interface AnnouncementsPageProps {
  user: User;
}

const AnnouncementsPage: React.FC<AnnouncementsPageProps> = ({ user }) => {
  // Mock data for announcements
  const announcements = [
    { id: 1, title: 'System Maintenance Scheduled', date: '2024-08-15', content: 'The system will be down for scheduled maintenance on August 15th from 2 AM to 4 AM.'},
    { id: 2, title: 'New Contract Bidding Open', date: '2024-08-10', content: 'Bidding for the new school year contracts in the Birmingham area is now open. Please submit your proposals by August 25th.', forRoles: ['CONTRACT_ADMIN', 'OPERATOR']},
    { id: 3, title: 'Road Closure on M25', date: '2024-08-12', content: 'Please be aware of a significant road closure on the M25 near Junction 10. Drivers should plan alternate routes.', forRoles: ['DRIVER', 'ASSISTANT', 'OPERATOR']},
  ];
  
  const relevantAnnouncements = announcements.filter(ann => !ann.forRoles || ann.forRoles.includes(user.role));

  return (
    <div className="p-2">
      <h2 className="text-2xl font-bold text-slate-900 px-4 pt-4">Announcements & Alerts</h2>
      {relevantAnnouncements.length > 0 ? (
        relevantAnnouncements.map(ann => (
           <Card key={ann.id} title={ann.title} icon={MegaphoneIcon}>
              <p className="text-xs text-slate-500 mb-2">{ann.date}</p>
              <p>{ann.content}</p>
           </Card>
        ))
      ) : (
        <Card title="No Alerts">
            <p>There are no new announcements for you at this time.</p>
        </Card>
      )}
    </div>
  );
};

export default AnnouncementsPage;

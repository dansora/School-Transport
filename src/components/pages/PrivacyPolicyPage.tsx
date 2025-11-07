
import React from 'react';
import type { Page } from '../../types';
import Card from '../ui/Card';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

interface PrivacyPolicyPageProps {
  onNavigate: (page: Page) => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {

  const handleRefuse = () => {
    alert("You must accept the Privacy Policy to use the app.");
  };

  return (
    <div className="p-2">
      <div className="flex items-center px-4 pt-4">
        <button onClick={() => onNavigate('settings')} className="p-2 mr-2 -ml-2 rounded-full hover:bg-slate-200">
          <ArrowLeftIcon className="h-6 w-6 text-slate-800" />
        </button>
        <h2 className="text-2xl font-bold text-slate-900">Privacy Policy</h2>
      </div>

      <Card title="Data Protection">
        <div className="prose prose-sm max-w-none text-slate-600 h-64 overflow-y-auto">
          <p>Your privacy is important to us. This policy explains what personal data we collect from you and how we use it.</p>
          <p><strong>1. Data Collection:</strong> We collect data to operate effectively and provide you the best experiences with our services. This includes information you provide when you create an account, such as your name, email, phone number, and professional details (e.g., license number).</p>
          <p><strong>2. Data Usage:</strong> We use the data to manage school transport logistics, facilitate communication between stakeholders (authorities, operators, drivers, parents), and ensure the safety and security of the children being transported.</p>
          <p><strong>3. Data Sharing:</strong> We only share your data with relevant parties involved in the transport service you are a part of. We do not sell your personal data to third parties.</p>
          <p><strong>4. Geolocation:</strong> For driver roles, we may collect real-time location data to provide live route tracking for safety and operational efficiency. This is only active during designated transport times.</p>
          <p><strong>5. Your Rights:</strong> You have the right to access, correct, or delete your personal data. You can manage your information in the Profile section of this app.</p>
          <p><em>Last updated: August 2024</em></p>
        </div>
        <div className="flex space-x-2 mt-4 border-t pt-4">
            <button onClick={() => onNavigate('settings')} className="w-full bg-sky-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-sky-700">Accept</button>
            <button onClick={handleRefuse} className="w-full bg-slate-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-slate-600">Refuse</button>
        </div>
      </Card>
    </div>
  );
};

export default PrivacyPolicyPage;

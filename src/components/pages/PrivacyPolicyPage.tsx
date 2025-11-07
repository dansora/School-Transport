import React from 'react';
import Card from '../ui/Card';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

interface PrivacyPolicyPageProps {
  onNavigateBack: () => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigateBack }) => {

  return (
    <div className="p-2 min-h-screen bg-cyan-100 flex flex-col justify-center">
      <div className="flex items-center px-4 pt-4 self-start">
        <button onClick={onNavigateBack} className="p-2 mr-2 -ml-2 rounded-full hover:bg-slate-200">
          <ArrowLeftIcon className="h-6 w-6 text-slate-800" />
        </button>
        <h2 className="text-2xl font-bold text-slate-900">Privacy Policy</h2>
      </div>

      <Card title="Data Protection">
        <div className="prose prose-sm max-w-none text-slate-600 h-96 overflow-y-auto p-1">
          <p>Your privacy is important to us. This policy explains what personal data we collect from you and how we use it.</p>
          <p><strong>1. Data Collection:</strong> We collect data to operate effectively and provide you the best experiences with our services. This includes information you provide when you create an account, such as your name, email, phone number, and professional details (e.g., license number).</p>
          <p><strong>2. Data Usage:</strong> We use the data to manage school transport logistics, facilitate communication between stakeholders (authorities, operators, drivers, parents), and ensure the safety and security of the children being transported.</p>
          <p><strong>3. Data Sharing:</strong> We only share your data with relevant parties involved in the transport service you are a part of. We do not sell your personal data to third parties.</p>
          <p><strong>4. Geolocation:</strong> For driver roles, we may collect real-time location data to provide live route tracking for safety and operational efficiency. This is only active during designated transport times.</p>
          <p><strong>5. Your Rights:</strong> You have the right to access, correct, or delete your personal data. You can manage your information in the Profile section of this app.</p>
          <p><em>Last updated: August 2024</em></p>
        </div>
        <div className="mt-4 border-t pt-4">
            <button onClick={onNavigateBack} className="w-full bg-sky-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-sky-700">
                Back
            </button>
        </div>
      </Card>
    </div>
  );
};

export default PrivacyPolicyPage;
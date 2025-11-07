import React from 'react';
import Card from '../ui/Card';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

interface TermsPageProps {
  onNavigateBack: () => void;
}

const TermsPage: React.FC<TermsPageProps> = ({ onNavigateBack }) => {

  return (
    <div className="p-2 min-h-screen bg-cyan-100 flex flex-col justify-center">
      <div className="flex items-center px-4 pt-4 self-start">
        <button onClick={onNavigateBack} className="p-2 mr-2 -ml-2 rounded-full hover:bg-slate-200">
          <ArrowLeftIcon className="h-6 w-6 text-slate-800" />
        </button>
        <h2 className="text-2xl font-bold text-slate-900">Terms & Conditions</h2>
      </div>

      <Card title="User Agreement">
        <div className="prose prose-sm max-w-none text-slate-600 h-96 overflow-y-auto p-1">
          <p>Welcome to School Transport UK. By using our application, you agree to these terms and conditions.</p>
          <p><strong>1. Account Responsibility:</strong> You are responsible for maintaining the confidentiality of your account and password and for restricting access to your device.</p>
          <p><strong>2. Proper Use:</strong> You agree to use the service for its intended purpose of managing school transportation. Any misuse of the application, including providing false information, is strictly prohibited.</p>
          <p><strong>3. Data Accuracy:</strong> You agree to provide accurate and current information for all required fields, including personal details, contact information, and any data related to contracts or routes.</p>
          <p><strong>4. Privacy:</strong> Our Privacy Policy, which is part of these terms, describes how we handle the information you provide to us when you use our services.</p>
          <p><strong>5. Limitation of Liability:</strong> The application is provided "as is". We are not liable for any damages or losses related to your use or inability to use the service.</p>
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

export default TermsPage;
import React, { useState } from 'react';
import type { User } from '../../types';
import Card from '../ui/Card';
import Modal from '../ui/Modal';
import { UserCircleIcon, EnvelopeIcon, MapPinIcon, PhoneIcon, IdentificationIcon, BuildingOffice2Icon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

interface ProfilePageProps {
  user: User;
  onLogout: () => void;
  onUpdateUser: (user: User) => void;
}

const roleNames: { [key in User['role']]: string } = {
  SYSTEM_ADMIN: 'System Admin',
  CONTRACT_ADMIN: 'Contract Admin',
  OPERATOR: 'Operator',
  DRIVER: 'Driver',
  ASSISTANT: 'Assistant',
  USER: 'Parent/User',
};

const ProfilePage: React.FC<ProfilePageProps> = ({ user, onLogout, onUpdateUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onUpdateUser(formData);
    setIsEditing(false);
  };
  
  const handleCancel = () => {
    setFormData(user);
    setIsEditing(false);
  }

  const handleDeleteAccount = () => {
    console.log("Account deleted for user:", user.id);
    setIsDeleteModalOpen(false);
    onLogout(); 
  };
  
  // FIX: Renamed `icon` to `Icon` because component variables must be capitalized for JSX.
  const renderField = (label: string, fieldName: keyof User, Icon: React.ElementType, isEditable: boolean = true) => {
    const value = formData[fieldName] as string || '';
    if (!user[fieldName]) return null;
    const IconComponent = Icon;

    return (
      <div className="flex items-center">
        <IconComponent className="h-5 w-5 mr-3 text-slate-400 shrink-0" />
        <div className="flex-grow">
          <label className="text-xs text-slate-500">{label}</label>
          {isEditing && isEditable ? (
            <input
              type="text"
              name={fieldName}
              value={value}
              onChange={handleInputChange}
              className="block w-full bg-slate-100 border-b-2 border-sky-500 p-1 focus:outline-none"
            />
          ) : (
            <p className="font-semibold">{value}</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="p-2">
      <div className="flex justify-between items-center px-4 pt-4">
        <h2 className="text-2xl font-bold text-slate-900">My Profile</h2>
        {!isEditing && (
             <button onClick={() => setIsEditing(true)} className="flex items-center bg-slate-200 text-slate-800 font-bold py-2 px-3 rounded-lg hover:bg-slate-300">
                <PencilIcon className="h-5 w-5 mr-2" /> Edit
            </button>
        )}
      </div>

      <Card title="Account Details" icon={UserCircleIcon}>
        <div className="space-y-4">
          {renderField('Name', 'name', UserCircleIcon)}
          <p className="flex items-center"><UserCircleIcon className="h-5 w-5 mr-3 text-slate-400" /><span className="font-semibold">{roleNames[user.role]}</span></p>
          {renderField('Email', 'email', EnvelopeIcon)}
          {renderField('Phone', 'phone', PhoneIcon)}
          {renderField('Address', 'address', MapPinIcon)}
          {renderField('Company', 'company', BuildingOffice2Icon, false)}
          {formData.license && <p className="flex items-center"><IdentificationIcon className="h-5 w-5 mr-3 text-slate-400" /> License: {formData.license} (Cat: {formData.category})</p>}
        </div>
        
        {isEditing && (
            <div className="flex space-x-2 mt-6">
                <button onClick={handleSave} className="w-full bg-sky-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-sky-700">Save</button>
                <button onClick={handleCancel} className="w-full bg-slate-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-slate-600">Cancel</button>
            </div>
        )}
      </Card>
      
      <div className="p-4 space-y-3">
        <button
          onClick={onLogout}
          className="w-full bg-slate-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-slate-700 transition-colors shadow-lg"
        >
          Log Out
        </button>
         <button
          onClick={() => setIsDeleteModalOpen(true)}
          className="w-full bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition-colors shadow-lg flex items-center justify-center"
        >
          <TrashIcon className="h-5 w-5 mr-2" /> Delete Account
        </button>
      </div>

       <Modal 
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Confirm Account Deletion"
       >
           <p className="text-slate-600 mb-4">Are you sure you want to permanently delete your account? This action cannot be undone.</p>
           <div className="flex justify-end space-x-3">
                <button onClick={() => setIsDeleteModalOpen(false)} className="px-4 py-2 bg-slate-200 text-slate-800 rounded-md hover:bg-slate-300">Cancel</button>
                <button onClick={handleDeleteAccount} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Confirm Delete</button>
           </div>
       </Modal>
    </div>
  );
};

export default ProfilePage;

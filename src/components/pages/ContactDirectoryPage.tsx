import React, { useState } from 'react';
import type { Page, Contact } from '../../types';
import Card from '../ui/Card';
import Modal from '../ui/Modal';
import { ArrowLeftIcon, PhoneIcon, PlusIcon, TrashIcon, PencilIcon, UserCircleIcon } from '@heroicons/react/24/solid';

interface ContactDirectoryPageProps {
  contacts: Contact[];
  onContactsChange: (contacts: Contact[]) => void;
  onNavigate: (page: Page) => void;
}

const ContactDirectoryPage: React.FC<ContactDirectoryPageProps> = ({ contacts, onContactsChange, onNavigate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);

  const openModal = (contact: Contact | null = null) => {
    setEditingContact(contact || { id: '', name: '', role: '', phone: '' });
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
      setIsModalOpen(false);
      setEditingContact(null);
  }

  const handleSave = (contactToSave: Contact) => {
    if (contactToSave.id) { // Editing
      onContactsChange(contacts.map(c => c.id === contactToSave.id ? contactToSave : c));
    } else { // Adding
      onContactsChange([...contacts, { ...contactToSave, id: `contact-${Date.now()}` }]);
    }
    closeModal();
  };

  const handleDelete = (contactId: string) => {
      onContactsChange(contacts.filter(c => c.id !== contactId));
  }

  return (
    <div className="p-2">
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex items-center">
            <button onClick={() => onNavigate('settings')} className="p-2 mr-2 -ml-2 rounded-full hover:bg-slate-200">
                <ArrowLeftIcon className="h-6 w-6 text-slate-800" />
            </button>
            <h2 className="text-2xl font-bold text-slate-900">Contacts</h2>
        </div>
        <button onClick={() => openModal()} className="flex items-center bg-sky-600 text-white font-bold py-2 px-3 rounded-lg hover:bg-sky-700">
            <PlusIcon className="h-5 w-5 mr-1" /> Add
        </button>
      </div>
      
      {contacts.length > 0 ? (
        contacts.map(contact => (
            <Card key={contact.id} title={contact.name} icon={UserCircleIcon}>
              <p className="text-sm text-slate-500">{contact.role}</p>
              <a href={`tel:${contact.phone}`} className="flex items-center mt-2 text-sky-600 font-semibold">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  {contact.phone}
              </a>
              <div className="flex space-x-2 mt-4 border-t pt-3">
                  <button onClick={() => openModal(contact)} className="w-full bg-slate-200 text-slate-800 font-bold py-2 px-4 rounded-lg hover:bg-slate-300 flex items-center justify-center"><PencilIcon className="h-4 w-4 mr-2"/>Edit</button>
                  <button onClick={() => handleDelete(contact.id)} className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 flex items-center justify-center"><TrashIcon className="h-4 w-4 mr-2" />Delete</button>
              </div>
            </Card>
        ))
      ) : (
        <Card title="No Contacts">
            <p className="text-center text-slate-500">Your contact directory is empty. Tap 'Add' to get started.</p>
        </Card>
      )}

      {isModalOpen && editingContact && (
          <ContactFormModal
            contact={editingContact}
            onSave={handleSave}
            onClose={closeModal}
          />
      )}

    </div>
  );
};

interface ContactFormModalProps {
    contact: Contact;
    onSave: (contact: Contact) => void;
    onClose: () => void;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({ contact, onSave, onClose }) => {
    const [formData, setFormData] = useState(contact);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    }
    
    return (
        <Modal isOpen={true} onClose={onClose} title={contact.id ? 'Edit Contact' : 'Add Contact'}>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500" required />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-slate-700">Role</label>
                    <input type="text" name="role" value={formData.role} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500" required />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-slate-700">Phone</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500" required />
                </div>
                <div className="flex justify-end space-x-2 pt-2">
                    <button type="button" onClick={onClose} className="px-4 py-2 bg-slate-200 text-slate-800 rounded-md hover:bg-slate-300">Cancel</button>
                    <button type="submit" className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700">Save</button>
                </div>
            </form>
        </Modal>
    );
}

export default ContactDirectoryPage;

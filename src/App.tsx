import React, { useState, useMemo, useEffect } from 'react';
import type { User, Page, Contact } from './types';
import { USERS, MOCK_CONTACTS } from './constants';
import Layout from './components/layout/Layout';
import LoginScreen from './components/auth/LoginScreen';
import SystemAdminDashboard from './components/dashboards/SystemAdminDashboard';
import ContractAdminDashboard from './components/dashboards/ContractAdminDashboard';
import OperatorDashboard from './components/dashboards/OperatorDashboard';
import DriverDashboard from './components/dashboards/DriverDashboard';
import AssistantDashboard from './components/dashboards/AssistantDashboard';
import UserDashboard from './components/dashboards/UserDashboard';
import ProfilePage from './components/pages/ProfilePage';
import AnnouncementsPage from './components/pages/AnnouncementsPage';
import SettingsPage from './components/pages/SettingsPage';
import FeedbackPage from './components/pages/FeedbackPage';
import TextSizePage from './components/pages/TextSizePage';
import ContactDirectoryPage from './components/pages/ContactDirectoryPage';
import TermsPage from './components/pages/TermsPage';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';

type TextSize = 'sm' | 'base' | 'lg';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [activePage, setActivePage] = useState<Page>('home');
  const [textSize, setTextSize] = useState<TextSize>('base');
  const [contacts, setContacts] = useState<Contact[]>(MOCK_CONTACTS);
  const [viewingLegalPage, setViewingLegalPage] = useState<'terms' | 'privacy' | null>(null);


  useEffect(() => {
    document.body.classList.remove('text-sm', 'text-base', 'text-lg');
    document.body.classList.add(`text-${textSize}`);
  }, [textSize]);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    setActivePage('home');
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };
  
  const handleUpdateUser = (updatedUser: User) => {
    setCurrentUser(updatedUser);
  };

  const handleNavigate = (page: Page) => {
    setActivePage(page);
  };

  const PageContent = useMemo(() => {
    if (!currentUser) return null;

    if (activePage.startsWith('settings/')) {
       switch(activePage) {
           case 'settings/text-size':
               return <TextSizePage currentSize={textSize} onSizeChange={setTextSize} onNavigate={handleNavigate} />;
           case 'settings/contacts':
                return <ContactDirectoryPage contacts={contacts} onContactsChange={setContacts} onNavigate={handleNavigate} />;
            case 'settings/terms':
                return <TermsPage onNavigateBack={() => handleNavigate('settings')} />;
            case 'settings/privacy':
                return <PrivacyPolicyPage onNavigateBack={() => handleNavigate('settings')} />;
           default:
                return <SettingsPage onNavigate={handleNavigate} />;
       }
    }

    switch (activePage) {
      case 'profile':
        return <ProfilePage user={currentUser} onLogout={handleLogout} onUpdateUser={handleUpdateUser} />;
      case 'announcements':
        return <AnnouncementsPage user={currentUser} />;
      case 'settings':
        return <SettingsPage onNavigate={handleNavigate} />;
      case 'feedback':
        return <FeedbackPage />;
      case 'home':
        switch (currentUser.role) {
          case 'SYSTEM_ADMIN':
            return <SystemAdminDashboard user={currentUser} />;
          case 'CONTRACT_ADMIN':
            return <ContractAdminDashboard user={currentUser} />;
          case 'OPERATOR':
            return <OperatorDashboard user={currentUser} />;
          case 'DRIVER':
            return <DriverDashboard user={currentUser} />;
          case 'ASSISTANT':
            return <AssistantDashboard user={currentUser} />;
          case 'USER':
            return <UserDashboard user={currentUser} />;
          default:
            return <div className="p-4">Invalid user role</div>;
        }
      default:
        return <div className="p-4">Page not found</div>;
    }
  }, [currentUser, activePage, textSize, contacts]);

  if (!currentUser) {
    if (viewingLegalPage === 'terms') {
      return <TermsPage onNavigateBack={() => setViewingLegalPage(null)} />;
    }
    if (viewingLegalPage === 'privacy') {
      return <PrivacyPolicyPage onNavigateBack={() => setViewingLegalPage(null)} />;
    }
    return <LoginScreen users={USERS} onLogin={handleLogin} onViewLegal={setViewingLegalPage} />;
  }

  return (
    <Layout
      user={currentUser}
      activePage={activePage}
      onNavigate={handleNavigate}
    >
      {PageContent}
    </Layout>
  );
};

export default App;
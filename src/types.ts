
export type Role = 'SYSTEM_ADMIN' | 'CONTRACT_ADMIN' | 'OPERATOR' | 'DRIVER' | 'ASSISTANT' | 'USER';

export type Page = 
  'home' | 
  'profile' | 
  'announcements' | 
  'settings' | 
  'feedback' |
  'settings/text-size' |
  'settings/contacts' |
  'settings/terms' |
  'settings/privacy';

export interface User {
  id: string;
  role: Role;
  name: string;
  email: string;
  address?: string;
  license?: string;
  category?: string;
  phone?: string;
  company?: string;
  data: any; 
}

export interface Contract {
  id: string;
  name: string;
  authority: string;
  drivers: string[];
  assistants: string[];
  children: Child[];
}

export interface Child {
  id: string;
  name: string;
  address: string;
  guardianName: string;
  guardianPhone: string;
}

export interface RouteDetails {
  id: string;
  name: string;
  contractId: string;
  stops: { lat: number; lng: number; address: string }[];
}

export interface Contact {
  id: string;
  name: string;
  role: string;
  phone: string;
}

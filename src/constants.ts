
import type { User, Contract, Child, RouteDetails, Contact } from './types';

const MOCK_CHILDREN: Child[] = [
  { id: 'child-1', name: 'Liam Smith', address: '10 Downing Street, London', guardianName: 'Olivia Smith', guardianPhone: '07123456781' },
  { id: 'child-2', name: 'Emma Jones', address: '221B Baker Street, London', guardianName: 'Noah Jones', guardianPhone: '07123456782' },
  { id: 'child-3', name: 'Oliver Williams', address: 'The Shard, London', guardianName: 'Ava Williams', guardianPhone: '07123456783' },
];

const MOCK_CONTRACTS: Contract[] = [
    {
        id: 'C001',
        name: 'West London Route 5',
        authority: 'London Borough of Hounslow',
        drivers: ['driver-1'],
        assistants: ['assistant-1'],
        children: MOCK_CHILDREN,
    },
     {
        id: 'C002',
        name: 'North Manchester Route 2',
        authority: 'Manchester City Council',
        drivers: [],
        assistants: [],
        children: [],
    }
];

const MOCK_ROUTE: RouteDetails = {
    id: 'R01',
    name: 'West London Route 5',
    contractId: 'C001',
    stops: [
        { lat: 51.5074, lng: -0.1278, address: 'Start: Trafalgar Square, London' },
        { lat: 51.5033, lng: -0.1419, address: 'Stop 1: 10 Downing Street, London' },
        { lat: 51.5175, lng: -0.1459, address: 'Stop 2: 221B Baker Street, London' },
        { lat: 51.5045, lng: -0.0865, address: 'Stop 3: The Shard, London' },
        { lat: 51.4998, lng: -0.1247, address: 'End: St. James School, London' },
    ]
};

export const MOCK_CONTACTS: Contact[] = [
    { id: 'contact-1', name: 'Brenda Miles', role: 'Contract Admin', phone: '02085832000' },
    { id: 'contact-2', name: 'Charlie Davis', role: 'Operator Manager', phone: '02081234567' },
];

export const USERS: User[] = [
  {
    id: 'sysadmin-1',
    role: 'SYSTEM_ADMIN',
    name: 'Alex Ray',
    email: 'alex.ray@devteam.com',
    data: {
      permissions: ['ALL'],
    },
  },
  {
    id: 'contractadmin-1',
    role: 'CONTRACT_ADMIN',
    name: 'Brenda Miles',
    email: 'brenda.miles@hounslow.gov.uk',
    address: 'Hounslow House, 7 Bath Rd, Hounslow',
    company: 'London Borough of Hounslow',
    data: {
      contracts: MOCK_CONTRACTS,
    },
  },
  {
    id: 'operator-1',
    role: 'OPERATOR',
    name: 'Charlie Davis',
    email: 'charlie.davis@metroline.co.uk',
    company: 'Metroline Travel',
    data: {
        contracts: [MOCK_CONTRACTS[0]],
        drivers: [{id: 'driver-1', name: 'John Doe'}],
        assistants: [{id: 'assistant-1', name: 'Jane Roe'}],
    }
  },
  {
    id: 'driver-1',
    role: 'DRIVER',
    name: 'John Doe',
    email: 'john.doe@metroline.co.uk',
    license: 'DRV123456UK',
    category: 'D1',
    phone: '07987654321',
    data: {
      contractId: 'C001',
      route: MOCK_ROUTE,
      assistant: { id: 'assistant-1', name: 'Jane Roe', phone: '07876543210' },
      children: MOCK_CHILDREN,
      vehicleRegistration: 'BUS 123'
    },
  },
  {
    id: 'assistant-1',
    role: 'ASSISTANT',
    name: 'Jane Roe',
    email: 'jane.roe@metroline.co.uk',
    phone: '07876543210',
    data: {
      route: MOCK_ROUTE,
      driver: { id: 'driver-1', name: 'John Doe', phone: '07987654321', license: 'DRV123456UK' },
      operator: { name: 'Metroline Travel', phone: '02081234567' },
      authority: { name: 'London Borough of Hounslow' },
      children: MOCK_CHILDREN,
      vehicleRegistration: 'BUS 123'
    },
  },
  {
    id: 'user-1',
    role: 'USER',
    name: 'Olivia Smith',
    email: 'olivia.smith@parent.com',
    address: '10 Downing Street, London',
    phone: '07123456781',
    data: {
      childName: 'Liam Smith',
      route: MOCK_ROUTE,
      authority: { name: 'London Borough of Hounslow', phone: '02085832000' },
      operator: { name: 'Metroline Travel' },
      driver: { name: 'John Doe' },
      assistant: { name: 'Jane Roe', phone: '07876543210' },
    },
  },
];

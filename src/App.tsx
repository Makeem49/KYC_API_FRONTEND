import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Sidebar } from './components';
import bgImage from '../src/assets/svgs/bg-pattern.svg';

import {
  Authentication,
  Client,
  Dashboard,
  Transaction,
  ApiRequest,
  UserManagement,
  ClientProvider,
  TrackerDashboard,
  SingleClient,
  Settings,
} from './pages';
import ContextProvider from './context';
import './App.css';
import { ColumnProvider } from './context/column_context';
import AuthProvider from './context/auth_context';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'client',
        children: [
          {
            index: true,
            element: <Client />,
          },
          {
            path: ':clientId',
            element: <SingleClient />,
          },
        ],
      },
      {
        path: 'transaction',
        children: [
          {
            index: true,
            element: <Transaction />,
          },
        ],
      },
      {
        path: 'user-management',
        children: [
          {
            index: true,
            element: <UserManagement />,
          },
        ],
      },
      {
        path: 'client-provider',
        children: [
          {
            index: true,
            element: <ClientProvider />,
          },
          {
            path: ':provider_id/api-keys',
            element: <ApiRequest />,
          },
        ],
      },
      {
        path: 'tracker-dashboard',
        children: [
          {
            index: true,
            element: <TrackerDashboard />,
          },
        ],
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
  {
    path: '/login',
    element: <Authentication />,
  },
]);

function Root() {
  return (
    <AuthProvider>
      <ContextProvider>
        <ColumnProvider>
          <App />
        </ColumnProvider>
      </ContextProvider>
    </AuthProvider>
  );
}

function App() {
  return (
    <div className='flex bg-white text-[#54565B] text-sm xl:text-base'>
      <Sidebar />

      <div
        className='w-[94%] bg-hero bg-[#F5F5F5]'
        style={{ backgroundImage: `url(${bgImage})` }}>
        <Outlet />
      </div>
    </div>
  );
}

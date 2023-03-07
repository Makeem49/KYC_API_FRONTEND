import React from 'react';
//  {
//    useEffect;
//  }
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { Sidebar } from './components';
import bgImage from '../src/assets/svgs/bg-pattern.svg';

import {
  ConfirmOverlay,
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
// {
//   useAuthCtx;
// }
import ForgotPassword from './pages/forgotPassword';
import ResetPassword from './pages/resetPassword';
// import axios from 'axios';

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
            path: 'api-keys/:providerId',
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
  {
    path: 'activate-account',
    element: <ConfirmOverlay />,
  },
  {
    path: 'forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: 'reset-password',
    element: <ResetPassword />,
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
  // const { isAuthenticated } = useAuthCtx();
  // useEffect(() => {
  //   axios.interceptors.response.use((response) => {
  //     console.log(response);
  //     if (response.status === 401) {
  //       // logout
  //       console.log('log user out');
  //     }
  //     return response;
  //   });
  // }, []);

  const isAuthorised = localStorage.getItem('cuddie-access-token');
  return (
    <div className='flex bg-white text-[#54565B] text-sm xl:text-base'>
      <Sidebar />

      <div
        className='w-[94%] bg-hero bg-[#F5F5F5]'
        style={{ backgroundImage: `url(${bgImage})` }}>
        {isAuthorised ? <Outlet /> : <Navigate to='/login' />}{' '}
      </div>
    </div>
  );
}

import './App.css';

import React from 'react';
//  {
//    useEffect;
//  }
import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom';

import { MantineProvider } from '@mantine/core';

import { Sidebar } from './components';
import ContextProvider from './context';
import AuthProvider from './context/auth_context';
import { ColumnProvider } from './context/column_context';
import { useThemeCtx } from './context/theme_context';
import {
  ApiRequest,
  Authentication,
  Banks,
  Client,
  ClientProvider,
  ConfirmOverlay,
  Dashboard,
  ErrorElement,
  FundRequest,
  Settings,
  SingleClient,
  TrackerDashboard,
  Transaction,
  UserManagement,
} from './pages';
// {
//   useAuthCtx;
// }
import ForgotPassword from './pages/forgotPassword';
import ResetPassword from './pages/resetPassword';

// import bgImage from '../src/assets/svgs/bg-pattern.svg';

// import axios from 'axios';
// const decodedPermissions: any = localStorage.getItem('decoded-arrays');
// const PermissionsArray = JSON.parse(decodedPermissions);
// const permissions = PermissionsArray.permissions.map((el: any) => el);
// const admin = PermissionsArray.username;

const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorElement />,
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
        // hide:
        //   !permissions.find(
        //     (permission: any) => permission.name === 'View Clients'
        //   ) || !admin.find((admin: string) => admin === 'admin'),
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
        path: 'banks',
        children: [
          {
            index: true,
            element: <Banks />,
          },
        ],
      },

      {
        path: 'fund-request',
        children: [
          {
            index: true,
            element: <FundRequest />,
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
    // ].filter((route: any) => !route.hide),
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
];

export const router = createBrowserRouter(routes);

function Root() {
  const { theme } = useThemeCtx();
  return (
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      theme={{ colorScheme: theme }}>
      <AuthProvider>
        <ContextProvider>
          <ColumnProvider>
            <App />
          </ColumnProvider>
        </ContextProvider>
      </AuthProvider>
    </MantineProvider>
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
    <div className='flex bg-white dark:bg-afexdark-verydark text-[#54565B] text-sm xl:text-base'>
      <Sidebar />

      <div className='w-[94%] bg-hero bg-[#F5F5F5] dark:bg-afexdark-verydark'>
        {/* style=
        {{
          backgroundImage: `url(${bgImage})`,
        }} */}
        {isAuthorised ? <Outlet /> : <Navigate to='/login' />}{' '}
      </div>
    </div>
  );
}

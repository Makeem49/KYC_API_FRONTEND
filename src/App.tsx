import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

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
import { useAuthCtx } from './context';

function App() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthCtx();
  const token = localStorage.getItem('cuddie-access-token');

  useEffect(() => {
    if (!isAuthenticated || !token) {
      return navigate('auth');
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);
  return (
    <div className='flex bg-white text-[#54565B] text-sm xl:text-base'>
      <Sidebar />

      <div
        className='w-[94%] bg-hero bg-[#F5F5F5]'
        style={{ backgroundImage: `url(${bgImage})` }}>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='auth' element={<Authentication />} />

          <Route path='client'>
            <Route index element={<Client />} />
            <Route path='single-client' element={<SingleClient />} />
          </Route>

          <Route path='transaction' element={<Transaction />} />
          <Route path='user-management' element={<UserManagement />} />

          <Route path='client-provider'>
            <Route index element={<ClientProvider />} />
            <Route path=':provider_id/api-keys' element={<ApiRequest />} />
          </Route>

          <Route path='client-provider' element={<ClientProvider />} />
          <Route path='tracker-dashboard' element={<TrackerDashboard />} />
          <Route path='settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

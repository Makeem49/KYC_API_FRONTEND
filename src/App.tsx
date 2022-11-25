import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Sidebar } from './components';
import bgImage from '../src/assets/svgs/bg-pattern.svg';

import {
  Client,
  Dashboard,
  Transaction,
  UserManagement,
  ApiRequest,
  TrackerDashboard,
  SingleClient,
  Settings,
} from './pages';

function App() {
  return (
    <div className='flex bg-white text-[#54565B] text-sm xl:text-base'>
      <Sidebar />

      <div
        className='w-[94%] bg-hero bg-[#F5F5F5]'
        style={{ backgroundImage: `url(${bgImage})` }}>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path='dashboard' element={<Dashboard />} />

          <Route path='client'>
            <Route index element={<Client />} />
            <Route path='single_client' element={<SingleClient />} />
          </Route>

          <Route path='transaction' element={<Transaction />} />
          <Route path='user_management' element={<UserManagement />} />
          <Route path='api_request' element={<ApiRequest />} />
          <Route path='tracker_dashboard' element={<TrackerDashboard />} />
          <Route path='settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import Profile from './profile';
import TwoStepAuthentication from './two step authentication';
import Notification from './notification';

const Security = () => {
  return (
    <div className='w-full flex flex-col gap-8'>
      {/* TITLE */}
      <div className='flex gap-3 mt-28 dark:text-afexdark-regular items-center'>
        <p className=' font-semibold text-afexpurple-dark dark:text-afexpurple-regular'>
          Security
        </p>
        <p>Events & Logs</p>
      </div>
      <Profile />
      <TwoStepAuthentication />
      <Notification />
    </div>
  );
};

export default Security;

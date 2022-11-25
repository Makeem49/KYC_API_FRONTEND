import React from 'react';
import ProfileBoard from './components/profile board';
import Security from './components/security';

const Settings = () => {
  return (
    <div className='w-full h-[100vh]  overflow-y-auto flex'>
      {/* Left Section */}
      <div className='w-[35%] h-[100vh] flex flex-col gap-10 overflow-y-auto p-10'>
        {/* Title */}
        <div className='flex w-full flex-col'>
          <h2 className='  text-textgrey-Bold text-[18px] font-bold '>
            User Profile
          </h2>
          <p>
            Home/ <span>User Management/</span> <span>User profile</span>
          </p>
        </div>
        <ProfileBoard />
      </div>

      {/* Right Section */}
      <div className='flex flex-col gap-14 pr-8 h-[100%] overflow-y-auto w-[65%]'>
        <Security />
      </div>
    </div>
  );
};

export default Settings;

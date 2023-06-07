import React from 'react';

import ProfileBoard from './components/profile board';
import Security from './components/security';

const Settings = () => {
  return (
    <div className="w-full h-[100vh]  overflow-y-auto md:flex">
      {/* Left Section */}
      <div className="md:w-[35%] md:h-[100vh] flex flex-col gap-10 overflow-y-auto md:p-10">
        {/* Title */}
        <div className="flex w-full dark:text-textgrey-normal flex-col">
          <h2 className="dark:text-afexdark-lighter text-[18px] font-bold ">
            User Profile
          </h2>
          <p>
            Home/ <span>User Management/</span> <span>User profile</span>
          </p>
        </div>
        <ProfileBoard />
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-14 md:pr-8 md:h-[100%] overflow-y-auto md:w-[65%]">
        <Security />
      </div>
    </div>
  );
};

export default Settings;

import { ArrowLeft } from 'iconsax-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

import ClientHeader from './component/headerr';

const ClientProfile = () => {
  return (
    <div className="w-full  flex flex-col lg:gap-8 overflow-y-scroll h-[100vh] py-14 px-0 lg:py-10 lg:px-14">
      <div className="flex bg-sinbadKYC-background z-10 flex-col gap-1 w-full">
        <h2 className=" text-textgrey-darker dark:text-afexdark-extralight  text-[14px] md:text-[18px] font-bold ">
          Client Profile
        </h2>

        <div className="flex gap-1">
          <NavLink className="flex items-center gap-1" to="/">
            {' '}
            <ArrowLeft size={18} />
            Dashboard
          </NavLink>
          <p className=" text-sinbadKYC-darkGrey">/Client Profile</p>
        </div>
      </div>

      <ClientHeader />
    </div>
  );
};

export default ClientProfile;

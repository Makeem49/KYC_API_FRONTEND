import React from 'react';
import { NavLink } from 'react-router-dom';

import ClientHeader from './component/headerr';

const ClientProfile = () => {
  return (
    <div className="w-full  flex flex-col gap-8 overflow-y-scroll h-[100vh] py-2 px-14">
      <div className="flex fixed bg-sinbadKYC-background z-10 flex-col gap-1 w-full">
        <h2 className=" text-textgrey-darker dark:text-afexdark-extralight  text-[14px] md:text-[18px] font-bold ">
          Client Profile
        </h2>

        <div className="flex gap-1">
          <NavLink to="/">Dashboard</NavLink>
          <p className=" text-sinbadKYC-darkGrey">/Client Profile</p>
        </div>
      </div>

      <ClientHeader />
    </div>
  );
};

export default ClientProfile;

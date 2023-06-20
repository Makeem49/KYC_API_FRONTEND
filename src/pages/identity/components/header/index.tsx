import { Profile2User } from 'iconsax-react';
import React from 'react';

const ClientHeader = () => {
  return (
    <div className=" md:w-full mt-16 flex flex-col gap-4 lg">
      {/* FIrst Card */}
      <div className=" bg-white  dark:bg-afexdark-darkest rounded-lg p-8">
        <div className="w-full py-4 gap-2 flex flex-col justify-center items-center text-[14px] border-dashed bg-sinbadKYC-grey rounded-lg dark:border-afexdark-dark border-b">
          <Profile2User
            variant="Bold"
            className=" bg-sinbadKYC-grey border-2 border-sinbadKYC-background p-2 rounded-full h-20 w-20 text-sinbadKYC-white"
          />
          <p className="text-white font-bold">admin</p>
        </div>

        <div className="w-full flex flex-col gap-5 py-5">
          <p className="flex gap-2 items-center text-textgrey-darker dark:text-textgrey-normal font-bold">
            Permissions:
            <span className=" text-textgrey-normal font-normal">can add</span>
          </p>
          <p className="flex gap-2 items-center text-textgrey-darker  dark:text-textgrey-normal font-bold">
            Roles:
            <span className=" text-textgrey-normal font-normal">
              Can view, Can add user, Can update user,
            </span>
          </p>

          <p className="flex gap-2 items-center text-textgrey-darker  dark:text-textgrey-normal font-bold">
            Number of users
            <span className=" text-green-400 font-normal"> 5</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientHeader;

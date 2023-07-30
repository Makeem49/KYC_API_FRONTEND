import { Logout } from 'iconsax-react';
import React from 'react';


import { Popover } from '@mantine/core';

import { useAuthCtx } from '../../../../context';

const LogoutModule = () => {
  const { logout } = useAuthCtx();
  return (
    <div>
      <Popover
        width={100}
        styles={{
          dropdown: {
            top: '15% !important',
            left: '100% !important',
          },
        }}>
        <Popover.Target>
        <Logout
              size="16"
              className="w-[25px] h-[25px] text-sinbadKYC-bordergrey p-1 rounded-lg"
              variant="Bulk"
            />
        </Popover.Target>
        <Popover.Dropdown className="flex flex-col gap-2">
          <p
            className=" lg:w-20 flex gap-2"
            onClick={() => {
              logout();
            }}>
            <Logout
              size="16"
              className="w-[15px] h-[15px] bg-sinbadKYC-grey p-1 rounded-lg text-white"
              variant="Bulk"
            />
            Logout
          </p>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
};

export default LogoutModule;

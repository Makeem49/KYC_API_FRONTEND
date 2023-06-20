import { Logout } from 'iconsax-react';
import React from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';

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
          <AiOutlineEllipsis className=" rotate-90 text-sinbadKYC-white font-bold h-4 w-4 lg:w-6 lg:h-6 2xl:h-8 2xl:w-8" />
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

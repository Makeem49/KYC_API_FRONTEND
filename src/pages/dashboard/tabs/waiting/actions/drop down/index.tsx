import { ArrowDown2 } from 'iconsax-react';
import React, { useState } from 'react';

import { Popover } from '@mantine/core';

import DeactivateUser from '../modal/deactivate';

const UserAction = ({ data }: { data: User }) => {
  const [opened, setOpened] = useState(false);

  const [deactivateUserModal, setDeactivateUserModal] = useState(false);

  return (
    <>
      <Popover opened={opened} onChange={setOpened} width={150}>
        <Popover.Target>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpened((s) => !s);
            }}
            className=" flex items-center rounded-lg border border-sinbadKYC-background p-2 text-sinbadKYC-darkGrey relative">
            Action <ArrowDown2 size="16" color="#8F8E91" variant="Bold" />
          </button>
        </Popover.Target>

        <Popover.Dropdown className="child:cursor-pointer rounded-lg hover:child:bg-afexpurple-lighter child:p-2">
          <p
            className="text-[14px] text-sinbadKYC-grey font-bold rounded-md"
            onClick={() => {
              setDeactivateUserModal((s) => !s);
              setOpened((s) => !s);
            }}>
            Re-send Invite
          </p>
        </Popover.Dropdown>
      </Popover>

      <DeactivateUser
        data={data}
        show={deactivateUserModal}
        close={() => setDeactivateUserModal(false)}
      />
    </>
  );
};

export default UserAction;

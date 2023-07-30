
import React, { useState } from 'react';

import { Popover } from '@mantine/core';

import DeactivateUser from '../modal/deactivate';
import eyeIcon from '../../../../../../assets/svgs/eye.svg';
import chatIcon from '../../../../../../assets/svgs/chat2.svg';
import dotIcon from '../../../../../../assets/svgs/three-dots-vertical.svg';

const UserAction = ({ data }: { data: User }) => {
  const [opened, setOpened] = useState(false);

  const [deactivateUserModal, setDeactivateUserModal] = useState(false);

  return (
    <>
      <Popover opened={opened} onChange={setOpened} width={150}>
        <Popover.Target>
        <div className=' flex items-center gap-3'>
            
            <img src={eyeIcon} alt=''/>
            
            <img src={chatIcon} alt=''/>
  
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpened((s) => !s);
              }}
              className=" flex items-center rounded-lg text-sinbadKYC-darkGrey relative">
            
              <img src={dotIcon} alt=''/>
            </button>
            </div>
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

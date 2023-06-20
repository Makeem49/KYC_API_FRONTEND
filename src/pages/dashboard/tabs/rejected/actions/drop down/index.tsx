import { ArrowDown2 } from 'iconsax-react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Popover } from '@mantine/core';

import ApproveReequest from '../modal/approve-client';
import RejectRequest from '../modal/reject';

const UserAction = ({ data }: { data: ClientList }) => {
  const [opened, setOpened] = useState(false);

  const [approveModal, setApproveModal] = useState(false);
  const [RejectModal, setRejectModal] = useState(false);

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
          <NavLink
            className="text-[14px] text-sinbadKYC-grey font-bold rounded-md"
            to={'#'}>
            View
          </NavLink>

          <p
            className="text-[14px] text-afexgreen-regular font-bold rounded-md"
            onClick={() => {
              setApproveModal((s) => !s);
              setOpened((s) => !s);
            }}>
            Approve
          </p>

          <p
            className="text-[14px] text-afexred-regular font-bold rounded-md"
            onClick={() => {
              setRejectModal((s) => !s);
              setOpened((s) => !s);
            }}>
            Reject
          </p>
        </Popover.Dropdown>
      </Popover>

      <ApproveReequest
        data={data}
        show={approveModal}
        close={() => setApproveModal(false)}
      />
      <RejectRequest
        data={data}
        show={RejectModal}
        close={() => setRejectModal(false)}
      />
    </>
  );
};

export default UserAction;

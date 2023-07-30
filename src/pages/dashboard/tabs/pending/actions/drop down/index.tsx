
import  { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Popover } from '@mantine/core';

import ApproveReequest from '../modal/approve-client';
import RejectRequest from '../modal/reject';
import eyeIcon from '../../../../../../assets/svgs/eye.svg';
import chatIcon from '../../../../../../assets/svgs/chat2.svg';
import dotIcon from '../../../../../../assets/svgs/three-dots-vertical.svg';
const UserAction = ({ data }: { data: ClientList }) => {
  const [opened, setOpened] = useState(false);

  const [approveModal, setApproveModal] = useState(false);
  const [RejectModal, setRejectModal] = useState(false);

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
          <NavLink
            className="text-[14px] text-sinbadKYC-grey font-bold rounded-md"
            to={`/${data.id}`}>
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

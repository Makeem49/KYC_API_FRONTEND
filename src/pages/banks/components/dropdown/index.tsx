import { ArrowDown2 } from 'iconsax-react';
import { useState } from 'react';

import { Popover } from '@mantine/core';

import EditPaymentCode from '../modal';

const UserAction = ({ data }: { data: Banks }) => {
  const [opened, setOpened] = useState(false);
  const [editPaymentModal, setEditPaymentModal] = useState(false);

  return (
    <>
      <Popover opened={opened} onChange={setOpened} width={150}>
        <Popover.Target>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpened((s) => !s);
            }}
            className=' flex items-center gap-2 bg-[#F0F0F0]  dark:bg-afexdark-verydark rounded px-5 py-3 relative'>
            <span>Actions</span>
            <ArrowDown2 size='16' color='#8F8E91' variant='Bold' />
          </button>
        </Popover.Target>

        <Popover.Dropdown className='child:cursor-pointer rounded-lg  hover:child:bg-afexpurple-lighter child:p-2'>
          <button
            className='text-[14px] text-gray-400 rounded-md px-2 w-full text-left'
            onClick={(e) => {
              e.stopPropagation();
              setEditPaymentModal((s) => !s);
              setOpened((s) => !s);
            }}>
            Edit
          </button>
        </Popover.Dropdown>
      </Popover>

      <EditPaymentCode
        data={data}
        show={editPaymentModal}
        close={() => setEditPaymentModal(false)}
      />
    </>
  );
};

export default UserAction;

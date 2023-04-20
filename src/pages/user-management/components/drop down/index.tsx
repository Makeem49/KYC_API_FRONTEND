import { t } from 'i18next';
import { ArrowDown2 } from 'iconsax-react';
import React, { useState } from 'react';

import { Popover } from '@mantine/core';

import DeactivateUser from '../modal/deactivate';
import AddUser from '../modal/edit user ';

const UserAction = ({ data }: { data: User }) => {
  const [opened, setOpened] = useState(false);
  const [editUserModal, setEditUserModal] = useState(false);
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
            className=' flex items-center gap-2 bg-[#F0F0F0] dark:bg-afexdark-verydark rounded px-5 py-3 relative'>
            <span>Actions</span>
            <ArrowDown2 size='16' color='#8F8E91' variant='Bold' />
          </button>
        </Popover.Target>

        <Popover.Dropdown className='child:cursor-pointer rounded-lg hover:child:bg-afexred-extralight child:p-2'>
          <button
            className='text-[14px] text-gray-400 rounded-md px-2 w-full text-left'
            onClick={(e) => {
              e.stopPropagation();
              setEditUserModal((s) => !s);
              setOpened((s) => !s);
            }}>
            {t('Edit')}
          </button>

          {data.isActive === 'Active' ? (
            <p
              className='text-[14px] text-gray-400 rounded-md'
              onClick={() => {
                setDeactivateUserModal((s) => !s);
                setOpened((s) => !s);
              }}>
              {t('Deactivate')}
            </p>
          ) : (
            <p
              className='text-[14px] text-gray-400 rounded-md'
              onClick={() => {
                setDeactivateUserModal((s) => !s);
                setOpened((s) => !s);
              }}>
              Activate
            </p>
          )}
        </Popover.Dropdown>
      </Popover>

      <AddUser
        data={data}
        show={editUserModal}
        close={() => setEditUserModal(false)}
      />
      <DeactivateUser
        data={data}
        show={deactivateUserModal}
        close={() => setDeactivateUserModal(false)}
      />
    </>
  );
};

export default UserAction;

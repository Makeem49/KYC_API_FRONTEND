import React, { useState } from 'react';
import { Popover } from '@mantine/core';
import { ArrowDown2 } from 'iconsax-react';

import DeactivateUser from '../modal/deactivate';
import { t } from 'i18next';

const UserAction = ({ data }: { data: ClientProviderToken }) => {
  const [opened, setOpened] = useState(false);

  const [deactivateUserModal, setDeactivateUserModal] = useState(false);

  return (
    <>
      <Popover opened={opened} onChange={setOpened} width={150}>
        <Popover.Target>
          <button
            onClick={() => setOpened((s) => !s)}
            className=' flex items-center gap-2 bg-[#F0F0F0] dark:bg-afexdark-verydark rounded px-5 py-3 relative'>
            <span>{t('Actions')}</span>
            <ArrowDown2 size='16' color='#8F8E91' variant='Bold' />
          </button>
        </Popover.Target>

        <Popover.Dropdown className='child:cursor-pointer rounded-lg  hover:child:bg-afexpurple-lighter child:p-2'>
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
              {t('Activate')}
            </p>
          )}

          <button className='text-[14px] text-afexred-dark rounded-md px-2 w-full text-left'>
            {t('Delete')}
          </button>
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

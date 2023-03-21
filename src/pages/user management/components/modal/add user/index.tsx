import React from 'react';
import { Add } from 'iconsax-react';
import { useState } from 'react';
import { Button, Drawer, Group } from '@mantine/core';
import UserInfo from './user info';
import { t } from 'i18next';

const AddUser = () => {
  const [opened, setOpened] = useState(false);
  const title = t('Add User');

  return (
    <>
      <Drawer
        className=' overflow-y-auto'
        position='right'
        opened={opened}
        onClose={() => setOpened(false)}
        title={title}
        padding='xl'
        size='38%'>
        <UserInfo closeModal={() => setOpened(false)} />
      </Drawer>

      <Group position='center'>
        <Button
          className='flex w-full items-center gap-2 py-2 px-3 hover:bg-afexpurple-regular hover:shadow text-white text-[14px] bg-afexpurple-regular rounded-lg'
          onClick={() => setOpened(true)}>
          <span className='w-full'>{t('ADD USER')}</span>
          <Add size='20' color='#FFFFFF' variant='Bulk' />
        </Button>
        {/* <button
          className='flex min-w-[130px] items-center py-2 px-3 hover:bg-afexpurple-regular hover:shadow text-white text-[14px] bg-afexpurple-regular rounded-lg'
          onClick={() => setOpened(true)}>
          <span className='w-full text-nowrap'>{t('ADD USER')}</span>
          <Add size='20' color='#FFFFFF' variant='Bulk' />
        </button> */}
      </Group>
    </>
  );
};

export default AddUser;

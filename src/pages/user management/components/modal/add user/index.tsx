import React from 'react';
import { Add } from 'iconsax-react';
import { useState } from 'react';
import { Drawer, Group, Button } from '@mantine/core';
import UserInfo from './user info';

const AddUser = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        className=' overflow-y-auto'
        position='right'
        opened={opened}
        onClose={() => setOpened(false)}
        title='Add User'
        padding='xl'
        size='38%'>
        <UserInfo closeModal={() => setOpened(false)} />
      </Drawer>

      <Group position='center'>
        <Button
          className='flex w-full items-center py-2 px-2 hover:bg-afexred-lighter bg-afexred-extralight text-afexred-regular text-[14px] rounded-lg'
          onClick={() => setOpened(true)}>
          <span className='w-full'>ADD USER</span>
          <Add size='18' color='#E1261C' variant='Bulk' />
        </Button>
      </Group>
    </>
  );
};

export default AddUser;

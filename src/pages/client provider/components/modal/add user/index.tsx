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
        position='right'
        opened={opened}
        onClose={() => setOpened(false)}
        title='Add User'
        padding='xl'
        size='50%'>
        {/* Map Component */}

        <UserInfo />
      </Drawer>

      <Group position='center'>
        <Button
          className='flex w-full items-center gap-3 py-2 px-2 hover:bg-afexpurple-light text-[12px] text-afexred-regular bg-afexred-extralight rounded-lg'
          onClick={() => setOpened(true)}>
          <span className='w-full'>ADD CLIENT PROVIDER</span>
          <Add size='18' color='#E1261C' variant='Bulk' />
        </Button>
      </Group>
    </>
  );
};

export default AddUser;

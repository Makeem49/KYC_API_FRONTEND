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
        title='Add Client Provider'
        padding='xl'
        size='45%'>
        {/* Map Component */}

        <UserInfo />
      </Drawer>

      <Group position='center'>
        <Button
          className='flex w-full items-center gap-4 py-2 px-3 hover:bg-afexred-extralight text-[14px] text-afexred-regular bg-[#FCE9E8] rounded-lg'
          onClick={() => setOpened(true)}>
          <span className='w-full'>ADD CLIENT PROVIDER</span>
          <Add size='20' color='#E1261C' variant='Bulk' />
        </Button>
      </Group>
    </>
  );
};

export default AddUser;

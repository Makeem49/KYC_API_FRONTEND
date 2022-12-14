import React from 'react';
import { Add } from 'iconsax-react';
import { useState } from 'react';
import { Modal, Group, Button } from '@mantine/core';
import UserInfo from './user info';

const AddUser = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title='Add User'
        padding='xl'
        size='40%'
        centered>
        <UserInfo />
      </Modal>

      <Group position='center'>
        <Button
          className='flex w-full items-center py-2 px-2 hover:bg-afexpurple-light text-[12px] text-[#F1EBFC] bg-[#7738DD] rounded-lg'
          onClick={() => setOpened(true)}>
          <span className='w-full'>Add User</span>
          <Add size='18' color='#F1EBFC' variant='Bulk' />
        </Button>
      </Group>
    </>
  );
};

export default AddUser;

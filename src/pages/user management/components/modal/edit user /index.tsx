import React from 'react';
import { useState } from 'react';
import { Drawer, Group } from '@mantine/core';
import UserInfo from './user info';

const AddUser = () => {
  const [opened, setOpened] = useState(true);

  return (
    <>
      <Drawer
        position='right'
        opened={opened}
        onClose={() => setOpened(false)}
        title='Add User'
        padding='xl'
        size='40%'>
        {/* Map Component */}

        <UserInfo />
      </Drawer>

      <Group position='right'></Group>
    </>
  );
};

export default AddUser;

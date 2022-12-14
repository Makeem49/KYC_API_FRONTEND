import React from 'react';
import { Drawer, Group } from '@mantine/core';
import UserInfo from './user info';

const AddUser = ({ show, close }: ModalControllerType) => {
  return (
    <>
      <Drawer
        position='right'
        opened={show}
        onClose={close}
        title='Edit User'
        padding='xl'
        size='40%'>
        {/* Map Component */}

        <UserInfo close={close} />
      </Drawer>

      <Group position='right'></Group>
    </>
  );
};

export default AddUser;

import React from 'react';
import { Drawer, Group } from '@mantine/core';
import UserInfo from './user info';

interface AddUserProps extends ModalControllerType {
  data: ClientProvider;
}

const AddUser = ({ show, close, data }: AddUserProps) => {
  return (
    <>
      <Drawer
        className=' overflow-y-auto'
        position='right'
        opened={show}
        onClose={close}
        title='Add User'
        padding='xl'
        size='38%'>
        {/* Map Component */}

        <UserInfo close={close} show data={data} />
      </Drawer>

      <Group position='right'></Group>
    </>
  );
};

export default AddUser;

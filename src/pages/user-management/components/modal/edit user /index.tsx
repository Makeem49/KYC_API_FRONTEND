import React from 'react';
import { Drawer, Group } from '@mantine/core';
import UserInfo from './user info';
interface AddUserProps extends ModalControllerType {
  data: User;
}

const AddUser = ({ show, close, data }: AddUserProps) => {
  return (
    <>
      <Drawer
        className=' overflow-y-auto'
        position='right'
        opened={show}
        onClose={close}
        title='Edit User'
        padding='xl'
        size='38%'>
        {/* Map Component */}

        <UserInfo data={data} show close={close} />
      </Drawer>

      <Group position='right'></Group>
    </>
  );
};

export default AddUser;

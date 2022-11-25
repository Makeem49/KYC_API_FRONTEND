import React from 'react';
import { useState } from 'react';
import { Drawer, Button, Group } from '@mantine/core';
import NotifiIcon from '../../assets/images/notification.svg';
import Notications from './notifications';

const NotificationModal = () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Drawer
        position='right'
        opened={opened}
        onClose={() => setOpened(false)}
        title='Notifications'
        withCloseButton={true}
        // padding='xl'
        size='28%'
        className='flex flex-col rounded-xl font-bold'
        styles={{
          header: {
            borderBottom: '1px solid',
            borderColor: '#F0F0F0',
            padding: '1rem 2rem',
          },
        }}>
        {/* Component */}
        <Notications />
      </Drawer>

      <Group position='center'>
        <Button onClick={() => setOpened(true)} className=' hover:bg-white'>
          <img src={NotifiIcon} alt='notify_icon' />
        </Button>
      </Group>
    </>
  );
};

export default NotificationModal;

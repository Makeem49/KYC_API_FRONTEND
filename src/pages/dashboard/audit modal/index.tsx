import React from 'react';
import { useState } from 'react';
import { Drawer, Popover, Group } from '@mantine/core';
import SystemLog from './system log';
import reciptIcon from '../../../assets/images/xsd.svg';

const AuditModal = () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Drawer
        position='right'
        opened={opened}
        onClose={() => setOpened(false)}
        withCloseButton={false}
        // padding='xl'
        size='47%'
        className='flex flex-col'
        styles={{
          header: {
            borderLeft: '5px solid',
            borderLeftColor: '#C5A9F0',
            borderColor: '#F0F0F0',
            padding: '1rem 2rem',
          },
        }}>
        {/* Component */}
        <SystemLog />
      </Drawer>

      <Group position='center'>
        <Popover
          width={120}
          styles={{
            dropdown: {
              top: '-140% !important',
              left: '80% !important',
              backgroundColor: '#54289D',
              color: '#FFFF',
              fontSize: '16px',
              fontStyle: 'bold',
            },
          }}>
          <Popover.Target>
            <img
              src={reciptIcon}
              alt='rcpt'
              className='absolute bottom-[-150%] right-0'
            />
          </Popover.Target>
          <Popover.Dropdown className='flex flex-col rounded-xl'>
            <button
              onClick={() => setOpened(true)}
              className='cursor-pointer py-2 hover:bg-transparent w-full'>
              Run Audit
            </button>
          </Popover.Dropdown>
        </Popover>
      </Group>
    </>
  );
};

export default AuditModal;

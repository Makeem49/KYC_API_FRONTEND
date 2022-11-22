import React from 'react';
import { Map } from 'iconsax-react';
import { useState } from 'react';
import { Drawer, Button, Group } from '@mantine/core';
import NigerianMap from './map';
import List from './list';

function RightModal() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        position='right'
        opened={opened}
        onClose={() => setOpened(false)}
        title='Transaction by location'
        padding='xl'
        size='50%'
        className='flex flex-col gap-5 font-bold'>
        {/* Map Component */}
        <NigerianMap />
        <List />
      </Drawer>

      <Group position='center'>
        <Button
          onClick={() => setOpened(true)}
          className='flex items-center p-3 bg-[#F1EBFC] hover:bg-purple-500 rounded-lg'>
          <Map size='18' color='#7738dd' variant='Bulk' />
        </Button>
      </Group>
    </>
  );
}
export default RightModal;

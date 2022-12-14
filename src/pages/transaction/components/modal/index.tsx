import React from 'react';
import { Location } from 'iconsax-react';
import { useState } from 'react';
import { Drawer, Group, Tooltip } from '@mantine/core';
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
        <Tooltip label='Transaction by Location' className='p-3'>
          <button
            onClick={() => setOpened(true)}
            className='flex items-center py-3 px-4 bg-[#F1EBFC] hover:bg-afexpurple-light rounded-lg'>
            <Location size='25' color='#7738dd' variant='Bulk' />
          </button>
        </Tooltip>
      </Group>
    </>
  );
}
export default RightModal;

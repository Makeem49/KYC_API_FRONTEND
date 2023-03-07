import React from 'react';
import { Location } from 'iconsax-react';
import { useState } from 'react';
import { Drawer, Group, Tooltip } from '@mantine/core';
// import NigerianMap from './map';
import HeatMap from '../heat_map';
import List from './list';
import AllTransactions from './allTransactions';

function RightModal() {
  const [opened, setOpened] = useState(false);
  const [showList, setShowList] = useState(true);
  const [showAllTransactions, setShowAllTransactions] = useState(false);

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
        <button
          className='absolute right-[16%] top-[1.5%] bg-afexpurple-lighter text-afexpurple-regular hover:bg-afexpurple-lighter p-3 font-normal max-w-md rounded-lg'
          onClick={() => {
            setShowList((o) => !o);
            setShowAllTransactions((o) => !o);
          }}>
          Show all Transactions
        </button>
        {/* <NigerianMap /> */}
        {showList && <HeatMap />}
        {showList && <List />}
        {showAllTransactions && <AllTransactions />}
      </Drawer>

      <Group position='center'>
        <Tooltip label='Transaction by Location' className='p-3'>
          <button
            onClick={() => setOpened(true)}
            className='flex w-full items-center gap-2 py-2 px-3 hover:bg-afexpurple-regular hover:shadow text-white text-[14px] bg-afexpurple-regular rounded-lg'>
            <Location size='25' color='#FFFFFF' variant='Bold' />
          </button>
        </Tooltip>
      </Group>
    </>
  );
}
export default RightModal;

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
          className='absolute right-[16%] top-[1.5%] bg-afexred-extralight text-afexred-regular hover:bg-afexred-lighter p-3 font-normal w-[150px] rounded-lg'
          onClick={() => {
            setShowList((o) => !o);
            setShowAllTransactions((o) => !o);
          }}>
          All Transactions
        </button>
        {/* <NigerianMap /> */}
        <HeatMap />
        {showList && <List />}
        {showAllTransactions && <AllTransactions />}
      </Drawer>

      <Group position='center'>
        <Tooltip label='Transaction by Location' className='p-3'>
          <button
            onClick={() => setOpened(true)}
            className='flex items-center py-3 px-4 bg-afexred-extralight hover:bg-afexred-light rounded-lg'>
            <Location size='25' color='#E1261C' variant='Bulk' />
          </button>
        </Tooltip>
      </Group>
    </>
  );
}
export default RightModal;

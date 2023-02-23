import React from 'react';
import WalletCards from './components/wallet cards';
import VirtualCards from './components/cards2';
import ActivityStream from './components/activity stream';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

// import SortableTable from '../sortableTable';
// import { CustomizedTable } from '../../components';
// import tableData1 from '../../tableData1.json';

const TrackerDashboard = () => {
  return (
    <AnimatePresence>
      <div className='w-full h-[100vh] overflow-y-auto flex'>
        {/* Left Section */}
        <div className='w-full h-[100vh] flex flex-col gap-6 overflow-y-auto p-10'>
          {/* Title */}

          <div className='flex justify-between items-center'>
            <div className='flex w-full flex-col'>
              <h2 className='  text-textgrey-Bold text-[18px] font-bold '>
                Tracker System
              </h2>
            </div>

            {/* <div className='flex w-full px-3 justify-end gap-4 text-[14px] font-normal items-center '>
              <p>Showing data for </p>
              <button className='border flex items-center border-[#BABABA] text-textgrey-Bold p-2 rounded-lg '>
                Today
                <ArrowDown2 size='14' color='#2B2930' variant='Bold' />
              </button>
            </div> */}
          </div>
          <motion.div
            initial={{ transform: 'translateY(-100%)', opacity: 0 }}
            animate={{ transform: 'translateY(0%)', opacity: 1 }}
            exit={{ opacity: 0, transform: 'translate(0,0)' }}
            transition={{ duration: 2 }}>
            {' '}
            <WalletCards />
          </motion.div>

          <motion.div
            initial={{ transform: 'translateY(-100%)', opacity: 0 }}
            animate={{ transform: 'translateY(0%)', opacity: 1 }}
            exit={{ opacity: 0, transform: 'translate(0,0)' }}
            transition={{ duration: 2 }}>
            {' '}
            <VirtualCards />
          </motion.div>

          <motion.div
            className='w-full flex flex-col gap-4 p-8 bg-[#ffff] rounded-lg'
            initial={{ transform: 'translateY(100%)', opacity: 0 }}
            animate={{ transform: 'translateY(0%)', opacity: 1 }}
            exit={{ opacity: 0, transform: 'translate(0,0)' }}
            transition={{ duration: 2 }}>
            {' '}
            <ActivityStream />
          </motion.div>

          {/* <CustomizedTable
            data={tableData1}
            headers={[
              {
                accessor: 'id',
                name: 'Client ID',
                hidden: false,
                sortable: true,
                static: false,
              },

              {
                accessor: 'full_name',
                name: 'Client Name',
                hidden: false,
                sortable: true,
                static: false,
              },

              {
                accessor: 'email',
                name: 'Client Email',
                hidden: false,
                sortable: true,
                static: false,
              },
              {
                accessor: 'gender',
                name: 'Gender',
                hidden: false,
                sortable: true,
                static: false,
                cell: (val) => (
                  <span className='bg-red-100 p-3'>
                    {' '}
                    {val === 'Male' ? 'Yes' : 'No'}{' '}
                  </span>
                ),
              },

              {
                accessor: 'age',
                name: 'Age',
                hidden: false,
                sortable: true,
                static: false,
              },

              {
                accessor: 'start_date',
                name: 'Start',
                hidden: false,
                sortable: true,
                static: false,
              },
            ]}
          /> */}

          {/* <SortableTable /> */}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TrackerDashboard;

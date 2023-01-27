import React, { useEffect, useState } from 'react';
import { ArrowDown2 } from 'iconsax-react';
import TaskBar from './components/task bar';
import Table from './components/table';
import { SingleClientProvider } from './components/context/single_user.ctx';

import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

const ClientProvider = () => {
  const [showTable, setShowTable] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setShowTable(true);
    }, 3000);
  }, []);

  return (
    <AnimatePresence>
      <SingleClientProvider>
        <div className='w-full h-[100vh]  overflow-y-auto flex'>
          <div className='w-full h-[100vh] flex flex-col gap-14 overflow-y-auto p-10'>
            {/* Title */}
            <div className='flex w-full justify-between items-center'>
              <div className='flex w-full flex-col'>
                <h2 className=' text-textgrey-darker text-[18px] font-bold '>
                  Clients' Provider
                </h2>
              </div>

              <div className='flex w-full px-3 justify-end gap-4 text-[14px] font-normal items-center '>
                <p>Showing data for </p>
                <button className='border flex items-center border-[#BABABA] text-textgrey-Bold p-2 rounded-lg '>
                  Today
                  <ArrowDown2 size='14' color='#2B2930' variant='Bold' />
                </button>
              </div>
            </div>

            {/* TABLE */}
            {showTable && (
              <motion.div
                initial={{ transform: 'translateY(100%)', opacity: 0 }}
                animate={{ transform: 'translateY(0%)', opacity: 1 }}
                exit={{ opacity: 0, transform: 'translate(0,0)' }}
                transition={{ duration: 2 }}>
                <div className='w-full flex flex-col gap-4 p-8 bg-[#ffff] rounded-lg'>
                  <TaskBar />
                  <Table />
                </div>{' '}
              </motion.div>
            )}
          </div>
        </div>
      </SingleClientProvider>
    </AnimatePresence>
  );
};

export default ClientProvider;

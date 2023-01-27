import React, { useEffect, useState } from 'react';
import { ArrowDown2 } from 'iconsax-react';
import Header from './header';
import Card from './cards';
import Chart from './chart';
import RecentTransaction from './recent transaction';
import TransactionStatus from './transaction status';
import ChanneSource from './channel source';
import WalletBallance from './wallet balance';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const [showTable, setShowTable] = useState<boolean>(true);
  const [showCards, setShowCards] = useState<boolean>(true);
  const [showRight, setShowRight] = useState<boolean>(true);

  // const dateRangeFilter = () => {
  //   if (!startDate) return toast('error', 'please specify a start date', '');
  //   if (!endDate) return toast('error', 'please specify an end date', '');
  //   let filtered = list_of_clients
  //     .filter(
  //       (item) =>
  //         new Date(item.createdAt).getTime() >= startDate.getTime() &&
  //         new Date(item.createdAt).getTime() <= endDate.getTime()
  //     )
  //     .sort(
  //       (a, b) =>
  //         new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  //     );

  //   return setClients(filtered);
  // };

  useEffect(() => {
    setTimeout(() => {
      setShowTable(true);
      setShowCards(true);
      setShowRight(true);
    }, 3000);
  }, []);

  return (
    <AnimatePresence>
      <div className='w-full h-[100vh] overflow-y-auto flex'>
        {/* Left Section */}
        <div className='w-[68%] h-[100vh] flex flex-col gap-14 overflow-y-auto p-10'>
          {/* Title */}
          <div className='flex w-full justify-between items-center'>
            <h2 className=' text-textgrey-darker text-[18px] font-bold '>
              Dashboard
            </h2>
            <div className='flex w-full px-3 justify-end gap-4 text-[14px] font-normal items-center '>
              <p>Showing data for </p>
              <button className='border flex items-center border-[#BABABA] text-textgrey-darker p-2 rounded-lg '>
                Today
                <ArrowDown2 size='14' color='#2B2930' variant='Bold' />
              </button>
            </div>
          </div>
          <Header />
          {showCards && (
            <motion.div
              initial={{ transform: 'translateY(-100%)', opacity: 0 }}
              animate={{ transform: 'translateY(0%)', opacity: 1 }}
              exit={{ opacity: 0, transform: 'translate(0,0)' }}
              transition={{ duration: 2 }}>
              {' '}
              <Card />
            </motion.div>
          )}

          {showTable && (
            <motion.div
              className='flex flex-col gap-14'
              initial={{ transform: 'translateY(100%)', opacity: 0 }}
              animate={{ transform: 'translateY(0%)', opacity: 1 }}
              exit={{ opacity: 0, transform: 'translate(0,0)' }}
              transition={{ duration: 2 }}>
              {' '}
              <Chart />
              <RecentTransaction />
            </motion.div>
          )}
        </div>

        {/* Right Section */}

        {showRight && (
          <motion.div
            className='bg-white flex flex-col gap-14 p-8 h-[100%] overflow-y-auto w-[32%]'
            initial={{ transform: 'translateX(100%)', opacity: 0 }}
            animate={{ transform: 'translateX(0%)', opacity: 1 }}
            exit={{ opacity: 0, transform: 'translate(0,0)' }}
            transition={{ duration: 2 }}>
            <div className='bg-white flex flex-col gap-14'>
              <WalletBallance />
              <TransactionStatus />
              <ChanneSource />
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default Dashboard;

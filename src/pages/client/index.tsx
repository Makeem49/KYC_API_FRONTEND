import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ClientCard from './components/cards';
import ClientList from './components/client list';
import RecentSearch from './components/recent search';
import TransactionCount from './components/transaction count';
import TransactionValue from './components/transaction value';
import { ArrowDown2, ArrowLeft } from 'iconsax-react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { DateRanges } from '../../components';

import { useQuery } from 'react-query';
import { get_client_list_query } from '../../queries/clients_stats';

function Client() {
  const [showDateCalendar, setShowDateCalendar] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const { data, isError, isLoading } = useQuery(get_client_list_query(1));

  if (isLoading) return <p>Loading....</p>;

  if (isError) return <p>Error!!!</p>;

  // const filterByRegDate = () => {
  //   if (!startDate || !endDate) return;
  //   setClients(() =>
  //     data
  //       .slice()
  //       .filter(
  //         (client) =>
  //           new Date(client.createdAt).getTime() >= startDate.getTime() &&
  //           new Date(client.createdAt).getTime() <= endDate.getTime()
  //       )
  //       .sort(
  //         (a, b) =>
  //           new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  //       )
  //   );

  //   setShowDateCalendar(false);
  // };

  return (
    <AnimatePresence>
      <div className='w-full h-[100vh] overflow-y-auto flex'>
        {/* Left Section */}
        <div className='w-[68%] h-[100vh] flex flex-col gap-14 overflow-y-auto p-10'>
          {/* Title */}
          <div className='flex justify-between items-center'>
            <div className='flex w-full flex-col'>
              <h2 className='  text-textgrey-Bold text-[18px] font-bold '>
                Client
              </h2>
              <p className='flex items-center gap-2 text-textgrey-normal'>
                <Link to='/dashboard'>
                  {' '}
                  <ArrowLeft className=' w-5' />
                </Link>{' '}
                Home/ <span className=' text-textgrey-dark'>Clients</span>
              </p>
            </div>

            <div className='flex w-full px-3 justify-end gap-4 text-[14px] font-normal items-center '>
              <p>Showing data for </p>
              <button
                onClick={() => setShowDateCalendar((s) => !s)}
                className='border flex items-center border-[#BABABA] text-textgrey-Bold p-2 rounded-lg '>
                Today
                <ArrowDown2 size='14' color='#2B2930' variant='Bold' />
              </button>

              {showDateCalendar && (
                <DateRanges
                  startDate={startDate}
                  endDate={endDate}
                  setEndDate={setEndDate}
                  setStartDate={setStartDate}
                  close={() => setShowDateCalendar(false)}
                  // filterFunc={filterByRegDate}
                />
              )}
            </div>
          </div>

          {
            <motion.div
              initial={{ transform: 'translateY(-100%)', opacity: 0 }}
              animate={{ transform: 'translateY(0%)', opacity: 1 }}
              exit={{ opacity: 0, transform: 'translate(0,0)' }}
              transition={{ duration: 2 }}>
              {' '}
              <ClientCard />
            </motion.div>
          }

          {
            <motion.div
              initial={{ transform: 'translateY(100%)', opacity: 0 }}
              animate={{ transform: 'translateY(0%)', opacity: 1 }}
              exit={{ opacity: 0, transform: 'translate(0,0)' }}
              transition={{ duration: 2 }}>
              {' '}
              <ClientList data={data!} />
            </motion.div>
          }
        </div>

        {/* Right Section */}

        {
          <motion.div
            className='bg-white flex flex-col gap-14 p-8 h-[100%] overflow-y-auto w-[32%]'
            initial={{ transform: 'translateX(100%)', opacity: 0 }}
            animate={{ transform: 'translateX(0%)', opacity: 1 }}
            exit={{ opacity: 0, transform: 'translate(0,0)' }}
            transition={{ duration: 2 }}>
            <div className='bg-white flex flex-col gap-14'>
              <RecentSearch />
              <TransactionCount />
              <TransactionValue />
            </div>
          </motion.div>
        }
      </div>
    </AnimatePresence>
  );
}

export default Client;

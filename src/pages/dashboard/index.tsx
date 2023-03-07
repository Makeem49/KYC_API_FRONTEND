import React, { useState } from 'react';
import Header from './header';
import Card from './cards';
import Chart from './chart';
import RecentTransaction from './recent transaction';
import TransactionStatus from './transaction status';
import ChanneSource from './channel source';
import WalletBallance from './wallet balance';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { ArrowDown2 } from 'iconsax-react';
import { useQueryClient } from 'react-query';

const Dashboard = () => {
  const queryClient = useQueryClient();
  const [showProviderOpt, setShowProviderOpt] = useState<boolean>(false);

  const decodedDefaultVal: any = localStorage.getItem(
    'decoded-token_providers_name'
  );
  const Decoded: any = localStorage.getItem('decoded-arrays');

  const providersArray = JSON.parse(Decoded);

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
            <div
              onClick={(e) => e.stopPropagation()}
              className='flex relative w-full px-3 justify-end gap-2 text-[14px] font-normal items-center '>
              <p>Switch Provider </p>
              <button
                className={`border flex items-center border-[#BABABA] text-textgrey-darker p-2 rounded-lg ${
                  showProviderOpt
                    ? ' border-afexpurple-regular  '
                    : ' border-transparent'
                }`}
                onClick={() => {
                  console.log('clicked');
                  setShowProviderOpt((s) => !s);
                }}>
                {decodedDefaultVal}
                <ArrowDown2 size='14' color='#2B2930' variant='Bold' />
              </button>

              <ul
                className={`flex gap-1 w-[120px] px-1 py-2 flex-col absolute top-[110%] ring-1 ring-white shadow-md dark:ring-wdark-500 rounded-xl opacity-0 bg-white dark:bg-wdark-300 z-10 max-h-0 overflow-hidden transition-[max-height] duration-300 ${
                  showProviderOpt && 'max-h-[300px] opacity-100 overflow-scroll'
                }`}>
                {providersArray?.providers?.map((el: any) => (
                  <span
                    onClick={() => {
                      localStorage.setItem('decoded-token_providers', el.id);
                      localStorage.setItem(
                        'decoded-token_providers_name',
                        el.name
                      );
                      localStorage.setItem(
                        'decoded-country-code',
                        el.countryCode
                      );
                      window.location.reload();
                      queryClient.invalidateQueries();
                      console.log(localStorage);
                      setShowProviderOpt((s) => !s);
                    }}
                    className='flex gap-1 hover:bg-afexpurple-lighter rounded-lg whitespace-nowrap  text-gray-900 text-base cursor-pointer m-1 py-2 px-2 capitalize'>
                    {' '}
                    {el.name}
                  </span>
                ))}
              </ul>
            </div>
          </div>
          <Header />

          <motion.div
            initial={{ transform: 'translateY(-100%)', opacity: 0 }}
            animate={{ transform: 'translateY(0%)', opacity: 1 }}
            exit={{ opacity: 0, transform: 'translate(0,0)' }}
            transition={{ duration: 2 }}>
            {' '}
            <Card />
          </motion.div>

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
        </div>

        {/* Right Section */}

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
      </div>
    </AnimatePresence>
  );
};

export default Dashboard;

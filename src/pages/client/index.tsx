import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { t } from 'i18next';
import { ArrowDown2, ArrowLeft } from 'iconsax-react';
import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { Link, Navigate } from 'react-router-dom';

import { useGetTransactionList } from '../../queries';
import { useDebouncedEffect } from '../../utils/functions';
import ClientCard from './components/cards';
import ClientList from './components/client_list';
import RecentSearch from './components/recent_search';
import TransactionCount from './components/transaction_count';
import TransactionValue from './components/transaction_value';

function Client() {
  const queryClient = useQueryClient();
  const { isError } = useGetTransactionList();
  const [showProviderOpt, setShowProviderOpt] = useState<boolean>(false);

  useDebouncedEffect(
    () => {
      document.addEventListener('click', () => {
        setShowProviderOpt(false);
      });

      return () => {
        document.removeEventListener('click', () => {
          setShowProviderOpt(false);
        });
      };
    },
    [],
    50
  );

  if (isError) return <Navigate to='/login' />;

  const decodedDefaultVal: any = localStorage.getItem(
    'decoded-token_providers_name'
  );
  const Decoded: any = localStorage.getItem('decoded-arrays');

  const providersArray = JSON.parse(Decoded);

  return (
    <AnimatePresence>
      <div className='w-full h-[100vh] flex'>
        {/* Left Section */}
        <div className='w-[68%] h-[100%] flex flex-col gap-14 overflow-y-auto p-10'>
          {/* Title */}
          <div className='flex justify-between items-center'>
            <div className='flex w-full flex-col'>
              <h2 className='text-textgrey-darker dark:text-afexdark-extralight  text-[18px] font-bold '>
                {t('Clients')}
              </h2>
              <p className='flex items-center gap-1 text-textgrey-normal'>
                <Link className='flex items-center gap-1' to='/'>
                  {' '}
                  <ArrowLeft className=' w-5' />
                  <span>{t('Home')}</span>
                </Link>{' '}
                <span>/</span>
                <span className=' text-textgrey-dark'>{t('Clients')}</span>
              </p>
            </div>
            <div
              onClick={(e) => e.stopPropagation()}
              className='flex relative w-full px-3 justify-end gap-2 text-[14px] font-normal items-center '>
              <p>{t('Switch Provider')}</p>
              <button
                className={`border flex items-center border-[#BABABA] text-textgrey-darker  dark:text-afexdark-lighter p-2 rounded-lg ${
                  showProviderOpt ? 'border-[#BABABA]' : 'border-[#BABABA]'
                }`}
                onClick={() => {
                  console.log('clicked');
                  setShowProviderOpt((s) => !s);
                }}>
                {decodedDefaultVal}
                <ArrowDown2 size='14' color='#2B2930' variant='Bold' />
              </button>

              <ul
                className={`flex gap-1 w-[160px] px-1 py-2 flex-col absolute top-[110%] ring-1 ring-white shadow-md dark:ring-wdark-500 rounded-xl opacity-0 bg-white dark:bg-afexdark-darkest dark:text-afexdark-regular z-10 max-h-0 overflow-hidden transition-[max-height] duration-300 ${
                  showProviderOpt && 'max-h-[300px] opacity-100 overflow-scroll'
                }`}>
                {providersArray?.providers?.map((el: any, index: any) => (
                  <span
                    key={index}
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
                    className='flex gap-1 hover:bg-afexpurple-lighter rounded-lg whitespace-nowrap  text-gray-900 dark:text-afexdark-regular text-base cursor-pointer m-1 py-2 px-2 capitalize'>
                    {' '}
                    {el.name}
                  </span>
                ))}
              </ul>
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
              <ClientList />
            </motion.div>
          }
        </div>

        {/* Right Section */}

        {
          <motion.div
            className='bg-white dark:bg-afexdark-darkest flex flex-col gap-14 p-8 h-[100%] overflow-y-auto w-[32%]'
            initial={{ transform: 'translateX(100%)', opacity: 0 }}
            animate={{ transform: 'translateX(0%)', opacity: 1 }}
            exit={{ opacity: 0, transform: 'translate(0,0)' }}
            transition={{ duration: 2 }}>
            <div className='bg-white  dark:bg-afexdark-darkest flex flex-col gap-14'>
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

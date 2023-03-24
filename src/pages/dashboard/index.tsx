import React, { useState } from 'react';
import Header from './header';
import Card from './cards';
import Chart from './chart';
import RecentTransaction from './recent-transaction';
import TransactionStatus from './transaction-status';
import ChanneSource from './channe-source';
import WalletBallance from './wallet-balance';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { ArrowDown2 } from 'iconsax-react';
import { useQueryClient } from 'react-query';
import { useTranslation } from 'react-i18next';
import ActionSelect from '../../components/action-select';

const Dashboard = () => {
  const queryClient = useQueryClient();
  const [showProviderOpt, setShowProviderOpt] = useState<boolean>(false);
  const [showLangOpt, setShowLangOpt] = useState<boolean>(false);
  const decodedDefaultVal: any = localStorage.getItem(
    'decoded-token_providers_name'
  );
  const Decoded: any = localStorage.getItem('decoded-arrays');

  const providersArray = JSON.parse(Decoded);
  console.log(providersArray);
  const { i18n, t } = useTranslation();
  const [locale, setLocale] = useState<string>(i18n.language);

  const changeLanguage = [
    {
      label: 'EN',
      lang: 'en',
    },
    {
      label: 'FR',
      lang: 'fr',
    },
    {
      label: 'SW',
      lang: 'sw',
    },
  ];

  const langVal: any = localStorage.getItem('default_lang');
  const [showVal, setShowVal] = useState<string>(langVal);

  console.log(langVal, 'is it on');

  return (
    <AnimatePresence>
      <div className='w-full h-[100vh] overflow-y-auto flex'>
        {/* Left Section */}
        <div className='w-[68%] h-[100vh] flex flex-col gap-14 overflow-y-auto p-10'>
          {/* Title */}
          <div className='flex w-full justify-between items-center'>
            <h2 className=' text-textgrey-darker dark:text-afexdark-extralight min-w-[200px] text-[18px] font-bold '>
              {t('Dashboard')}
            </h2>
            {/* SWITCHER DROPDOWN */}
            <div
              onClick={(e) => e.stopPropagation()}
              className='flex relative w-full px-3 dark:text-afexdark-regular  justify-end gap-2 text-[14px] font-normal items-center '>
              <p>{t('Switch Provider')} </p>

              <button
                className={`border flex items-center border-[#BABABA] text-textgrey-darker  dark:text-afexdark-lighter  p-2 rounded-lg ${
                  showProviderOpt ? 'border-[#BABABA]' : ' border-[#BABABA]'
                }`}
                onClick={() => {
                  console.log('clicked');
                  setShowProviderOpt((s) => !s);
                }}>
                {decodedDefaultVal}
                <ArrowDown2 size='14' color='#2B2930' variant='Bold' />
              </button>

              <ul
                className={`flex z-40 gap-1 w-[120px] px-1 py-2 flex-col absolute top-[110%] ring-1 ring-white shadow-md dark:ring-wdark-500 rounded-xl opacity-0 bg-white dark:bg-afexdark-darkest dark:text-afexdark-regular max-h-0 overflow-hidden transition-[max-height] duration-300 ${
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
                    className='flex gap-1 hover:bg-afexpurple-lighter rounded-lg whitespace-nowrap  text-gray-900 dark:text-afexdark-regular  text-base cursor-pointer m-1 py-2 px-2 capitalize'>
                    {' '}
                    {el.name}
                  </span>
                ))}
              </ul>
            </div>
            {/* LANGUAGE TRANSLATION */}
            <div
              onClick={(e) => e.stopPropagation()}
              className='flex relative px-1 min-w-[50px] justify-end gap-2 text-[14px] font-normal items-center '>
              <button
                className={`border flex items-center border-[#BABABA] text-textgrey-darker  dark:text-afexdark-lighter  p-2 rounded-lg ${
                  showLangOpt ? 'border-[#BABABA] ' : 'border-[#BABABA]'
                }`}
                onClick={() => {
                  setShowLangOpt((s) => !s);
                }}>
                {showVal}
                <ArrowDown2 size='14' color='#2B2930' variant='Bold' />
              </button>

              <ul
                className={`flex gap-1 w-[160px] px-1 py-2 flex-col absolute top-[110%] ring-1 ring-white shadow-md dark:ring-wdark-500 rounded-xl opacity-0 bg-white dark:ring-wdark-500  dark:bg-afexdark-darkest z-40 max-h-0 overflow-hidden transition-[max-height] duration-300 ${
                  showLangOpt && 'max-h-[300px] opacity-100 overflow-scroll'
                }`}>
                {changeLanguage.map((el: any, index: any) => (
                  <span
                    key={index}
                    onClick={() => {
                      localStorage.setItem('default_lang', el.label);
                      setShowVal(el.label);
                      console.log(localStorage.getItem('default_lang'));
                      setLocale(el.lang);
                      i18n.changeLanguage(el.lang);
                      queryClient.invalidateQueries();
                      setShowLangOpt((s) => !s);
                    }}
                    className='flex gap-1 hover:bg-afexpurple-lighter rounded-lg whitespace-nowrap  text-gray-900 dark:text-afexdark-regular  text-base cursor-pointer m-1 py-2 px-2 capitalize'>
                    {' '}
                    {el.label}
                  </span>
                ))}
              </ul>
            </div>
            <ActionSelect
              className='hidden'
              data={[
                {
                  label: 'EN',
                  function: () => {
                    setLocale('en');
                    i18n.changeLanguage('en');
                  },
                },

                {
                  label: 'FR',
                  function: () => {
                    setLocale('fr');
                    i18n.changeLanguage('fr');
                  },
                },
              ]}
              label={locale?.toUpperCase()}
              type='button'
            />
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
          className='bg-white dark:bg-afexdark-darkest flex flex-col gap-14 p-8 h-[100%] overflow-y-auto w-[32%]'
          initial={{ transform: 'translateX(100%)', opacity: 0 }}
          animate={{ transform: 'translateX(0%)', opacity: 1 }}
          exit={{ opacity: 0, transform: 'translate(0,0)' }}
          transition={{ duration: 2 }}>
          <div className='bg-white  dark:bg-afexdark-darkest flex flex-col gap-14'>
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

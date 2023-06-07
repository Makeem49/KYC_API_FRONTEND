import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { ArrowDown2 } from 'iconsax-react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQueryClient } from 'react-query';

// import ActionSelect from '../../components/action-select';
import { useDebouncedEffect } from '../../utils/functions';
import Card from './cards';
import ChanneSource from './channe-source';
import Chart from './chart';
import Header from './header';
import RecentTransaction from './recent-transaction';
import TransactionStatus from './transaction-status';
import WalletBallance from './wallet-balance';

const Dashboard = () => {
  const queryClient = useQueryClient();
  const [showProviderOpt, setShowProviderOpt] = useState<boolean>(false);
  const [showLangOpt, setShowLangOpt] = useState<boolean>(false);
  const decodedDefaultVal: any = localStorage.getItem(
    'decoded-token_providers_name'
  );
  const Decoded: any = localStorage.getItem('decoded-arrays');
  const providersArray = JSON.parse(Decoded);
  const { i18n, t } = useTranslation();
  const [, setLocale] = useState<string>(i18n.language);

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

  useDebouncedEffect(
    () => {
      document.addEventListener('click', () => {
        setShowProviderOpt(false);
        setShowLangOpt(false);
      });

      return () => {
        document.removeEventListener('click', () => {
          setShowProviderOpt(false);
          setShowLangOpt(false);
        });
      };
    },
    [],
    50
  );
  return (
    <AnimatePresence>
      <div className="w-full overflow-y-scroll h-[100vh] md:flex">
        {/* Left Section */}
        <div className="w-full md:w-[68%] md:h-[100vh] flex flex-col gap-14 overflow-y-scroll p-2 md:p-10">
          {/* Title */}
          <div className="flex w-full md:justify-between items-center">
            <h2 className=" text-textgrey-darker dark:text-afexdark-extralight  text-[14px] md:text-[18px] font-bold ">
              {t('Dashboard')}
            </h2>
            {/* SWITCHER DROPDOWN */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex relative w-full px-3 dark:text-textgrey-normal  justify-end gap-2 text-[10px] md:text-[14px] font-normal items-center ">
              <p>{t('Switch Provider')} </p>

              <button
                className={`border flex items-center border-[#BABABA] text-textgrey-darker  dark:text-afexdark-lighter  p-2 rounded-lg ${
                  showProviderOpt ? 'border-[#BABABA]' : ' border-[#BABABA]'
                }`}
                onClick={() => {
                  setShowProviderOpt((s) => !s);
                }}>
                {decodedDefaultVal}
                <ArrowDown2 size="10" color="#2B2930" variant="Bold" />
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

                      setShowProviderOpt((s) => !s);
                    }}
                    className="flex gap-1 hover:bg-afexpurple-lighter rounded-lg whitespace-nowrap dark:text-textgrey-normal text-[10px] md:text-[14px] cursor-pointer m-1 py-2 px-2 capitalize">
                    {' '}
                    {el.name}
                  </span>
                ))}
              </ul>
            </div>
            {/* LANGUAGE TRANSLATION */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex relative px-1 min-w-[50px] justify-end gap-2 text-[14px] font-normal items-center ">
              <button
                className={`border flex items-center border-[#BABABA] text-textgrey-darker  dark:text-afexdark-lighter  p-2 rounded-lg ${
                  showLangOpt ? 'border-[#BABABA] ' : 'border-[#BABABA]'
                }`}
                onClick={() => {
                  setShowLangOpt((s) => !s);
                }}>
                {showVal}
                <ArrowDown2 size="14" color="#2B2930" variant="Bold" />
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

                      setLocale(el.lang);
                      i18n.changeLanguage(el.lang);
                      queryClient.invalidateQueries();
                      setShowLangOpt((s) => !s);
                    }}
                    className="flex gap-1 hover:bg-afexpurple-lighter rounded-lg whitespace-nowrap  text-gray-900 dark:text-textgrey-normal  text-base cursor-pointer m-1 py-2 px-2 capitalize">
                    {' '}
                    {el.label}
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
            className="flex flex-col gap-14"
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
          className="bg-white dark:bg-afexdark-darkest md:flex md:flex-col gap-14 md:p-8 md:h-[100%] overflow-y-auto w-full md:w-[32%]"
          initial={{ transform: 'translateX(100%)', opacity: 0 }}
          animate={{ transform: 'translateX(0%)', opacity: 1 }}
          exit={{ opacity: 0, transform: 'translate(0,0)' }}
          transition={{ duration: 2 }}>
          <div className="bg-white dark:bg-afexdark-verydark md:dark:bg-afexdark-darkest flex flex-col gap-14">
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

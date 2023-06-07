import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { t } from 'i18next';
import React from 'react';

import ActivityStream from './components/activity stream';
import VirtualCards from './components/cards2';
import WalletCards from './components/wallet cards';

const TrackerDashboard = () => {
  return (
    <AnimatePresence>
      <div className="w-full h-[100vh]  flex">
        {/* Left Section */}
        <div className="w-full h-[100vh] flex flex-col gap-6  overflow-y-scroll md:p-10">
          {/* Title */}

          <div className="flex justify-between items-center">
            <div className="flex w-full flex-col">
              <h2 className="dark:text-afexdark-lighter text-[18px] font-bold ">
                {t('Tracker System')}
              </h2>
            </div>
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
            className="w-full flex flex-col gap-4 p-8 bg-[#ffff] dark:bg-afexdark-darkest rounded-lg"
            initial={{ transform: 'translateY(100%)', opacity: 0 }}
            animate={{ transform: 'translateY(0%)', opacity: 1 }}
            exit={{ opacity: 0, transform: 'translate(0,0)' }}
            transition={{ duration: 2 }}>
            {' '}
            <ActivityStream />
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TrackerDashboard;

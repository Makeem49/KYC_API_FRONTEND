import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { t } from 'i18next';
import { ArrowLeft } from 'iconsax-react';
import { Link } from 'react-router-dom';

import RefreshBanks from './components/refresh_banks';
import Table from './components/table';
import UpdateRemoteBanks from './components/update_banks';

const Banks = () => {
  return (
    <AnimatePresence>
      <div className="w-full h-[100vh]  flex">
        <div className="w-full h-[100vh] flex flex-col gap-14 overflow-y-scroll p-10">
          {/* Title */}
          <div className="flex w-full justify-between items-center">
            <div className="flex justify-between items-center">
              <div className="flex w-full flex-col">
                <h2 className="dark:text-afexdark-lighter text-[18px] font-bold ">
                  {t('Banks')}
                </h2>
                <div className="flex items-center gap-1 text-textgrey-normal">
                  <span>
                    <Link className="flex items-center gap-1" to="/">
                      {' '}
                      <ArrowLeft className=" w-5" />
                      <span>{t('Home')}</span>
                    </Link>{' '}
                  </span>
                  <span>/</span>

                  <span className=" min-w-[180px] text-textgrey-dark">
                    {t('Banks')}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex w-full px-3 justify-end gap-4 text-[14px] font-normal items-center ">
              <RefreshBanks />
              <UpdateRemoteBanks />
            </div>
          </div>

          {/* TABLE */}

          <motion.div
            initial={{ transform: 'translateY(100%)', opacity: 0 }}
            animate={{ transform: 'translateY(0%)', opacity: 1 }}
            exit={{ opacity: 0, transform: 'translate(0,0)' }}
            transition={{ duration: 2 }}>
            <div className="w-full flex flex-col gap-4 p-8 bg-[#ffff] dark:bg-afexdark-darkest rounded-lg">
              <Table />
            </div>{' '}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Banks;

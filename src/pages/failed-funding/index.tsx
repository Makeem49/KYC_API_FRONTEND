import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { t } from 'i18next';
import { ArrowLeft } from 'iconsax-react';
import { Link } from 'react-router-dom';

import FailedFunding from './components/table';

const FailedFundRequest = () => {
  return (
    <AnimatePresence>
      <div className="w-full h-[100vh] flex">
        <div className="w-full h-[100vh] flex flex-col gap-14 overflow-y-scroll p-10">
          {/* Title */}
          <div className="flex w-full justify-between items-center">
            <div className="flex justify-between items-center">
              <div className="flex w-full flex-col">
                <h2 className="dark:text-afexdark-lighter text-[18px] font-bold ">
                  {t('Failed Fund Request')}
                </h2>
                <div className="flex items-center gap-1 text-textgrey-normal">
                  <span>
                    <Link className="flex items-center gap-1" to="/">
                      {' '}
                      <ArrowLeft className=" w-5" />
                      <span>{t('Home')}</span>
                    </Link>{' '}
                  </span>
                  <Link to="/tracker-dashboard">
                    {' '}
                    <span>/Tracker System</span>
                  </Link>

                  <span className=" min-w-[180px] text-textgrey-dark">
                    /{t('Failed Fund Request')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* TABLE */}

          <motion.div
            initial={{ transform: 'translateY(100%)', opacity: 0 }}
            animate={{ transform: 'translateY(0%)', opacity: 1 }}
            exit={{ opacity: 0, transform: 'translate(0,0)' }}
            transition={{ duration: 2 }}>
            <div className="w-full flex flex-col gap-4 p-8 bg-[#ffff] dark:bg-afexdark-darkest rounded-lg">
              <FailedFunding />
            </div>{' '}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default FailedFundRequest;

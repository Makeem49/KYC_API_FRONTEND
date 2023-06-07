import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { t } from 'i18next';
import { ArrowLeft } from 'iconsax-react';
import React from 'react';
import { Link } from 'react-router-dom';

import { SingleClientProvider } from './components/context/single_user.ctx';
// import TaskBar from './components/task bar';
import AddUser from './components/modal/add user';
import Table from './components/table';

const ClientProvider = () => {
  return (
    <AnimatePresence>
      <SingleClientProvider>
        <div className="w-full h-[100vh] flex">
          <div className="w-full h-[100vh] flex flex-col gap-14 overflow-y-scroll md:p-10">
            {/* Title */}
            <div className="flex w-full justify-between items-center">
              {/* <div className='flex w-full flex-col'>
                <h2 className=' text-textgrey-darker text-[18px] font-bold '>
                  Clients' Provider
                </h2>
              </div> */}
              <div className="flex justify-between items-center">
                <div className="flex w-full flex-col">
                  <h2 className="dark:text-afexdark-lighter text-[18px] font-bold ">
                    {t('Client Providers')}
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

                    <span className=" md:min-w-[180px] text-textgrey-dark">
                      {t('Client Providers')}
                    </span>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex md:w-full md:px-3 md:justify-end gap-4 text-[14px] font-normal items-center ">
                <AddUser />
              </div>
            </div>

            {/* TABLE */}

            <motion.div
              initial={{ transform: 'translateY(100%)', opacity: 0 }}
              animate={{ transform: 'translateY(0%)', opacity: 1 }}
              exit={{ opacity: 0, transform: 'translate(0,0)' }}
              transition={{ duration: 2 }}>
              <div className="w-full flex flex-col gap-4 p-8 bg-[#ffff] dark:bg-afexdark-darkest rounded-lg">
                {/* <TaskBar /> */}
                <Table />
              </div>{' '}
            </motion.div>
          </div>
        </div>
      </SingleClientProvider>
    </AnimatePresence>
  );
};

export default ClientProvider;

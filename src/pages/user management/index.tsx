import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown2, ArrowLeft } from 'iconsax-react';
import AddUser from './components/modal/add user';
// import TaskBar from './components/task bar';
import Table from './components/table';
import { SingleUserProvider } from './components/context/single_user.ctx';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { useQuery, useQueryClient } from 'react-query';
import { get_users_query } from '../../queries/user_management';
import { t } from 'i18next';

const UserManagement = () => {
  const queryClient = useQueryClient();
  const [showProviderOpt, setShowProviderOpt] = useState<boolean>(false);

  const decodedDefaultVal: any = localStorage.getItem(
    'decoded-token_providers_name'
  );
  const Decoded: any = localStorage.getItem('decoded-arrays');

  const providersArray = JSON.parse(Decoded);

  const { data: list } = useQuery(get_users_query());
  console.log(list, 'list exist');
  return (
    <AnimatePresence>
      <SingleUserProvider>
        <div className='w-full h-[100vh]  overflow-y-auto flex'>
          <div className='w-full h-[100vh] flex flex-col gap-14 overflow-y-auto p-10'>
            {/* Title */}
            <div className='flex w-full justify-between p-5 items-center'>
              <div className='flex w-full flex-col'>
                <h2 className=' dark:text-afexdark-lighter text-[18px] font-bold '>
                  {t('User Management')}
                </h2>
                <p className='flex items-center gap-1 text-textgrey-normal'>
                  <Link className='flex items-center gap-1' to='/'>
                    {' '}
                    <ArrowLeft className=' w-5' />
                    <span> {t('Home')} </span>
                  </Link>
                  <span>/</span>
                  <span className=' text-textgrey-dark'>
                    {t('User Management')}
                  </span>
                </p>
              </div>

              <div className='flex w-full justify-between px-3 text-[14px] font-normal items-center '>
                <div
                  onClick={(e) => e.stopPropagation()}
                  className='flex relative w-full px-3 justify-end gap-2 text-[14px]  dark:text-afexdark-dark font-normal items-center '>
                  <p>{t('Switch Provider')}</p>
                  <button
                    className={`border flex items-center border-[#BABABA] text-textgrey-darker  dark:text-afexdark-lighter p-2 rounded-lg ${
                      showProviderOpt ? 'border-[#BABABA]' : 'border-[#BABABA]'
                    }`}
                    onClick={() => {
                      setShowProviderOpt((s) => !s);
                    }}>
                    {decodedDefaultVal}
                    <ArrowDown2 size='14' color='#2B2930' variant='Bold' />
                  </button>

                  <ul
                    className={`flex gap-1 w-[120px] px-1 py-2 flex-col absolute top-[110%] ring-1 ring-white shadow-md dark:ring-wdark-500 rounded-xl opacity-0 bg-white dark:bg-wdark-300 z-10 max-h-0 overflow-hidden transition-[max-height] duration-300 ${
                      showProviderOpt &&
                      'max-h-[300px] opacity-100 overflow-scroll'
                    }`}>
                    {providersArray?.providers?.map((el: any, index: any) => (
                      <span
                        key={index}
                        onClick={() => {
                          localStorage.setItem(
                            'decoded-token_providers',
                            el.id
                          );
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
                <AddUser />
              </div>
            </div>

            {/* TABLE */}

            <motion.div
              initial={{ transform: 'translateY(100%)', opacity: 0 }}
              animate={{ transform: 'translateY(0%)', opacity: 1 }}
              exit={{ opacity: 0, transform: 'translate(0,0)' }}
              transition={{ duration: 2 }}>
              <div className='w-full flex flex-col gap-4 p-8 bg-[#ffff]  dark:bg-afexdark-darkest rounded-lg'>
                {/* <TaskBar /> */}
                <Table />
              </div>
            </motion.div>
          </div>
        </div>
      </SingleUserProvider>
    </AnimatePresence>
  );
};

export default UserManagement;

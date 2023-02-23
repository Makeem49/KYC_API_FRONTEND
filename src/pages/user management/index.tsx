import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown2, ArrowLeft } from 'iconsax-react';
import AddUser from './components/modal/add user';
// import TaskBar from './components/task bar';
import Table from './components/table';
import { SingleUserProvider } from './components/context/single_user.ctx';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { useQueryClient } from 'react-query';

const UserManagement = () => {
  const queryClient = useQueryClient();
  const [showProviderOpt, setShowProviderOpt] = useState<boolean>(false);

  const decodedDefaultVal: any = localStorage.getItem(
    'decoded-token_providers_name'
  );
  const Decoded: any = localStorage.getItem('decoded-arrays');

  const providersArray = JSON.parse(Decoded);
  return (
    <AnimatePresence>
      <SingleUserProvider>
        <div className='w-full h-[100vh]  overflow-y-auto flex'>
          <div className='w-full h-[100vh] flex flex-col gap-14 overflow-y-auto p-10'>
            {/* Title */}
            <div className='flex w-full justify-between p-5 items-center'>
              <div className='flex w-full flex-col'>
                <h2 className='  text-textgrey-Bold text-[18px] font-bold '>
                  User Manangement
                </h2>
                <p className='flex items-center gap-1 text-textgrey-normal'>
                  <Link className='flex items-center gap-1' to='/'>
                    {' '}
                    <ArrowLeft className=' w-5' />
                    <span> Home </span>
                  </Link>
                  <span>/</span>
                  <span className=' text-textgrey-dark'>User Management</span>
                </p>
              </div>

              <div className='flex w-full justify-between px-3 text-[14px] font-normal items-center '>
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
                    {providersArray?.providers?.map((el: any) => (
                      <span
                        onClick={() => {
                          localStorage.setItem(
                            'decoded-token_providers',
                            el.id
                          );
                          localStorage.setItem(
                            'decoded-token_providers_name',
                            el.name
                          );
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
              <div className='w-full flex flex-col gap-4 p-8 bg-[#ffff] rounded-lg'>
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

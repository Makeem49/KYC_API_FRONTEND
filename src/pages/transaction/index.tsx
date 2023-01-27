import React from 'react';
import { Link } from 'react-router-dom';
import TransactionCards from './components/cards';
import { ArrowLeft } from 'iconsax-react';
import TransactionTable from './components/transaction table';
import TransactionCount from './components/transaction count';
import TransactionValue from './components/transaction value';
import TopTransaction from './components/top transaction';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import { get_transaction_list_querry } from '../../queries/transaction_stats';

function Transaction() {
  const { data, isError, isLoading } = useQuery(get_transaction_list_querry(1));

  if (isLoading) return <p>Loading....</p>;

  if (isError) return <p>Error!!!</p>;

  console.log(data);

  return (
    <AnimatePresence>
      <div className='w-full h-[100vh]  overflow-y-auto flex'>
        {/* Left Section */}
        <div className='w-[68%] h-[100vh] flex flex-col gap-14 overflow-y-auto p-10'>
          {/* Title */}

          <div className='flex w-full justify-between items-center'>
            <div className='flex w-full flex-col'>
              <h2 className='  text-textgrey-darker text-[18px] font-bold '>
                Transactions
              </h2>
              <p className='flex items-center gap-2 text-textgrey-normal'>
                <Link to='/dashboard'>
                  {' '}
                  <ArrowLeft className=' w-5' />
                </Link>{' '}
                Home/ <span className=' text-textgrey-dark'>Transactions</span>
              </p>
            </div>
          </div>

          <motion.div
            initial={{ transform: 'translateY(-100%)', opacity: 0 }}
            animate={{ transform: 'translateY(0%)', opacity: 1 }}
            exit={{ opacity: 0, transform: 'translate(0,0)' }}
            transition={{ duration: 2 }}>
            {' '}
            <TransactionCards />
          </motion.div>

          <motion.div
            initial={{ transform: 'translateY(100%)', opacity: 0 }}
            animate={{ transform: 'translateY(0%)', opacity: 1 }}
            exit={{ opacity: 0, transform: 'translate(0,0)' }}
            transition={{ duration: 2 }}>
            {' '}
            <TransactionTable data={data!} />
          </motion.div>
        </div>

        {/* Right Section */}

        <motion.div
          className='bg-white flex flex-col gap-14 p-8 h-[100%] overflow-y-auto w-[32%]'
          initial={{ transform: 'translateX(100%)', opacity: 0 }}
          animate={{ transform: 'translateX(0%)', opacity: 1 }}
          exit={{ opacity: 0, transform: 'translate(0,0)' }}
          transition={{ duration: 2 }}>
          <div className='flex flex-col gap-14'>
            <TransactionCount />
            <TransactionValue />
            <TopTransaction />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default Transaction;

import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { t } from 'i18next';
import { ArrowLeft } from 'iconsax-react';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';

import { approve_fund_request } from '../../api';
import { toast } from '../../utils';
import Table from './components/table';

const FundRequest = () => {
  const [getRequestId, setGetRequestId] = useState<any[]>([]);
  const arrayOfIds = getRequestId?.map((el: any) => el.id);
  console.log(arrayOfIds);

  // const approveFundRequestMutation = useMutation(approve_fund_request);
  const queryFundRequests = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => approve_fund_request(arrayOfIds),
    onSuccess: () => {
      queryFundRequests.invalidateQueries({ queryKey: ['fundRequest'] }); // To  invalidate and refetch
    },
  });

  return (
    <AnimatePresence>
      <div className='w-full h-[100vh]  overflow-y-auto flex'>
        <div className='w-full h-[100vh] flex flex-col gap-14 overflow-y-auto p-10'>
          {/* Title */}
          <div className='flex w-full justify-between items-center'>
            <div className='flex justify-between items-center'>
              <div className='flex w-full flex-col'>
                <h2 className='dark:text-afexdark-lighter text-[18px] font-bold '>
                  {t('Fund Request')}
                </h2>
                <div className='flex items-center gap-1 text-textgrey-normal'>
                  <span>
                    <Link className='flex items-center gap-1' to='/'>
                      {' '}
                      <ArrowLeft className=' w-5' />
                      <span>{t('Home')}</span>
                    </Link>{' '}
                  </span>
                  <span>/</span>

                  <span className=' min-w-[180px] text-textgrey-dark'>
                    {t('Fund Request')}
                  </span>
                </div>
              </div>
            </div>

            <div className='flex w-full px-3 justify-end gap-4 text-[14px] font-normal items-center '>
              <button
                onClick={() => {
                  if (getRequestId.length > 0) {
                    mutation.mutate();
                  } else
                    toast(
                      'info',
                      'please select one or more columns to approve'
                    );
                }}
                className=' bg-afexpurple-regular  text-white p-3 rounded-lg cursor-pointer hover:shadow text-base'>
                Approve Fund Request
              </button>
            </div>
          </div>

          {/* TABLE */}

          <motion.div
            initial={{ transform: 'translateY(100%)', opacity: 0 }}
            animate={{ transform: 'translateY(0%)', opacity: 1 }}
            exit={{ opacity: 0, transform: 'translate(0,0)' }}
            transition={{ duration: 2 }}>
            <div className='w-full flex flex-col gap-4 p-8 bg-[#ffff] dark:bg-afexdark-darkest rounded-lg'>
              <Table setGetRequestId={setGetRequestId} />
            </div>{' '}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default FundRequest;

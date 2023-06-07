import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { t } from 'i18next';
import { ArrowLeft } from 'iconsax-react';
import React, { useState } from 'react';
import { BsQuestionCircle } from 'react-icons/bs';
import { useMutation, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';

import { Modal, Tabs } from '@mantine/core';

import { approve_fund_request } from '../../api';
import { toast } from '../../utils';
import PendingRequest from './components/pending_request_table';
import Table from './components/table';

const FundRequest = () => {
  const [getRequestId, setGetRequestId] = useState<any[]>([]);
  const arrayOfIds = getRequestId?.map((el: any) => el.id);

  // const approveFundRequestMutation = useMutation(approve_fund_request);
  const queryFundRequests = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => approve_fund_request(arrayOfIds),
    onSuccess: () => {
      queryFundRequests.invalidateQueries({ queryKey: ['pendingRequest'] }); // To  invalidate and refetch
      queryFundRequests.invalidateQueries({ queryKey: ['fundRequest'] }); // To  invalidate and refetch
    },
  });
  const [opened, setOpened] = useState(false);
  const [showButton, setShowButton] = React.useState(false);

  return (
    <AnimatePresence>
      <div className="w-full h-[100vh] flex">
        <div className="w-full h-[100vh] flex flex-col gap-14 overflow-y-scroll md:p-10">
          {/* Title */}
          <div className="flex w-full justify-between items-center">
            <div className="flex justify-between items-center">
              <div className="flex w-full flex-col">
                <h2 className="dark:text-afexdark-lighter text-[18px] font-bold ">
                  {t('Fund Request')}
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
                    {t('Fund Request')}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex w-full px-3 justify-end gap-4 text-[14px] font-normal items-center ">
              {showButton && (
                <button
                  onClick={() => {
                    if (getRequestId.length > 0) {
                      setOpened((s) => !s);
                    } else
                      toast(
                        'info',
                        'please select one or more columns to approve'
                      );
                  }}
                  className=" bg-afexpurple-regular  text-white p-3 rounded-lg cursor-pointer hover:shadow text-[10px] md:text-base">
                  Approve Fund Request
                </button>
              )}
            </div>
          </div>

          {/* TABLE */}

          <motion.div
            initial={{ transform: 'translateY(100%)', opacity: 0 }}
            animate={{ transform: 'translateY(0%)', opacity: 1 }}
            exit={{ opacity: 0, transform: 'translate(0,0)' }}
            transition={{ duration: 2 }}>
            <div className="w-full flex flex-col gap-4 md:p-8 bg-[#ffff] dark:bg-afexdark-darkest rounded-lg">
              <Tabs defaultValue="fund-request">
                <Tabs.List className="">
                  <Tabs.Tab
                    onClick={() => setShowButton(false)}
                    className="text-afexdark-darkest dark:text-afexdark-light text-sm md:text-lg"
                    value="fund-request">
                    Approved Requests
                  </Tabs.Tab>
                  <Tabs.Tab
                    onClick={() => setShowButton(true)}
                    value="pending-request"
                    className="text-afexdark-darkest dark:text-afexdark-light text-sm md:text-lg">
                    Pending Requests
                  </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="fund-request" pt="xs">
                  <Table />
                </Tabs.Panel>

                <Tabs.Panel value="pending-request" pt="xs">
                  <PendingRequest setGetRequestId={setGetRequestId} />
                </Tabs.Panel>
              </Tabs>
            </div>{' '}
          </motion.div>
        </div>

        <Modal
          size="25%"
          withCloseButton={false}
          centered
          opened={opened}
          onClose={() => setOpened((s) => !s)}>
          {/* Map Component */}
          <div className="flex flex-col mt-0 items-center gap-4 text-center p-8">
            <BsQuestionCircle color="#E1891C" size={70} />

            <p className="text-[14px] text-gray-400 rounded-md">
              Are you sure you would like to approve request?
            </p>

            <div className="flex w-full px-10 justify-center gap-4">
              <button
                onClick={() => {
                  if (getRequestId.length > 0) {
                    mutation.mutate();
                  } else
                    toast(
                      'info',
                      'please select one or more columns to approve'
                    );
                  setOpened((s) => !s);
                }}
                className="w-full bg-[#7738DD] p-4 rounded-lg text-white">
                yes, please
              </button>
              <button
                onClick={() => {
                  setOpened((s) => !s);
                }}
                className="w-full p-4 hover:shadow rounded-lg">
                no, return
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </AnimatePresence>
  );
};

export default FundRequest;

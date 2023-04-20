import React, { useState } from 'react';
import { BsQuestionCircle } from 'react-icons/bs';
import { useQuery, useQueryClient } from 'react-query';

import { Modal } from '@mantine/core';

import { update_remote_banks } from '../../../../api';

const UpdateRemoteBanks = () => {
  const [opened, setOpened] = useState(false);
  const queryProvider = useQueryClient();
  const queryClient = useQueryClient();

  const { isSuccess } = useQuery('updateRemoteBanks', update_remote_banks, {
    enabled: false, // disable automatic query execution
  });

  const handleUpdateBanks = () => {
    // manually trigger the query when the button is clicked
    queryClient.refetchQueries('updateRemoteBanks');
    if (isSuccess) {
      setOpened((s) => !s);
      queryProvider.invalidateQueries({ queryKey: ['banks'] });
    }
  };

  return (
    <>
      <button
        onClick={() => {
          setOpened((s) => !s);
        }}
        className=' bg-afexpurple-regular text-white p-3 rounded-lg cursor-pointer hover:shadow text-base'>
        UPDATE REMOTE BANKS
      </button>

      {/* {isSuccess &&
        toast('success', 'The banks have been updated successfully!')} */}

      <Modal
        size='25%'
        withCloseButton={false}
        centered
        opened={opened}
        onClose={() => setOpened((s) => !s)}>
        {/* Map Component */}
        <div className='flex flex-col mt-0 items-center gap-4 text-center p-8'>
          <BsQuestionCircle color='#E1891C' size={70} />

          <p className='text-[14px] text-gray-400 rounded-md'>
            Are you sure you would like to update?
          </p>

          <div className='flex w-full px-10 justify-center gap-4'>
            <button
              onClick={() => {
                handleUpdateBanks();
              }}
              className='w-full bg-[#7738DD] p-4 rounded-lg text-white'>
              yes, please
            </button>
            <button
              onClick={() => {
                setOpened((s) => !s);
              }}
              className='w-full p-4 hover:shadow rounded-lg'>
              no, return
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UpdateRemoteBanks;

import React from 'react';
import { useState } from 'react';
import { Modal, Group } from '@mantine/core';

import { BsQuestionCircle } from 'react-icons/bs';
import { BsCheckCircle } from 'react-icons/bs';
import { toggle_token_availability } from '../../../../../api';
import { useMutation, useQueryClient } from 'react-query';
interface AddUserProps extends ModalControllerType {
  data: ClientProviderToken;
}
const DeactivateUser = ({ data, close, show }: AddUserProps) => {
  const [successPrompt, setSuccessPrompt] = useState(false);
  const queryClient = useQueryClient();

  const Isboolean = data.isActive === 'Inactive' ? true : false;

  const mutation = useMutation({
    mutationFn: (payload: { id: number; isActive: boolean }) =>
      toggle_token_availability(payload.id, payload.isActive),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['apiTokens'] }); // To  invalidate and refetch
    },
  });
  return (
    <>
      <Modal
        style={{
          borderRadius: '1px',
        }}
        opened={show}
        onClose={close}
        size='25%'
        withCloseButton={false}
        centered>
        {/* Map Component */}
        <div className='flex flex-col mt-0 gap-4 items-center text-center p-8'>
          {/* <img src={warningIcon} alt='warn' className=' w-24' /> */}

          <BsQuestionCircle color='#E1891C' size={70} />
          {data.isActive === 'Active' ? (
            <p className='text-[14px] text-gray-400 rounded-md'>
              Are you sure you would like to deactivate this provider?
            </p>
          ) : (
            <p className='p-5'>
              {' '}
              Are you sure you would like to activate this provider?
            </p>
          )}
          <div className='flex w-full px-10 justify-center gap-4'>
            <button
              className='w-full bg-[#7738DD] hover:shadow  p-4 rounded-lg text-white'
              onClick={() => {
                mutation.mutate({
                  id: data.id,
                  isActive: Isboolean,
                });
                setSuccessPrompt(true);
                close();
              }}>
              yes, please
            </button>
            <button
              className='w-full p-4 hover:shadow rounded-lg'
              onClick={close}>
              No, return
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        opened={successPrompt}
        onClose={() => setSuccessPrompt(false)}
        withCloseButton={false}
        size='25%'
        centered>
        <div className='flex flex-col  items-center gap-4 text-center p-8'>
          <BsCheckCircle color='#0DBF66' size={70} />
          <p className='p-5'>User has been succcessfully deactivated</p>
          <div className='flex w-full justify-center gap-4'>
            <button
              className=' bg-[#7738DD] p-4 rounded-lg text-white'
              onClick={() => setSuccessPrompt(false)}>
              Ok, got it
            </button>
          </div>
        </div>
      </Modal>

      <Group position='center'></Group>
    </>
  );
};

export default DeactivateUser;

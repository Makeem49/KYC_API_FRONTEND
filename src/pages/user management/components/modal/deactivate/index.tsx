import React from 'react';
import { useState } from 'react';
import { Modal, Group } from '@mantine/core';
import { BsQuestionCircle } from 'react-icons/bs';
import { BsCheckCircle } from 'react-icons/bs';
import { disable_enable_user } from '../../../../../api/users';
import { useMutation, useQueryClient } from 'react-query';
interface AddUserProps extends ModalControllerType {
  data: User;
}

const DeactivateUser = ({ data, close, show }: AddUserProps) => {
  const [successPrompt, setSuccessPrompt] = useState(false);
  const queryClient = useQueryClient();

  const Isboolean = data.isActive === 'Inactive' ? true : false;
  // console.log(Isboolean);

  const mutation = useMutation({
    mutationFn: (payload: { username: string; isActive: boolean }) =>
      disable_enable_user(payload.username, payload.isActive),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] }); // To  invalidate and refetch
    },
  });
  return (
    <>
      <Modal
        opened={show}
        onClose={close}
        size='25%'
        withCloseButton={false}
        centered>
        {/* Map Component */}
        <div className='flex flex-col mt-0 items-center gap-4 text-center p-8'>
          <BsQuestionCircle color='#E1891C' size={70} />

          {data.isActive === 'Active' ? (
            <p className='text-[14px] text-gray-400 rounded-md'>
              Are you sure you would like to deactivate this user?
            </p>
          ) : (
            <p className='p-5'>
              {' '}
              Are you sure you would like to activate this user?
            </p>
          )}

          <div className='flex w-full px-10 justify-center gap-4'>
            <button
              className='w-full bg-[#7738DD] p-4 rounded-lg text-white'
              onClick={() => {
                // const updateUser: any = { isActive: Isboolean };
                mutation.mutate({
                  username: data.username,
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
              no, return
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        opened={successPrompt}
        onClose={() => setSuccessPrompt(false)}
        size='25%'
        withCloseButton={false}
        centered>
        <div className='flex flex-col  items-center gap-4 text-center p-8'>
          <BsCheckCircle color='#0DBF66' size={70} />
          {data.isActive === 'Active' ? (
            <p className='text-[14px] text-gray-400 rounded-md'>
              User has been succcessfully deactivated
            </p>
          ) : (
            <p className='p-5'> User has been succcessfully activated</p>
          )}

          <div className='flex w-full justify-center gap-4'>
            <button
              className=' bg-[#7738DD] p-4 rounded-lg text-white'
              onClick={() => {
                setSuccessPrompt(false);
                close();
              }}>
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

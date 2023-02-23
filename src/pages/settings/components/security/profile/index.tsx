import React from 'react';
import { LockSlash } from 'iconsax-react';
import { useQuery } from 'react-query';
import { get_admin_query } from '../../../../../queries/dash_board';

// import { useQueryClient } from 'react-query';
//  useMutation,
// import { request_password_reset } from '../../../../../api';
// import { toast } from '../../../../../utils';

const Profile = () => {
  const { data: user } = useQuery(get_admin_query());

  // const queryProvider = useQueryClient();

  // const mutation = useMutation({
  //   mutationFn: request_password_reset,
  //   onSuccess: () => {
  //     queryProvider.invalidateQueries({ queryKey: ['reset-user'] }); // To  invalidate and refetch
  //     toast(
  //       'success',
  //       'Please check your mail',
  //       'A password reset link will be sent to you shortly'
  //     );
  //   },
  // });

  return (
    <div className=' bg-white flex flex-col bg-[#ffff] w-full p-6 mtrounded'>
      <p className='text-[#000] text-[18px] font-semibold'> Profile</p>

      <div className='w-full flex justify-between items-center border-b py-3 mt-6'>
        <p>Email</p>
        <span>{user!?.email}</span>
        <LockSlash size='15' color='#8f8e91' variant='Bulk' />
      </div>

      <div className='w-full flex justify-between items-center border-b py-3 mt-6'>
        <p>Password</p>
        <span></span>
        <span
          // onClick={() => {
          //   mutation.mutate(user?.email);
          //   console.log(user?.email);
          // }}
          className=' bg-afexpurple-lighter text-afexpurple-regular p-3 rounded-lg cursor-pointer hover:shadow text-base'>
          Reset Password
        </span>
      </div>

      <div className='w-full flex justify-between items-center py-3 mt-6'>
        <p>Role</p>
        <span>{user!?.roles[0]?.name}</span>
        <LockSlash size='15' color='#8f8e91' variant='Bulk' />
      </div>
    </div>
  );
};

export default Profile;

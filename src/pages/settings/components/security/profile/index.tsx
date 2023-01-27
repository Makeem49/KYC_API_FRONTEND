import React from 'react';
import { LockSlash } from 'iconsax-react';
import { useQuery } from 'react-query';
import { get_admin_query } from '../../../../../queries/dash_board';
const Profile = () => {
  const { data: user } = useQuery(get_admin_query());

  return (
    <div className=' bg-white flex flex-col bg-[#ffff] w-full p-6 mtrounded'>
      <p className='text-[#000] text-[18px] font-semibold'> Profile</p>

      <div className='w-full flex justify-between items-center border-b py-3 mt-6'>
        <p>Email</p>
        <span>{user!.email}</span>
        <LockSlash size='15' color='#8f8e91' variant='Bulk' />
      </div>

      <div className='w-full flex justify-between items-center border-b py-3 mt-6'>
        <p>Password</p>
        <span>..............</span>
        <LockSlash size='15' color='#8f8e91' variant='Bulk' />
      </div>

      <div className='w-full flex justify-between items-center py-3 mt-6'>
        <p>Role</p>
        <span>{user!.roles[0].name}</span>
        <LockSlash size='15' color='#8f8e91' variant='Bulk' />
      </div>
    </div>
  );
};

export default Profile;

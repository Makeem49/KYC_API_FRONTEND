import React from 'react';
import { Menu } from '@mantine/core';
import { ArrowDown2 } from 'iconsax-react';

const UserInfo = () => {
  return (
    <div className='w-full flex flex-col gap-3 p-6'>
      {/* AVATAR */}
      <div className='flex flex-col gap-5'>
        <p>Avatar</p>
        {/* BOX */}
        <div className='bg-[#D9D9D9] border-[#FFFF] w-[100px] h-[100px]'></div>

        <p className='text-[14px] font-normal text-[#8F8E91]'>
          Allowed file types: png, jpg, jpeg.
        </p>
      </div>

      {/* INPUT FIELDS */}

      <form className='flex flex-col gap-3'>
        <label className='flex flex-col gap-1'>
          <span className='text-[14px] font-semibold'>Full Name</span>
          <input
            type='text'
            name=''
            id=''
            placeholder='Adamu Adamu'
            className='p-3 rounded-lg text-sm font-normal text-gray-400 border outline-none focus:outline-none bg-[#FFFF] w-full h-[40px]'
          />
        </label>

        <label className='flex flex-col gap-1'>
          <span className='text-[14px] font-semibold'>Email</span>
          <input
            type='text'
            name=''
            id=''
            placeholder='aadamu@afexnigeria.com'
            className='p-3 rounded-lg text-sm font-normal text-gray-400 border outline-none focus:outline-none bg-[#FFFF] w-full h-[40px]'
          />
        </label>

        <label className='flex flex-col gap-1'>
          <span className='text-[14px] font-semibold'>Phone number</span>
          <div className='flex gap-3'>
            <input
              type='number'
              name=''
              id=''
              placeholder='+234'
              className='p-3 rounded-lg text-sm font-normal text-gray-400 border outline-none focus:outline-none bg-[#FFFF] w-[70px] h-[40px]'
            />

            <input
              type='number'
              name=''
              id=''
              placeholder='Phone number'
              className='p-3 rounded-lg text-sm font-normal text-gray-400 border outline-none focus:outline-none bg-[#FFFF] w-full h-[40px]'
            />
          </div>
        </label>

        <div className='w-full h-full mt-5'>
          <Menu shadow='md' width='90%'>
            <Menu.Target>
              <div className='flex justify-between items-center border p-3 border-[#DADADD] rounded-lg text-left  text-[14px] font-normal text-textgrey-Light hover:bg-white bg-[#ffff] w-full'>
                <span> Select Applicable Role</span>
                <ArrowDown2 size='16' color='#8F8E91' variant='Bold' />
              </div>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item>Payment Analyst</Menu.Item>
              <Menu.Item>Finance Manager</Menu.Item>
              <Menu.Item>Clearing Intern</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>

        <div className='w-full h-full mt-5'>
          <Menu shadow='md' width='90%' position='top'>
            <Menu.Target>
              <div className='flex p-3 justify-between items-center border border-[#DADADD] rounded-lg text-left text-[14px] font-normal text-textgrey-Light hover:bg-white bg-[#ffff] w-full'>
                <span>Set applicable Permissions</span>
                <ArrowDown2 size='16' color='#8F8E91' variant='Bold' />
              </div>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item>Can view transaction log</Menu.Item>
              <Menu.Item>can create admin user </Menu.Item>
              <Menu.Item>can deactivate admin user </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>

        <div className='w-full mt-5 gap-8 flex justify-center'>
          <button className='p-4 rounded-lg bg-[#F0F0F0] text-[#8F8E91]'>
            Discard
          </button>
          <button className='p-4 rounded-lg bg-afexpurple-dark text-[#ffff]'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInfo;

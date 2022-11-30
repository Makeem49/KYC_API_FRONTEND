import React from 'react';
import { NavLink } from 'react-router-dom';
import { Popover } from '@mantine/core';
import { Tooltip } from '@mantine/core';

import {
  HomeHashtag,
  People,
  Book1,
  UserAdd,
  ArrowSwapHorizontal,
  KeyboardOpen,
  Logout,
  Notification,
  Setting2,
} from 'iconsax-react';

import { useAuthCtx } from '../../context';

import cuddieLogo from '../../assets/brand/Cuddie.svg';
import profIcon from '../../assets/images/profile_img.svg';
import NotificationModal from '../notification modal';

function Sidebar() {
  const { logout } = useAuthCtx();

  const routes = [
    {
      to: '/dashboard',
      icon: <HomeHashtag size='20' variant='Bulk' />,
      label: 'Dashboard',
    },
    {
      to: '/client',
      icon: <People size='20' variant='Bulk' />,
      label: 'Client',
    },
    {
      to: '/transaction',
      icon: <Book1 size='20' variant='Bulk' />,
      label: 'Transaction',
    },
    {
      to: '/user_management',
      icon: <UserAdd size='20' variant='Bulk' />,
      label: 'User Management',
    },

    {
      to: '/api_request',
      icon: <ArrowSwapHorizontal size='20' variant='Bulk' />,
      label: 'Api Request',
    },

    {
      to: '/tracker_dashboard',
      icon: <KeyboardOpen size='20' variant='Bulk' />,
      label: 'Tracker Dashboard',
    },
  ];

  const activeStyle =
    'bg-[#FAF8FF] flex items-center border-l-4 border-[#7738DD] text-[#7738DD] w-full p-8';
  const baseStyle =
    'hover:bg-[#FAF8FF] flex items-center hover:text-[#7738DD] text-[#A982EA] opacity-0.5 p-8 w-full';

  return (
    <div className=' relative flex flex-col items-center w-[6%] h-[100vh] text-gray-400 bg-[#FFFFF] shadow-xl p-5 rounded'>
      {/* Cuddie logo */}
      <div className='absolute top-[5%]'>
        <img src={cuddieLogo} alt='cuddi_Logo' className='w-12' />
      </div>

      {/* Dashboard Icons */}

      <div className='absolute top-[17%]  w-full gap-0 justify-between items-center flex flex-col'>
        {routes.map((route) => {
          return (
            <Tooltip
              label={route.label}
              position='right'
              radius='md'
              style={{
                backgroundColor: '#44207E',
                border: 0,
                padding: 12,
                color: '#fffff',
              }}>
              <NavLink
                to={route.to}
                className={({ isActive }) =>
                  isActive ? activeStyle : baseStyle
                }>
                {route.icon}
              </NavLink>
            </Tooltip>
          );
        })}
      </div>

      <div className='absolute bottom-[13%]'>
        <NotificationModal />
      </div>

      {/* Profile */}
      <div className='absolute bottom-[4%]'>
        <Popover
          width={250}
          styles={{
            dropdown: {
              top: '-280% !important',
              left: '160% !important',
            },
          }}>
          <Popover.Target>
            <img src={profIcon} alt='user_icon' />
          </Popover.Target>
          <Popover.Dropdown className='flex flex-col'>
            <div className=' flex items-center text-[12px] text-[#000] font-semibold p-1 gap-2 border-b'>
              <img src={profIcon} alt='user_icon' />
              <p>
                Adamu Adamu <br />{' '}
                <span className=' text-[#bfbdc2]'>makanni@afexnigeria.com</span>
              </p>
            </div>
            <div className='mt-1 p-2'>
              <p className='flex text-[#000] rounded cursor-pointer gap-2 hover:bg-[#F0F0F0] py-1 items-center'>
                <Notification size='16' color='#8f8e91' variant='Bulk' />
                Notification
              </p>
              <NavLink
                to='/settings'
                className='flex text-[#000] rounded cursor-pointer gap-2 hover:bg-[#F0F0F0] py-1 items-center'>
                <Setting2 size='16' color='#8f8e91' variant='Bulk' />
                Settings
              </NavLink>
              <p
                className='flex text-[#000] rounded cursor-pointer gap-2 hover:bg-[#F0F0F0] py-1 items-center'
                onClick={logout}>
                <Logout size='16' color='#8f8e91' variant='Bulk' />
                Logout
              </p>
            </div>
          </Popover.Dropdown>
        </Popover>
      </div>
    </div>
  );
}

export default Sidebar;

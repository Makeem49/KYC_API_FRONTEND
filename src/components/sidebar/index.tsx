import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  HomeHashtag,
  People,
  Book1,
  UserAdd,
  ArrowSwapHorizontal,
  KeyboardOpen,
} from 'iconsax-react';

import cuddieLogo from '../../assets/brand/Cuddie.svg';
import profIcon from '../../assets/images/profile_img.svg';
import { Tooltip } from '@mantine/core';

function Sidebar() {
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

      <div className='absolute top-[19%]  w-full items-center flex flex-col'>
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

      {/* Profile */}
      <div className='absolute bottom-[2%]'>
        <img src={profIcon} alt='user_icon' />
      </div>
    </div>
  );
}

export default Sidebar;

import { t } from 'i18next';
import { Logout, Moon, ProfileCircle, Setting2, Sun1 } from 'iconsax-react';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { NavLink } from 'react-router-dom';

import { Popover } from '@mantine/core';
import { Tooltip } from '@mantine/core';

import cudiLogo from '../../assets/brand/Cudi-Logo.png';
import { useAuthCtx } from '../../context';
import { menu } from '../../context/routes';
import { useThemeCtx } from '../../context/theme_context';
import { get_admin_query } from '../../queries/dash_board';
import NotificationModal from '../notification-modal';

function Sidebar() {
  const { data: user } = useQuery(get_admin_query());
  const { setTheme } = useThemeCtx();

  const { logout } = useAuthCtx();
  const [opened, setOpened] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  // const state = localStorage.getItem('decoded-arrays');
  // const loggedin_user = JSON.parse(state ?? '{}');

  // const loggedin_user = {
  //   name: 'afex-admin',
  //   username: 'afex-admin',
  //   id: 1,
  //   roles: [
  //     {
  //       name: '',
  //       id: 1,
  //     },
  //   ],
  //   permissions: [{ id: 1, name: 'View Clients' }],
  //   providers: [
  //     {
  //       countryCode: 'NG',
  //       name: 'AFTL Nigeria',
  //       id: 1,
  //     },
  //   ],
  //   iat: 1682714929,
  //   exp: 1682887729,
  // };

  // const hideRoute = (required_permissions: string[]) => {
  //   // if (!state || !loggedin_user) return false;
  //   if (loggedin_user!?.roles.find((role: Role) => role.name === 'SYSADMIN'))
  //     return false;

  //   return !required_permissions!?.every((permission) =>
  //     loggedin_user!?.permissions
  //       .map((el: Record<string, any>) => el.name)
  //       .includes(permission)
  //   );
  // };

  const activeStyle =
    'bg-[#F1EBFC] dark:bg-[#2B2930] flex justify-center items-center border-l-4 border-[#7738DD] text-[#7738DD]  w-full p-4 2xl:p-8';
  const baseStyle =
    'hover:bg-[#F1EBFC] justify-center flex items-center hover:text-[#7738DD] dark:hover:bg-[#2B2930] text-[#7738DD] dark:text-[#5D5B60]  opacity-0.5 lg:p-4 2xl:p-8 w-full';

  return (
    <div className=" relative flex flex-col items-center w-full h-[100vh] text-gray-400 bg-[#FFFFF] dark:bg-afexdark-darkest shadow-xl p-5 rounded">
      {/* Cuddie logo */}
      <div className="absolute top-[5%]">
        <img src={cudiLogo} alt="cudiLogo" className="w-10 md:w-16 2xl:w-20" />
      </div>

      {/* Dashboard Icons */}

      <div className="absolute md:top-[12%] 2xl:top-[12%]  w-full gap-0 justify-between items-center flex flex-col">
        {menu?.map((route, index) => {
          return (
            <Tooltip
              key={index}
              label={t(route?.label ?? '')}
              position="right"
              radius="md"
              style={{
                backgroundColor: '#7738DD',
                border: 0,
                padding: 12,
                color: '#fffff',
                display: 'flex',
                flexDirection: 'column',
              }}>
              <NavLink
                to={route.path ?? ''}
                className={({ isActive }) =>
                  isActive ? activeStyle : baseStyle
                }
                end>
                {route.icon}
              </NavLink>
            </Tooltip>
          );
        })}
      </div>

      {/* Profile */}
      <div className="absolute md:bottom-[6%] 2xl:bottom-[3%]">
        <Popover
          width={250}
          opened={opened}
          onClose={() => setOpened(false)}
          styles={{
            dropdown: {
              top: '-480% !important',
              left: '180% !important',
            },
          }}>
          <Popover.Target>
            <ProfileCircle
              variant="Bulk"
              color="#7738DD"
              className="h-[25px] w-[25px] xl:w-[35px] xl:h-[35px]"
              onClick={() => setOpened(true)}
            />
          </Popover.Target>
          <Popover.Dropdown className="flex flex-col">
            <div className=" flex items-center text-[12px] text-[#000] font-semibold p-1 gap-2 border-b  dark:border-afexdark-dark">
              <p>
                <span className="capitalize dark:text-textgrey-normal">
                  {user?.firstName} {user?.lastName}{' '}
                </span>
                <br /> <span className=" text-[#bfbdc2]">{user?.email} </span>
              </p>
            </div>

            <div className=" flex flex-col gap-2 mt-1">
              {/* Notification */}
              <p className="flex text-[#000] dark:text-textgrey-normal dark:hover:bg-[#2B2930]  rounded cursor-pointer gap-2 hover:bg-[#F0F0F0] py-1 items-center">
                <NotificationModal />
              </p>

              {/* Settings */}
              <NavLink
                to="/settings"
                onClick={() => setOpened(false)}
                className="flex w-full text-[#000]  dark:text-textgrey-normal dark:hover:bg-[#2B2930]  rounded cursor-pointer gap-2 hover:bg-[#F0F0F0] py-1 items-center">
                <Setting2 size="16" color="#8f8e91" variant="Bulk" />
                Settings
              </NavLink>

              {/* Themes */}
              {/* TOGGLE LIGHT AND DARK MODE */}
              <div className="flex text-[#000] dark:text-textgrey-normal dark:hover:bg-[#2B2930]  rounded cursor-pointer gap-2 hover:bg-[#F0F0F0] py-1 items-center">
                <Popover
                  width={200}
                  opened={isOpened}
                  styles={{
                    dropdown: {
                      top: '15% !important',
                      left: '102% !important',
                    },
                  }}>
                  <Popover.Target>
                    <button
                      onClick={() => setIsOpened((s) => !s)}
                      className="flex items-center gap-1 text-afexdark-darkest dark:text-textgrey-normal">
                      {' '}
                      <Sun1
                        className="w-[18px] h-[18px] "
                        color="#c1c0c2"
                        variant="Bulk"
                      />
                      Themes
                    </button>
                  </Popover.Target>
                  <Popover.Dropdown className="flex flex-col gap-2">
                    <div className="">
                      <p
                        onClick={() => {
                          setTheme('light');
                          setIsOpened(false);
                          setOpened(false);
                        }}
                        className="flex dark:hover:bg-[#2B2930]  text-[#000] dark:text-textgrey-normal rounded cursor-pointer gap-2 hover:bg-[#F0F0F0] py-1 items-center">
                        <Sun1 size="16" color="#8f8e91" variant="Bulk" />
                        Light
                      </p>
                      <p
                        className="flex dark:hover:bg-[#2B2930]  text-[#000] dark:text-textgrey-normal rounded cursor-pointer gap-2 hover:bg-[#F0F0F0] py-1 items-center"
                        onClick={() => {
                          setTheme('dark');
                          setIsOpened(false);
                          setOpened(false);
                        }}>
                        <Moon size="16" color="#8f8e91" variant="Bulk" />
                        Dark
                      </p>
                    </div>
                  </Popover.Dropdown>
                </Popover>
              </div>

              {/* Logout */}
              <p
                className="flex text-[#000]  dark:text-textgrey-normal dark:hover:bg-[#2B2930]  rounded cursor-pointer gap-2 hover:bg-[#F0F0F0] py-1 items-center"
                onClick={() => {
                  logout();
                  setOpened(false);
                }}>
                <Logout size="16" color="#8f8e91" variant="Bulk" />
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

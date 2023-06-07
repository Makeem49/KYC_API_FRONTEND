import { t } from 'i18next';
import { Logout, Moon, ProfileCircle, Setting2, Sun1 } from 'iconsax-react';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { NavLink } from 'react-router-dom';

import { Burger, Container, Drawer } from '@mantine/core';
import { Popover } from '@mantine/core';
import { Tooltip } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { useAuthCtx } from '../../context';
import { menu } from '../../context/routes';
import { useThemeCtx } from '../../context/theme_context';
import { get_admin_query } from '../../queries/dash_board';
import NotificationModal from '../notification-modal';

function Demo() {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';
  const { data: user } = useQuery(get_admin_query());
  const { setTheme } = useThemeCtx();

  const { logout } = useAuthCtx();
  const [open, setOpened] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const activeStyle =
    'bg-[#F1EBFC] dark:bg-[#2B2930] flex flex-col justify-center items-center border-r-4 border-[#7738DD] text-[#7738DD] w-full p-2';
  const baseStyle =
    'hover:bg-[#F1EBFC] justify-center flex flex-col items-center hover:text-[#7738DD] dark:hover:bg-[#2B2930] text-[#7738DD] dark:text-[#5D5B60]  opacity-0.5 p-2 w-full';

  return (
    <>
      <Burger opened={opened} onClick={toggle} aria-label={label} />

      {opened && (
        <Drawer opened={opened} onClose={toggle} position="left" size={140}>
          <Container className=" bg-white dark:bg-afexdark-darkest">
            <div className=" relative flex flex-col items-center w-full h-[100vh] text-gray-400  dark:bg-afexdark-darkest rounded">
              {/* Dashboard Icons */}

              <div className=" w-full gap-2 justify-between items-center flex flex-col">
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
                        onClick={toggle}
                        to={route.path ?? ''}
                        className={({ isActive }) =>
                          isActive ? activeStyle : baseStyle
                        }
                        end>
                        {route.icon}
                        <span className=" text-[10px]"> {route.label}</span>
                      </NavLink>
                    </Tooltip>
                  );
                })}
              </div>

              {/* Profile */}
              <div className=" absolute bottom-24">
                <Popover
                  width={150}
                  opened={open}
                  onClose={() => {
                    setOpened(false);
                    toggle();
                  }}
                  styles={{
                    dropdown: {
                      top: '-680% !important',
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
                        <br />{' '}
                        <span className=" text-[#bfbdc2]">{user?.email} </span>
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
                          width={140}
                          opened={isOpened}
                          styles={{
                            dropdown: {
                              top: '15% !important',
                              left: '-102% !important',
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
                                <Sun1
                                  size="16"
                                  color="#8f8e91"
                                  variant="Bulk"
                                />
                                Light
                              </p>
                              <p
                                className="flex dark:hover:bg-[#2B2930]  text-[#000] dark:text-textgrey-normal rounded cursor-pointer gap-2 hover:bg-[#F0F0F0] py-1 items-center"
                                onClick={() => {
                                  setTheme('dark');
                                  setIsOpened(false);
                                  setOpened(false);
                                }}>
                                <Moon
                                  size="16"
                                  color="#8f8e91"
                                  variant="Bulk"
                                />
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
          </Container>
        </Drawer>
      )}
    </>
  );
}
export default Demo;

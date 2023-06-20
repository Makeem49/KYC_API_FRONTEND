import { BrifecaseCross, Logout, ProfileCircle, Setting2 } from 'iconsax-react';
import { NavLink } from 'react-router-dom';

import { useAuthCtx } from '../../context';
import { menu } from '../../context/routes';

// import { useThemeCtx } from '../../context/theme_context';
// import NotificationModal from '../notification-modal';

function Sidebar() {
  // const { setTheme } = useThemeCtx();
  const { logout } = useAuthCtx();

  const activeStyle =
    'bg-sinbadKYC-normalGrey text-white font-semibold shadow rounded-3xl flex items-center gap-3 w-[80%] p-3';
  const baseStyle =
    'text-sinbadKYC-lightGrey font-semibold flex items-center gap-3 w-[80%] p-4';

  return (
    <div className=" relative flex flex-col items-center w-full h-[100vh] px-5">
      {/*logo */}
      <div className="absolute flex items-center gap-1 text-sinbadKYC-white font-bold text-2xl top-[4%]">
        <BrifecaseCross
          size="25"
          variant="Bold"
          className=" text-sinbadKYC-background"
        />
        <p>Sinbad KYC</p>
      </div>

      <div className="w-full flex justify-center absolute top-[18%]">
        <div className=" relative text-sinbadKYC-white text-center">
          <ProfileCircle
            variant="Bold"
            className="h-[25px] top-[-140%] left-[30%] absolute bg-sinbadKYC-normalGrey p-1 rounded-full w-[25px] xl:w-[50px] xl:h-[50px] text-sinbadKYC-white"
          />
          <p className=" font-semibold">admin</p>
          <p>admin@gmail.com</p>
        </div>
      </div>

      {/* <NotificationModal />
      <div className="border p-1 rounded-lg border-sinbadKYC-white flex items-center gap-1">
        <p
          onClick={() => {
            setTheme('light');
          }}
          className="flex dark:hover:bg-[#2B2930]   dark:text-textgrey-normal rounded cursor-pointer  hover:bg-[#F0F0F0] py-1 items-center">
          <Sun1 size="16" color="#8f8e91" variant="Bulk" />
        </p>
        <p
          className="flex dark:hover:bg-[#2B2930]   dark:text-textgrey-normal rounded cursor-pointer hover:bg-[#F0F0F0] py-1 items-center"
          onClick={() => {
            setTheme('dark');
          }}>
          <Moon size="16" color="#8f8e91" variant="Bulk" />
        </p>
      </div> */}

      {/* Dashboard Icons */}

      <div className="absolute md:top-[24%] 2xl:top-[24%]  w-full gap-0 justify-between items-center flex flex-col">
        {menu?.map((route, index) => {
          return (
            <NavLink
              key={index}
              to={route.path ?? ''}
              className={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              end>
              <span className=" p-1 shadow-xl rounded-lg active:text-sinbadKYC-white">
                {' '}
                {route.icon}
              </span>
              {route?.label ?? ''}
            </NavLink>
          );
        })}
      </div>

      {/* Profile */}
      <div className="flex gap-6 absolute md:bottom-[6%] 2xl:bottom-[3%]">
        <p
          onClick={() => {
            logout();
          }}>
          <Logout
            size="16"
            className="rounded-lg w-[35px] h-[35px] text-sinbadKYC-background border p-2 border-sinbadKYC-background"
            variant="Bold"
          />
        </p>

        <NavLink to="#">
          <Setting2
            className=" rounded-lg w-[35px] h-[35px] text-sinbadKYC-background border p-2 border-sinbadKYC-background"
            variant="Bold"
          />
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;

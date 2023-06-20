import { BrifecaseCross, ProfileCircle } from 'iconsax-react';
import { NavLink } from 'react-router-dom';

import { menu } from '../../context/routes';
import LogoutModule from './components/logout';

// import { useThemeCtx } from '../../context/theme_context';
// import NotificationModal from '../notification-modal';

function Sidebar() {
  const activeStyle =
    'bg-sinbadKYC-normalGrey text-white font-semibold shadow rounded-3xl flex items-center lg:gap-3 w-[80%] p-1 lg:p-3';
  const baseStyle =
    'text-sinbadKYC-lightGrey font-semibold flex items-center lg:gap-3 w-[80%] p-1 lg:p-3';

  return (
    <div className=" relative flex flex-col items-center w-full h-[100vh] px-5">
      {/*logo */}
      <div className="absolute flex items-center gap-1 text-sinbadKYC-white font-bold text-md lg:text-2xl top-[4%]">
        <BrifecaseCross variant="Bold" className=" text-sinbadKYC-background" />
        <p>Sinbad KYC</p>
      </div>

      {/* Dashboard Icons */}

      <div className="absolute md:top-[10%] 2xl:top-[10%]  w-full gap-0 justify-between items-center flex flex-col">
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

      <div className="flex items-center absolute md:bottom-[6%] border-t xl:px-3  px-1 py-5 w-full border-t-sinbadKYC-background 2xl:bottom-[3%]">
        <div className="w-full flex items-center gap-2 text-sinbadKYC-white ">
          <ProfileCircle
            variant="Bold"
            className=" bg-sinbadKYC-normalGrey p-1 rounded-full w-[15px] h-[15px] lg:w-[25px] lg:h-[25px] xl:w-[50px] xl:h-[50px] text-sinbadKYC-white"
          />
          <div className=" text-[9px] lg:text-[10px] xl:text-[14px]">
            {' '}
            <p className=" font-semibold">admin</p>
            <p>admin@gmail.com</p>
          </div>
        </div>
        <LogoutModule />
      </div>
    </div>
  );
}

export default Sidebar;

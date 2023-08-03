
import { NavLink } from "react-router-dom";

import { menu } from "../../context/routes";
import LogoutModule from "./components/logout";

import avatar from "../../assets/svgs/Avatar.svg";
import headset from '../../assets/svgs/headset-fill.svg'

function Sidebar() {
  const activeStyle =
    "bg-sinbadKYC-darkgreen/10 text-white font-semibold shadow-xl rounded-3xl flex items-center lg:gap-3 w-[80%] p-1 lg:p-3";
  const baseStyle =
    "text-white font-semibold flex items-center lg:gap-3 w-[80%] p-1 lg:p-3";

  return (
    <div className=" relative flex flex-col items-center w-full h-[100vh] px-5">
      {/*logo */}
      <div className="absolute flex items-center gap-1 text-sinbadKYC-lemongreen font-bold text-md lg:text-2xl top-[4%]">
        <p>Sindbad HQ</p>
      </div>

      {/* Dashboard Icons */}

      <div className="absolute md:top-[10%] 2xl:top-[10%]  w-full gap-0 justify-between items-center flex flex-col">
        {menu?.map((route, index) => {
          return (
            <NavLink
              key={index}
              to={route.path ?? ""}
              className={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              end
            >
              <span className=" p-1 shadow-xl rounded-lg active:text-sinbadKYC-white">
                {" "}
                {route.icon}
              </span>
              {route?.label ?? ""}
            </NavLink>
          );
        })}
      </div>
      <div className=" w-full text-base font-medium text-white absolute flex items-center gap-2 py-2 px-4 left-[4%] md:bottom-[16%] 2xl:bottom-[12%]">
      
        <img
            src={headset}
            alt=""
            className=" bg-sinbadKYC-normalGrey p-1 rounded-full w-[15px] h-[15px] lg:w-[25px] lg:h-[25px] xl:w-[35px] xl:h-[35px] text-sinbadKYC-white"
          />
            <p>Support</p>
      </div>

      <div className="flex items-center absolute md:bottom-[6%] left-[6%] border-t  py-2  w-[95%] border-t-sinbadKYC-background 2xl:bottom-[3%]">
        <div className="w-full flex items-center gap-2 ">
          <img
            src={avatar}
            alt=""
            className=" bg-sinbadKYC-normalGrey p-1 rounded-full w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] xl:w-[40px] xl:h-[40px] text-sinbadKYC-white"
          />
          <div className=" text-[9px] xl:text-[12px]">
            {" "}
            <p className=" text-white font-semibold">Olivia Rhye</p>
            <p className=" text-sinbadKYC-bordergrey">olivia@untitledui.com</p>
          </div>
        </div>
        <LogoutModule />
      </div>
    </div>
  );
}

export default Sidebar;

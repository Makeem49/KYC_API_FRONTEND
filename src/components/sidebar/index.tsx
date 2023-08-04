import { NavLink } from "react-router-dom";

import { menu } from "../../context/routes";
import LogoutModule from "./components/logout";

import avatar from "../../assets/svgs/Avatar.svg";
import headset from "../../assets/svgs/headset-fill.svg";

function Sidebar() {
  const activeStyle =
    "bg-sinbadKYC-darkgreen/10 text-white text-[18px] font-semibold shadow-xl rounded-3xl flex items-center lg:gap-3 w-[80%] p-1 lg:p-3";
  const baseStyle =
    "text-white font-semibold text-[18px] flex items-center lg:gap-3 w-[80%] p-1 lg:p-3";

  return (
    <div className=" relative flex flex-col items-center w-full h-[100vh] px-5">
      {/*logo */}
      <div className="absolute flex items-center gap-1 text-sinbadKYC-lemongreen  font-bold text-md lg:text-[28px] top-[4%]">
        <p className="font-montserrat">Sindbad HQ</p>
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
      <div className=" w-full text-[18px] font-medium text-white absolute flex items-center gap-2 py-2 px-4 left-[8%] md:bottom-[16%] 2xl:bottom-[12%]">
        <img
          src={headset}
          alt=""
          className=" bg-sinbadKYC-normalGrey p-1 rounded-full w-[15px] h-[15px] lg:w-[25px] lg:h-[25px] xl:w-[35px] xl:h-[35px] text-sinbadKYC-white"
        />
        <p>Support</p>
      </div>
      <div className="absolute w-full border-t  border-t-sinbadKYC-background bottom-[10%]">
        <div className="flex items-center absolute left-[14%] gap-4 py-2">
          <div className="w-full flex items-center gap-2 ">
            <img
              src={avatar}
              alt=""
              className=" bg-sinbadKYC-normalGrey p-1 rounded-full w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] xl:w-[40px] xl:h-[40px] text-sinbadKYC-white"
            />
            <div className=" text-[9px] xl:text-[14px]">
              {" "}
              <p className=" text-white font-semibold">Olivia Rhye</p>
              <p className=" text-sinbadKYC-bordergrey">
                olivia@untitledui.com
              </p>
            </div>
          </div>
          <LogoutModule />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

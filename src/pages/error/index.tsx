import React from 'react';
import { NavLink } from 'react-router-dom';

import ErrorImg from '../../assets/svgs/James.svg';

// import { Sidebar } from '../../components';

const ErrorElement = () => {
  return (
    <div className="flex bg-white dark:bg-afexdark-verydark text-[#54565B] text-sm xl:text-base">
      {/* <Sidebar /> */}
      <div className="w-full flex flex-col  items-center justify-center  h-[100vh] bg-[#F5F5F5] dark:bg-afexdark-darkest dark:text-white">
        {' '}
        <img src={ErrorImg} alt="" className=" w-[500px]" />
        <h1 className=" text-7xl font-bold  text-[#6431bc]"> Oops!</h1>
        <p className="px-1 text-2xl font-medium mt-4">
          Looks like you took a wrong turn. Let's get you back on track,
        </p>
        <p className="px-1 text-2xl font-medium">
          we suggest you click on the button to go back to the home page or
          other links on the sidebar
        </p>
        <NavLink
          to="/"
          className=" bg-afexpurple-regular text-textgrey-lighter p-3 font-semibold mt-6 rounded-lg text-lg">
          {' '}
          Home
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorElement;

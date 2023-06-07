import { t } from 'i18next';
import React from 'react';
import { Link } from 'react-router-dom';

import SingleClientCard from './components/cards';
import ProfileBoard from './components/profile-board';
import SingleClientTable from './components/single client-table';

const SingleClient = () => {
  return (
    <div className="w-ful overflow-y-scroll h-full md:h-[100vh] md:flex">
      {/* Left Section */}
      <div className="md:w-[35%] md:h-[100vh] md:flex md:flex-col gap-14 md:overflow-y-auto p-3 md:p-10">
        {/* Title */}
        <div className="flex w-full flex-col">
          <h2 className="  text-textgrey-Bold dark:text-textgrey-light text-[18px] font-bold ">
            {t('Client Profile')}
          </h2>
          <p className=" text-textgrey-normal dark:text-afexdark-dark">
            <span>
              {' '}
              <Link to="/">{t('Home')}/</Link>
            </span>
            <span>
              {' '}
              <Link to="/client">{t('Clients')}</Link>
            </span>{' '}
            <span className=" text-textgrey-darker dark:text-afexdark-regular">
              /{t('Client profile')}
            </span>
          </p>
        </div>
        <ProfileBoard />
      </div>

      {/* Right Section */}
      <div className="flex flex-col md:gap-14 gap-8 mt-8 md:mt-0 md:p-8 h-[100%] md:overflow-y-auto md:w-[65%]">
        <SingleClientCard />
        <SingleClientTable />
      </div>
    </div>
  );
};

export default SingleClient;

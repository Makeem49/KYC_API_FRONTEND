import { Profile2User } from 'iconsax-react';
import React from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

import { get_a_client_query } from '../../../../queries/clients_stats';

const ClientHeader = () => {
  const { pathname } = useLocation();
  const clientId = pathname.split('/')[1];

  const { data } = useQuery(get_a_client_query(parseInt(clientId, 10)));

  return (
    <div className=" md:w-full mt-16 flex flex-col gap-4 lg:px-40">
      {/* FIrst Card */}
      <div className=" bg-white  dark:bg-afexdark-darkest rounded-lg p-8">
        <div className="w-full py-4 gap-2 flex flex-col justify-center items-center text-[14px] border-dashed bg-sinbadKYC-grey rounded-lg dark:border-afexdark-dark border-b">
          <Profile2User
            variant="Bold"
            className=" bg-sinbadKYC-grey border-2 border-sinbadKYC-background p-2 rounded-full h-20 w-20 text-sinbadKYC-white"
          />
          <p className="text-white font-bold">Identity Response</p>
        </div>

        <div className="w-full flex flex-col gap-5 py-5">
          <p className="flex gap-2 items-center text-textgrey-darker dark:text-textgrey-normal font-bold">
            Bank verification number:
            <span className=" text-textgrey-normal font-normal">
              {data?.bvn ?? 'none'}
            </span>
          </p>
          <p className="flex gap-2 items-center text-textgrey-darker  dark:text-textgrey-normal font-bold">
            ID type
            <span className=" text-textgrey-normal font-normal">BVN</span>
          </p>

          <p className="flex gap-2 items-center text-textgrey-darker  dark:text-textgrey-normal font-bold">
            Status:
            <span className=" text-green-400 font-normal">
              {data?.status ?? ''}
            </span>
          </p>
        </div>
      </div>

      <div className=" bg-white  dark:bg-afexdark-darkest rounded-lg p-8">
        {/* Details */}
        <div className="w-full py-2 flex justify-between items-center text-[14px] border-dashed dark:border-afexdark-dark border-b">
          <p className="  text-textgrey-darker  dark:text-textgrey-normal font-bold">
            Personal Details
          </p>
        </div>

        <div className="w-full flex flex-col gap-5 py-5">
          {' '}
          <p className=" text-textgrey-darker flex items-center gap-4 dark:text-textgrey-normal font-bold">
            First name:
            <span className=" text-textgrey-normal font-normal">
              {data?.first_name ?? 'not available'}
            </span>
          </p>
          <p className=" text-textgrey-darker flex items-center gap-4 dark:text-textgrey-normal font-bold">
            Middle name:
            <span className=" text-textgrey-normal font-normal">
              {data?.middle_name ?? 'not available'}
            </span>
          </p>
          <p className=" text-textgrey-darker flex items-center gap-4 dark:text-textgrey-normal font-bold">
            Last name:
            <span className=" text-textgrey-normal font-normal">
              {data?.last_name ?? 'not available'}
            </span>
          </p>
          <p className=" text-textgrey-darker flex items-center gap-4 dark:text-textgrey-normal font-bold">
            Phone number:
            <span className=" text-textgrey-normal font-normal">
              {data?.phone ?? 'not available'}
            </span>
          </p>
          <p className=" text-textgrey-darker flex items-center gap-4 dark:text-textgrey-normal font-bold">
            Email:
            <span className=" text-textgrey-normal font-normal">
              {data?.email ?? 'not available'}
            </span>
          </p>
          <p className=" text-textgrey-darker flex items-center gap-4 dark:text-textgrey-normal font-bold">
            Date of birth:
            <span className=" text-textgrey-normal font-normal">
              {data?.dob ?? 'not available'}
            </span>
          </p>
          <p className=" text-textgrey-darker flex items-center gap-4 dark:text-textgrey-normal font-bold">
            Gender:
            <span className=" text-textgrey-normal font-normal">
              {data?.gender ?? 'not specified'}
            </span>
          </p>
          <p className=" text-textgrey-darker flex items-center gap-4 dark:text-textgrey-normal font-bold">
            Mother's maiden name:
            <span className=" text-textgrey-normal font-normal">
              not available
            </span>
          </p>
          <p className=" text-textgrey-darker flex items-center gap-4 dark:text-textgrey-normal font-bold">
            Address:
            <span className=" text-textgrey-normal font-normal">
              {data?.address ?? 'not available'}
            </span>
          </p>
        </div>
      </div>

      <div className=" bg-white  dark:bg-afexdark-darkest rounded-lg p-8">
        {/* Next of kin
         */}
        <div className="w-full py-2 flex justify-between items-center text-[14px] border-dashed dark:border-afexdark-dark border-b">
          <p className="  text-textgrey-darker  dark:text-textgrey-normal font-bold">
            Next of kin
          </p>
        </div>

        <div className="w-full flex flex-col gap-5 py-5">
          {' '}
          <p className=" text-textgrey-darker flex items-center gap-4 dark:text-textgrey-normal font-bold">
            Name:
            <span className=" text-textgrey-normal font-normal">
              Jordgan Mandels
            </span>
          </p>
          <p className=" text-textgrey-darker flex items-center gap-4 dark:text-textgrey-normal font-bold">
            Relationship:
            <span className=" text-textgrey-normal font-normal">Brother</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientHeader;

import Profile2User from "../../../../assets/svgs/prof.svg";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";

import { get_a_client_query } from "../../../../queries/clients_stats";

const ClientHeader = () => {
  const { pathname } = useLocation();
  const clientId = pathname.split("/")[1];

  const { data } = useQuery(get_a_client_query(parseInt(clientId, 10)));

  return (
    <div className=" md:w-full ">
      {/* FIrst Card */}
      <div className="w-full p-6 bg-white flex gap-4 rounded-lg">
        <img src={Profile2User} alt="" className=" w-60 h-60" />

        <div className="w-full flex flex-col gap-5 py-2">
          <p className="font-bold text-2xl border-b py-4 border-b-sinbadKYC-bordergrey text-sinbadKYC-darkgreen">
            Identity Response
          </p>

          <p className="flex gap-2 items-center text-sinbadKYC-textGrey font-bold">
            Bank Verification Number:
            <span className=" font-normal">
              {data?.bvn ?? "*** **** **** 4563"}
            </span>
          </p>
          <p className="flex gap-2 items-center text-sinbadKYC-textGrey font-bold">
            ID type:
            <span className=" font-normal">BVN</span>
          </p>

          <p className="flex gap-2 items-center text-sinbadKYC-textGrey font-bold">
            Mobile Number:
            <span className="font-normal">
              {data?.status ?? "+20 323423 43"}
            </span>
          </p>

          <div>
            {/* Details */}
            <div className="w-full py-2 flex justify-between items-center text-[14px] dark:border-afexdark-dark border-b">
              <p className=" text-sinbadKYC-darkgreen text-2xl font-bold">
                Personal Details
              </p>
            </div>

            <div className="w-full flex flex-col gap-5 py-5">
              {" "}
              <p className="text-sinbadKYC-textGrey flex items-center gap-[10%] font-bold">
                First name:
                <span className="font-normal">
                  {data?.first_name ?? "Ahmed "}
                </span>
              </p>
              <p className=" text-sinbadKYC-textGrey flex items-center gap-[10%] font-bold">
                Middle name:
                <span className="  font-normal">
                  {data?.middle_name ?? "Abdullah"}
                </span>
              </p>
              <p className=" text-sinbadKYC-textGrey flex items-center gap-[10%] font-bold">
                Last name:
                <span className="  font-normal">
                  {data?.last_name ?? "Noor"}
                </span>
              </p>
           
              <p className=" text-sinbadKYC-textGrey flex items-center gap-[10%] font-bold">
                Date of birth:
                <span className="  font-normal">
                  {data?.dob ?? "June 20, 1984"}
                </span>
              </p>
              <p className=" text-sinbadKYC-textGrey flex items-center gap-[10%] font-bold">
                Gender:
                <span className="  font-normal">
                  {data?.gender ?? "Male"}
                </span>
              </p>
            
            </div>

          
             
                <p className=" text-sinbadKYC-darkgreen text-2xl border-b border-sinbadKYC-bordergrey font-bold">
                  Risk Metrics
                </p>
           

              <div className="w-full flex flex-col gap-5 py-5">
                {" "}
                <p className=" text-sinbadKYC-textGrey flex items-center gap-4 font-bold">
                Account Balance (Last 3 month):
                  <span className="  font-normal">N 32,323,323</span>
                </p>
                <p className=" text-sinbadKYC-textGrey flex items-center gap-4 font-bold">
                Employed: 
                  <span className="  font-normal">Yes</span>
                </p>

                <p className=" text-sinbadKYC-textGrey flex items-center gap-4 font-bold">
                Avg. Salary:
                  <span className="  font-normal">N 2,000,000</span>
                </p>

              
              </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientHeader;

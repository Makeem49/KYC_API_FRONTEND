import Profile2User from "../../../../assets/svgs/prof.svg";

import { commaformatter } from "../../../../utils";

const ClientHeader = ({ data }: any) => {
  return (
    <div className="md:w-full">
      {/* FIrst Card */}
      <div className="w-full p-6 bg-white flex gap-4 rounded-lg">
        <img src={Profile2User} alt="" className="w-60 h-60" />

        <div className="w-full flex flex-col gap-5 py-2">
          <p className="font-bold text-2xl border-b py-4 border-b-sinbadKYC-bordergrey text-sinbadKYC-darkgreen">
            Identity Response
          </p>

          <div className="flex items-center text-sinbadKYC-textGrey font-bold">
            <p className="w-80">Bank Verification Number:</p>
            <span className="font-normal">
              {data?.bvn ?? "*** **** **** 4563"}
            </span>
          </div>

          <div className="w-full flex items-center text-sinbadKYC-textGrey font-bold">
            <p className="w-80">ID type:</p>
            <span className="font-normal">BVN</span>
          </div>

          <div className="w-full flex items-center text-sinbadKYC-textGrey font-bold">
            <p className="w-80"> Mobile Number:</p>
            <span className="font-normal">
              {" "}
              {data?.phone ?? "+20 323423 43"}
            </span>
          </div>

          <div>
            {/* Details */}
            <div className="w-full py-2 flex justify-between items-center text-[14px] dark:border-afexdark-dark border-b">
              <p className="text-sinbadKYC-darkgreen text-2xl font-bold">
                Personal Details
              </p>
            </div>

            <div className="w-full flex flex-col gap-5 py-5">
              <div className="w-full flex items-center text-sinbadKYC-textGrey font-bold">
                <p className="w-80"> First name:</p>
                <span className="font-normal">
                  {" "}
                  {data?.first_name ?? "Ahmed"}
                </span>
              </div>

              <div className="w-full flex items-center text-sinbadKYC-textGrey font-bold">
                <p className="w-80"> Middle name:</p>
                <span className="font-normal">
                  {" "}
                  {data?.middle_name ?? "Abdullah"}
                </span>
              </div>

              <div className="w-full flex items-center text-sinbadKYC-textGrey font-bold">
                <p className="w-80"> Last name:</p>
                <span className="font-normal">
                  {data?.last_name ?? "Noor"}{" "}
                </span>
              </div>

              <div className="w-full flex items-center text-sinbadKYC-textGrey font-bold">
                <p className="w-80"> Date of birth:</p>
                <span className="font-normal">
                  {" "}
                  {data?.dob ?? "June 20, 1984"}
                </span>
              </div>

              <div className="w-full flex items-center text-sinbadKYC-textGrey font-bold">
                <p className="w-80"> Gender:</p>
                <span className="font-normal"> {data?.gender ?? "Male"}</span>
              </div>
            </div>

            <p className="text-sinbadKYC-darkgreen text-2xl border-b border-sinbadKYC-bordergrey font-bold">
              Risk Metrics
            </p>

            <div className="w-full flex flex-col gap-5 py-5">
              <div className="w-full flex items-center text-sinbadKYC-textGrey font-bold">
                <p className="w-80"> Account Balance (Last 3 month):</p>
                <span className="font-normal">
                  {commaformatter(data?.balance ?? "N 32,323,323")}
                </span>
              </div>
              <div className="w-full flex items-center text-sinbadKYC-textGrey font-bold">
                <p className="w-80">Employed:</p>
                <span className="font-normal"> Yes</span>
              </div>

              <div className="w-full flex items-center text-sinbadKYC-textGrey font-bold">
                <p className="w-80"> Avg Monthly Salary:</p>
                <span className="font-normal">
                  {" "}
                  {commaformatter(data?.avarage_monthly_income ?? "0.00")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientHeader;

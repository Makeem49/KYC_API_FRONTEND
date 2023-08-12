import { Home, ArrowRight2 } from "iconsax-react";
import { NavLink } from "react-router-dom";
import ClientHeader from "./component/headerr";
import Actions from "./component/actions";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";

import { get_a_client_query } from "../../queries/clients_stats";

const ClientProfile = () => {
  const { pathname } = useLocation();
  const clientId = pathname.split("/")[1];
  const { data } = useQuery(get_a_client_query(parseInt(clientId, 10)));
  const Stats = data?.status;

  return (
    <div className="w-full md:px-6 flex flex-col lg:gap-8 overflow-y-scroll h-[100vh] py-4 px-0 lg:py-10 ">
      <p className=" flex items-center gap-3">
        {" "}
        <NavLink className="flex items-center gap-5" to="/">
          {" "}
          <Home size={14} /> <ArrowRight2 size={14} />
        </NavLink>{" "}
        <span className=" text-sinbadKYC-grey">Details page</span>{" "}
      </p>

      <div className="flex justify-between w-full">
        <p className=" font-bold text-2xl text-sinbadKYC-darkgreen flex flex-col">
          Ahmed Noor: Passenger 1/1{" "}
          <span className=" text-sinbadKYC-lightGrey text-xl font-normal">
            QE43REDDSSDSD
          </span>
        </p>
        <div>
          <div>
            {Stats === "APPROVED" ? (
              <button
                className="w-full p-3 font-medium text-white bg-sinbadKYC-darkgreen rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center"
                type="button"
              >
                {" "}
                Approved
              </button>
            ) : (
              ""
            )}

            {Stats === "REJECTED" ? (
              <button
                className="w-full p-3 bg-sinbadKYC-lightred font-medium text-sinbadKYC-red border border-sinbadKYC-red rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center"
                type="button"
              >
                {" "}
                Rejected
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        {Stats === "PENDING" ? <Actions data={data} /> : ""}
      </div>

      <ClientHeader data={data} />
    </div>
  );
};

export default ClientProfile;

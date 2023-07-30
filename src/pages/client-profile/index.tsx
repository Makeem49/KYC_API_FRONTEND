import { Home, ArrowRight2 } from "iconsax-react";
import { NavLink } from "react-router-dom";
import ClientHeader from "./component/headerr";
import Actions from "./component/actions";

const ClientProfile = () => {
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
        <Actions/>
      </div>

      <ClientHeader />
    </div>
  );
};

export default ClientProfile;

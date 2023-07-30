import { FaEllipsisV } from "react-icons/fa";
import { useGetWaitList } from "../../../queries";
import { useGetApprovedtList } from "../../../queries";
import { useGetClientList } from "../../../queries";
import { useGetRejectedtList } from "../../../queries";

const Card = () => {
  const { data: pending } = useGetClientList();
  const { data: approve } = useGetApprovedtList();
  const { data: rejected } = useGetRejectedtList();
  const { data: waitlist } = useGetWaitList();

  const Activities = [
    {
      id: 1,
      name: "Que",
      number: waitlist?.data.length ?? 45,
      icon: (
        <FaEllipsisV className="md:h-[10px] md:w-[10px] 2xl:w-[18px] 2xl:h-[18px] text-sinbadKYC-bordergrey font-normal" />
      ),
    },

    {
      id: 2,
      name: "Pending",
      number: pending?.data.length ?? 30,
      icon: (
        <FaEllipsisV className="md:h-[10px] md:w-[10px] 2xl:w-[18px] 2xl:h-[18px] text-sinbadKYC-bordergrey font-normal" />
      ),
    },

    {
      id: 3,
      name: "Approved",
      number: approve?.data.length ?? 80,
      icon: (
        <FaEllipsisV className="md:h-[10px] md:w-[10px] 2xl:w-[18px] 2xl:h-[18px] text-sinbadKYC-bordergrey font-normal" />
      ),
    },

    {
      id: 4,
      name: "Rejected",
      number: rejected?.data.length ?? 12,
      icon: (
        <FaEllipsisV className="md:h-[10px] md:w-[10px] 2xl:w-[18px] 2xl:h-[18px] text-sinbadKYC-bordergrey font-normal" />
      ),
    },
  ];
  return (
    <div className="grid md:grid-cols-2 lg:flex gap-6">
      {/* Card One */}
      {Activities.map((el) => (
        <div
          key={el.id}
          className=" relative flex items-center shadow bg-white  h-32 rounded-lg px-2 w-full"
        >
          <div className="flex flex-col gap-1 w-full">
            <p className=" font-normal text-base text-sinbadKYC-grey">
              {el.name}
            </p>
            <p className=" text-sinbadKYC-grey font-bold text-4xl">
              {el.number}
            </p>
          </div>
          <span className="absolute top-8 right-3"> {el.icon}</span>
        </div>
      ))}
    </div>
  );
};

export default Card;

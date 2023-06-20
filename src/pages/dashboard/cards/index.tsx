import { UserSquare } from 'iconsax-react';

import { useGetWaitList } from '../../../queries';
import { useGetApprovedtList } from '../../../queries';
import { useGetClientList } from '../../../queries';
import { useGetRejectedtList } from '../../../queries';

const Card = () => {
  const { data: pending } = useGetClientList();
  const { data: approve } = useGetApprovedtList();
  const { data: rejected } = useGetRejectedtList();
  const { data: waitlist } = useGetWaitList();

  const Activities = [
    {
      id: 1,
      name: 'Waiting',
      number: waitlist?.data.length,
      icon: (
        <UserSquare
          variant="Bold"
          className="md:h-[30px] md:w-[30px] bg-[#f2f5eb] text-[#c2cda0] p-2 rounded-3xl  2xl:w-[40px] 2xl:h-[40px]"
        />
      ),
    },

    {
      id: 2,
      name: 'Pending',
      number: pending?.data.length,
      icon: (
        <UserSquare
          variant="Bold"
          className="md:h-[30px] md:w-[30px] bg-[#fbf3ec] p-2 text-[#e1b778] rounded-3xl  2xl:w-[40px] 2xl:h-[40px]"
        />
      ),
    },

    {
      id: 3,
      name: 'Approved',
      number: approve?.data.length,
      icon: (
        <UserSquare
          variant="Bold"
          className="md:h-[30px] md:w-[30px] bg-[#ebf4f1] text-[#85b9ab] p-2 rounded-3xl  2xl:w-[40px] 2xl:h-[40px]"
        />
      ),
    },

    {
      id: 4,
      name: 'Rejected',
      number: rejected?.data.length,
      icon: (
        <UserSquare
          variant="Bold"
          className="md:h-[30px] md:w-[30px] bg-[#fee3e2] text-[#f75252] p-2 rounded-3xl  2xl:w-[40px] 2xl:h-[40px]"
        />
      ),
    },
  ];
  return (
    <div className="grid md:grid-cols-2 lg:flex gap-6">
      {/* Card One */}
      {Activities.map((el) => (
        <div
          key={el.id}
          className="flex items-center shadow bg-white rounded-lg p-3 w-full">
          <div className="flex flex-col gap-2  w-full">
            <p className=" font-normal text-base text-sinbadKYC-grey">
              {el.name}
            </p>
            <p className=" text-sinbadKYC-grey font-bold text-2xl">
              {el.number}
            </p>
          </div>
          <span> {el.icon}</span>
        </div>
      ))}
    </div>
  );
};

export default Card;

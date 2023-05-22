import { useMutation, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';

import { mark_as_read } from '../../../api/notifications';
import adamsIcon from '../../../assets/images/Adams.svg';
import { timeFormatter } from '../../../utils/formatter';

interface NotificationProps extends Notifications {
  data: Notifications[];
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Notications = ({ setOpened, data }: NotificationProps) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (payload: { id: number; isRead: boolean }) =>
      mark_as_read(payload.id, payload.isRead),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] }); // To  invalidate and refetch
    },
  });

  return (
    <div className='flex flex-col gap-5 px-8 font-normal mb-5'>
      {/* TODAY */}
      {/* <p className=' font-semibold'>Today</p> */}
      {data!?.map((el) => (
        <Link
          onClick={() => {
            mutation.mutate({
              id: el.id,
              isRead: !el.isRead,
            });
            setOpened(false);
          }}
          to={
            el.module === 'client_providers'
              ? '/client-provider'
              : el.module === 'users'
              ? '/user-management'
              : '/'
          }
          className='w-full bg-[#F5F5F5] dark:bg-afexdark-verydark flex justify-between p-4 rounded-lg'>
          <div className='flex gap-3 items-center'>
            <img src={adamsIcon} alt='adams' />
            <div className='flex flex-col gap-1'>
              <p className='text-[14px] font-semibold'>{el.title ?? ''}</p>
              <span className='text-[12px] text-[#C1C0C2]'>
                {el.targetId ?? 0}
              </span>
              <span className='text-[12px] text-[#5D5B60]'>
                {el.summary ?? ''}
              </span>
            </div>
          </div>

          {/* TIME */}
          <div className=' flex flex-col items-center gap-14'>
            <span className=' w-16 text-afexdark-regular text-[10px]'>
              {timeFormatter(el.createdAt)}
            </span>
            {el.isRead ? (
              <div className='bg-afexdark-light rounded-full w-[8px] h-[8px]'></div>
            ) : (
              <div className='bg-[#38CB89] rounded-full w-[8px] h-[8px]'></div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Notications;

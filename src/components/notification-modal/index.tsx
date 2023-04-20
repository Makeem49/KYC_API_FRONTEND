import { Notification } from 'iconsax-react';
import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';

import { Drawer, Group } from '@mantine/core';

import { get_notifications_query } from '../../queries/notifications';
import Notications from './notifications';

const NotificationModal = () => {
  const { data: list } = useQuery(get_notifications_query(1));

  const notification = list?.map((el) => el.isRead);
  const noOfNotifications = notification!?.filter(
    (element) => element === false
  ).length;

  const [opened, setOpened] = useState(false);
  return (
    <>
      <Drawer
        position='right'
        opened={opened}
        onClose={() => setOpened(false)}
        title='Notifications'
        withCloseButton={true}
        // padding='xl'
        size='28%'
        className='flex flex-col rounded-xl font-bold overflow-y-auto'
        styles={{
          header: {
            borderBottom: '1px solid',
            borderColor: '#F0F0F0',
            padding: '1rem 2rem',
          },
        }}>
        {/* Component */}
        <Notications
          setOpened={setOpened}
          data={list!}
          id={0}
          title={''}
          summary={''}
          module={''}
          targetId={''}
          userId={''}
          isRead={undefined}
          createdAt={''}
          updatedAt={''}
        />
      </Drawer>

      <Group position='left'>
        <button
          onClick={() => setOpened(true)}
          className='flex items-center gap-2 text-afexdark-regular hover:bg-transparent dark:hover:bg-transparent '>
          <Notification className=' w-[18px] h-[18px]' color='#49474D' />

          <div className='flex items-center gap-24 w-[200px]'>
            <p className=' font-normal text-afexdark-darkest'> Notifications</p>
            {notification!?.length > 0 ? (
              <p className=' text-[12px] text-center text-white bg-afexred-regular dark:text-afexdark-verydark  rounded-full p-1'>
                {noOfNotifications}
              </p>
            ) : (
              ''
            )}
          </div>
        </button>
      </Group>
    </>
  );
};

export default NotificationModal;

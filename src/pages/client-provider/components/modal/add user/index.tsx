import { t } from 'i18next';
import { Add } from 'iconsax-react';
import React from 'react';
import { useState } from 'react';

import { Button, Drawer, Group } from '@mantine/core';

import UserInfo from './user info';

const AddUser = () => {
  const [opened, setOpened] = useState(false);
  const title = t('Add Client Provider');
  return (
    <>
      <Drawer
        className=" overflow-y-auto"
        position="right"
        opened={opened}
        onClose={() => setOpened(false)}
        title={title}
        padding="xl"
        size="38%">
        {/* Map Component */}

        <UserInfo closeModal={() => setOpened(false)} />
      </Drawer>

      <Group position="center">
        <Button
          className="flex md:w-full items-center gap-2 py-2 md:px-3 hover:bg-afexpurple-regular hover:shadow text-white  text-[10px] md:text-[14px] bg-afexpurple-regular rounded-lg"
          onClick={() => setOpened(true)}>
          <span className="w-full">{t('ADD CLIENT PROVIDER')}</span>
          <Add size="16" color="#FFFFFF" variant="Bulk" />
        </Button>
      </Group>
    </>
  );
};

export default AddUser;

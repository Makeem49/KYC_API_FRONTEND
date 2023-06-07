import { t } from 'i18next';
import { Add } from 'iconsax-react';
import React from 'react';
import { useState } from 'react';

import { Button, Drawer, Group } from '@mantine/core';

import UserInfo from './user info';

const AddUser = () => {
  const [opened, setOpened] = useState(false);
  const title = t('Add User');

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
        <UserInfo closeModal={() => setOpened(false)} />
      </Drawer>

      <Group position="center">
        <Button
          className="hidden md:flex md:w-full items-center gap-2 py-2 px-3 hover:bg-afexpurple-regular hover:shadow text-white md:text-[14px] bg-afexpurple-regular rounded-lg"
          onClick={() => setOpened(true)}>
          <span className="md:w-full text-xs">{t('ADD USER')}</span>
          <Add size="20" color="#FFFFFF" variant="Bulk" />
        </Button>
      </Group>
    </>
  );
};

export default AddUser;

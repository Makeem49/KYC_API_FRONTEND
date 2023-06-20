import { Tabs } from '@mantine/core';

import ApprovedList from './approved';
import PendingList from './pending';
import RejectedList from './rejected';
import WatingList from './waiting';

function ActivityTabs() {
  return (
    <div>
      <Tabs
        className=" bg-sinbadKYC-white shadow p-4 rounded-lg"
        defaultValue="waiting">
        <Tabs.List className="">
          <Tabs.Tab
            className="text-afexdark-darkest hover:bg-transparent ho text-sm md:text-lg"
            value="waiting">
            Waiting
          </Tabs.Tab>
          <Tabs.Tab
            value="pending"
            className="text-afexdark-darkest hover:bg-transparent ho text-sm md:text-lg">
            Pending
          </Tabs.Tab>

          <Tabs.Tab
            value="approved"
            className="text-afexdark-darkest hover:bg-transparent ho text-sm md:text-lg">
            Approved
          </Tabs.Tab>

          <Tabs.Tab
            value="rejected"
            className="text-afexdark-darkest hover:bg-transparent ho text-sm md:text-lg">
            Rejected
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="waiting" pt="xs">
          <WatingList />
        </Tabs.Panel>

        <Tabs.Panel value="pending" pt="xs">
          {' '}
          <PendingList />
        </Tabs.Panel>

        <Tabs.Panel value="approved" pt="xs">
          {' '}
          <ApprovedList />
        </Tabs.Panel>

        <Tabs.Panel value="rejected" pt="xs">
          {' '}
          <RejectedList />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default ActivityTabs;

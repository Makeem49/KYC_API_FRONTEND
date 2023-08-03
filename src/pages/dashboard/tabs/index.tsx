import { Tabs } from "@mantine/core";
import ApprovedList from "./approved";
import PendingList from "./pending";
import RejectedList from "./rejected";
import WatingList from "./waiting";

function ActivityTabs() {
  return (
    <div>
      <Tabs className=" bg-white shadow  rounded-lg" defaultValue="que">
        <Tabs.List className="border-[#EAECF0]  ">
          <Tabs.Tab
            className="text-[#6D7987] hover:bg-transparent  text-sm md:text-lg"
            value="que"
          >
            Pending
          </Tabs.Tab>
          <Tabs.Tab
            value="pending"
            className="text-[#6D7987] hover:bg-transparent ho text-sm md:text-lg"
          >
            Que
          </Tabs.Tab>

          <Tabs.Tab
            value="approved"
            className="text-[#6D7987] hover:bg-transparent ho text-sm md:text-lg"
          >
            Approved
          </Tabs.Tab>

          <Tabs.Tab
            value="rejected"
            className="text-[#6D7987] hover:bg-transparent ho text-sm md:text-lg"
          >
            Rejected
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="que" pt="xs">
          <WatingList />
        </Tabs.Panel>

        <Tabs.Panel value="pending" pt="xs">
          {" "}
          <PendingList />
        </Tabs.Panel>

        <Tabs.Panel value="approved" pt="xs">
          {" "}
          <ApprovedList />
        </Tabs.Panel>

        <Tabs.Panel value="rejected" pt="xs">
          {" "}
          <RejectedList />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default ActivityTabs;

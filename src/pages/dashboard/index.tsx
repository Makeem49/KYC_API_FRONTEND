import Card from './cards';
import OnBoardClients from './onboard-client';
import ActivityTabs from './tabs';

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col gap-8 overflow-y-scroll h-[100vh] px-14">
      <div className="flex w-full md:justify-between items-center">
        <h2 className=" text-textgrey-darker dark:text-afexdark-extralight  text-[14px] md:text-[18px] font-bold ">
          Dashboard
        </h2>
      </div>
      <OnBoardClients />
      <Card />
      <ActivityTabs />
    </div>
  );
};

export default Dashboard;

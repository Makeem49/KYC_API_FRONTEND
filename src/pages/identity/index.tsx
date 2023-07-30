// import CreateUser from './components/create_user';
import ClientHeader from './components/header';
const Dashboard = () => {
  return (
    <div className="w-full flex flex-col gap-8 overflow-y-scroll h-[100vh] py-14 px-2 md:px-14">
      <div className="flex w-full justify-between items-center">
        <h2 className=" text-sinbadKYC-darkgreen text-2xl font-bold ">
          Risk Engine
        </h2>

        {/* <CreateUser /> */}
        <button className=' p-4 bg-sinbadKYC-lemongreen text-sinbadKYC-darkgreen rounded-lg font-semibold'> Save</button>
      </div>

      <ClientHeader />
    </div>
  );
};

export default Dashboard;

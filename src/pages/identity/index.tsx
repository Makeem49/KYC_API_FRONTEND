const Dashboard = () => {
  return (
    <div className="w-full flex flex-col gap-8 overflow-y-scroll h-[100vh]">
      <div className="flex w-full md:justify-between items-center">
        <h2 className=" text-textgrey-darker dark:text-afexdark-extralight  text-[14px] md:text-[18px] font-bold ">
          Identity
        </h2>
      </div>

      <div className=" child:w-[350px] gap-4 w-full flex p-4">
        This is identity page
      </div>
    </div>
  );
};

export default Dashboard;

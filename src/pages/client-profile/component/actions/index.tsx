import MessageButton from "./message";
import RejectButton from "./reject";
import ApproveButton from "./approve";

const Actions = ({ data }: any) => {
  return (
    <div className="flex items-center gap-2">
      {" "}
      <MessageButton />
      <RejectButton data={data} />
      <ApproveButton data={data} />
    </div>
  );
};

export default Actions;

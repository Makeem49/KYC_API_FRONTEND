import { useState } from "react";
import ApproveUser from "../modal/approve-client";

function ApproveButton({ data }: any) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full p-3 font-medium text-white bg-sinbadKYC-darkgreen rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center"
        type="button"
      >
        {" "}
        Approve
      </button>

      <ApproveUser data={data} show={open} close={() => setOpen(false)} />
    </>
  );
}

export default ApproveButton;

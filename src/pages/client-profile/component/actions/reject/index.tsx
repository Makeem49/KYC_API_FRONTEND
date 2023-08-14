import { useState } from "react";
import RejectUser from "../modal/reject";
function RejectButton({ data }: any) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full p-3 bg-sinbadKYC-lightred font-medium text-sinbadKYC-darkgreen border border-sinbadKYC-red rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center"
        type="button"
      >
        {" "}
        Reject
      </button>

      <RejectUser data={data} show={open} close={() => setOpen(false)} />
    </>
  );
}

export default RejectButton;

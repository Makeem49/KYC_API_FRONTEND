import MessageButton from "./message"
import RejectButton from "./reject"
import ApproveButton from "./approve"

const Actions = () => {
  return (
    <div className="flex items-center gap-2">
      <MessageButton/>
      <RejectButton/>
      <ApproveButton/>
    </div>
  )
}

export default Actions

import React from "react";
import { BsQuestionCircle } from "react-icons/bs";
import { useMutation, useQueryClient } from "react-query";

import { Group, Modal } from "@mantine/core";

import { approve_user } from "../../../../../../../api";

interface AddUserProps extends ModalControllerType {
  data: ClientList;
}

const ApproveUser = ({ data, close, show }: AddUserProps) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (payload: { id: number; status: string }) =>
      approve_user(payload.id, payload.status),
    onSuccess: () => {
      queryClient.invalidateQueries(); // To  invalidate and refetch
    },
  });

  return (
    <>
      <Modal
        opened={show}
        onClose={close}
        size="25%"
        withCloseButton={false}
        centered
      >
        {/* Map Component */}
        <div className="flex flex-col mt-0 items-center gap-4 text-center p-8">
          <BsQuestionCircle className=" text-sinbadKYC-orange" size={70} />

          <p className="p-5"> Are you sure you would like to reject?</p>

          <div className="flex w-full px-10 justify-center gap-4">
            <button
              className="w-full bg-sinbadKYC-orange  p-4 rounded-lg text-white"
              onClick={() => {
                const newUser = {
                  id: data.id,
                  status: "REJECT",
                };

                mutation.mutate(newUser);
                close();
              }}
            >
              yes, please
            </button>
            <button
              className="w-full p-4 hover:shadow rounded-lg"
              onClick={close}
            >
              no, return
            </button>
          </div>
        </div>
      </Modal>

      <Group position="center"></Group>
    </>
  );
};

export default ApproveUser;

import { Form, Formik } from "formik";

import { Add } from "iconsax-react";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import Select from "react-select";
import { Button, Modal } from "@mantine/core";

import { create_user } from "../../../api";
import Botton from "../../../components/button";
import { FormInput } from "../../../components/form";

const data = [
  { id: 1, countryCode: "+62", country: "Indonesia" },
  { id: 2, countryCode: "+91", country: "India" },
  { id: 3, countryCode: "+234", country: "Nigeria" },
];

const options = data.map((item) => ({
  value: item?.countryCode,
  label: `${item?.country} (${item?.countryCode})`,
}));

function OnBoardClients() {
  const queryClient = useQueryClient();
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const mutation = useMutation({
    mutationFn: create_user,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["waitList"] });
      // To  invalidate and refetch
    },
  });

  return (
    <>
      <Button
        className="hidden self-end md:block py-2 px-1 w-48  text-sinbadKYC-darkgreen hover:bg-sinbadKYC-lemongreen bg-sinbadKYC-lemongreen hover:shadow md:text-[16px] rounded-lg"
        onClick={() => {
          setOpened((s) => !s);
        }}
      >
        <span className="md:w-full text-sinbadKYC-darkgreen text-lg">
          {("Invite Members")}
        </span>
        <Add />
      </Button>

      <Modal
        size="30%"
        withCloseButton={false}
        centered
        opened={opened}
        onClose={() => {
          setOpened((s) => !s);
        }}
      >
        {/* Map Component */}
        <div className="flex justify-center flex-col gap-2 p-8">
          <p className="relative text-center text-lg font-semibold">
            Invite Customer{" "}
            <span
              onClick={() => {
                setOpened(false);
              }}
              className="absolute p-1 rounded-lg right-0 cursor-pointer hover:bg-sinbadKYC-darkgreen/10"
            >
              x
            </span>
          </p>
          <Formik
            initialValues={{
              phone: "",
            }}
            onSubmit={async (values) => {
              const newUser = { phone: values.phone };
              setLoading(true);
              mutation.mutate(newUser);

              setLoading(false);
              setOpened(false);
            }}
          >
            {({ resetForm }) => (
              <Form className="w-full flex p-2 rounded-lg flex-col gap-y-4">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    {" "}
                    <p className="font-normal text-base text-sinbadKYC-textGrey">Search</p>
                    <Select
                      unstyled
                      options={options}
                      isSearchable={true}
                      placeholder="Search Country"
                      required
                      classNames={{
                        control: (state) =>
                          state.isFocused
                            ? "ring-1 ring-sinbadKYC-darkgreen rounded-lg p-3"
                            : " border ring-1 ring-sinbadKYC-darkgreen rounded-lg p-3",
                        container: () =>
                          "rounded-lg text-base font-body text-textgrey-normal bg-white",
                        menu: () =>
                          " mt-2 ring-1 px-2 ring-sinbadKYC-darkgreen text-textgrey-normal bg-white rounded-lg",
                        menuList: () =>
                          "child:my-2 child:!cursor-pointer child:p-2 hover:child:bg-sinbadKYC-darkgreen/10 max-h- overflow-scroll",
                        placeholder: () =>
                          "capitalize truncate text-textgrey-normal bg-white",
                      }}
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    {" "}
                    <p className=" font-normal text-base text-sinbadKYC-textGrey">Mobile Number</p>
                    <FormInput
                      id="phone"
                      name="phone"
                      label=""
                      placeholder=''
                      required
                      type="text"
                      autocomplete="phoneNumber"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center pt-8 space-x-6">
                  {/* <button
                    type="button"
                    className="bg-gray-200 dark:bg-afexdark-verydark p-4 rounded-lg px-5 text-base font-semibold text-gray-600 hover:shadow-lg"
                    onClick={() => {
                      resetForm();
                      setOpened(false);
                    }}
                  >
                    {t("Discard")}
                  </button> */}
                  <Botton
                    type="submit"
                    text={
                      <span className="flex items-center space-x-6">
                        {("Invite")}
                      </span>
                    }
                    loading={loading}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
    </>
  );
}

export default OnBoardClients;

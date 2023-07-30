import { Form, Formik } from "formik";
import  { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { request_password_reset } from "../../api";

import { TextInput } from "../../components";
import Button from "../../components/button";

import AuthProvider from "../../context/auth_context";

const ForgotPassword = () => {
  const queryProvider = useQueryClient();

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: request_password_reset,
    onSuccess: () => {
      queryProvider.invalidateQueries({ queryKey: ["reset-user"] }); // To  invalidate and refetch
    },
  });

  const [loading, setLoading] = useState(false);

  return (
    <>
      <AuthProvider>
        <div className=" bg-sinbadKYC-background w-screen h-screen justify-center py-20 mx-auto my-auto flex items-center">
          <div className="flex h-full w-full flex-col space-y-1 px-20 py-20">
            <div className="flex flex-col gap-2 text-center">
              <h3 className=" text-center text-sinbadKYC-grey text-2xl font-semibold">
                Forgot password?
              </h3>
              <p>No worries, we’ll send you reset instructions.</p>
            </div>

            <Formik
              initialValues={{ email: "" }}
              onSubmit={(values) => {
                const activated = {
                  ...values,
                };

                setLoading(true);
                mutation.mutate(activated);
                setLoading(false);
              }}
              validationSchema={Yup.object({
                email: Yup.string().required("Email is required"),
              })}
            >
              <Form className="w-full md:w-8/12 xl:w-5/12 2xl:w-4/12 p-8 space-y-8 m-auto rounded-xl  z-[2] relative">
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  autoFocus
                  placeholder="email"
                  label="Enter your email"
                />

                <div className="flex items-center justify-center flex-col space-y-4">
                  <Button
                    type="submit"
                    text={
                      <span className="flex items-center space-x-6">
                        Reset password
                      
                      </span>
                    }
                    loading={loading}
                  />

                  <span
                    onClick={() => {
                      navigate("/login");
                    }}
                    className=" text-sinbadKYC-grey/40 flex items-center gap-2 font-semibold hover:underline cursor-pointer"
                  >
                  <BsArrowLeft />{" "}  Back to log in
                  </span>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </AuthProvider>
    </>
  );
};

export default ForgotPassword;

import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { MdKeyboardArrowRight } from "react-icons/md";
import * as Yup from "yup";

import { TextInput } from "../../../components";
import Button from "../../../components/button";
import { useAuthCtx } from "../../../context";
import socialIcon from '../../../assets/svgs/Social icon.svg'
const LoginOverlay = () => {
  const navigate = useNavigate();
  const { login, loading } = useAuthCtx();

  return (
    <>
      <div className=" bg-sinbadKYC-background  w-screen h-screen absolute top-0 left-0 right-0 flex items-center">
        <div className="flex h-full w-full flex-col px-20">
          <div className=" flex flex-col justify-center text-center p-4 mt-4 ">
            <h2 className="text-sinbadKYC-darkgreen font-montserrat text-3xl font-bold p-5">
              Sindbad HQ
            </h2>
            <p className="text-center p-4 text-sinbadKYC-grey text-3xl font-bold">
              Log in to your account
            </p>
            <p className=" text-base">
              Welcome back! Please enter your details.
            </p>
          </div>

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => login(values)}
            validationSchema={Yup.object({
              email: Yup.string().required("email is required"),
              password: Yup.string().required("Password is required"),
            })}
          >
            <div className=" z-40">
              <Form className="w-full md:w-6/12 xl:w-5/12 2xl:w-4/12 p-8 space-y-4 m-auto rounded-xl z-[2] relative">
                <TextInput
                  id="email"
                  name="email"
                  type="text"
                  autocomplete="email"
                  autoFocus
                  placeholder="email"
                  label="email"
                />
                <TextInput
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  placeholder="Password"
                  label="Password"
                />

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <input
                      type="checkbox"
                      id="remember"
                      className="checkbox white"
                    />
                    <label
                      className="dark:text-textgrey-normal"
                      htmlFor="remember"
                    >
                      Remember for 30 days
                    </label>
                  </div>

                  <span
                    onClick={() => {
                      navigate("/");
                    }}
                    className=" text-sinbadKYC-darkgreen text-xl font-semibold  hover:underline cursor-pointer"
                  >
                    Forgot password
                  </span>
                </div>

                <div className="flex items-center justify-center flex-col xl:pt-12 space-y-4">
                  <Button
                    type="submit"
                    text={
                      <span className="flex items-center space-x-6">
                        Sign in
                        <MdKeyboardArrowRight />{" "}
                      </span>
                    }
                    loading={loading}
                  />

                  <button
                    type="button"
                    className=" w-full font-semibold text-sinbadKYC-grey text-xl bg-white py-4 rounded-lg hover:shadow inline-flex gap-2 space-x-2 items-center justify-center"
                   
                  >
                    <img src={socialIcon} alt=""/>
                   Sign in with Google
                  </button>

                   <p className=" text-sinbadKYC-lightGrey flex items-center gap-2">
                    Dont have an account?
                    <span
                      onClick={() => {
                        navigate('/create-account');
                      }}
                      className=" text-sinbadKYC-darkgreen text-base font-semibold hover:underline cursor-pointer">
                      Sign up
                    </span>
                  </p> 
                </div>
              </Form>
            </div>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default LoginOverlay;

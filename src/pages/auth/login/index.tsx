import { Form, Formik } from 'formik';
import { BrifecaseCross } from 'iconsax-react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import * as Yup from 'yup';

import { TextInput } from '../../../components';
import Button from '../../../components/button';
import { useAuthCtx } from '../../../context';

const LoginOverlay = () => {
  const { login, loading } = useAuthCtx();

  return (
    <>
      <div className="bg-sinbadKYC-grey  w-screen h-screen absolute top-0 left-0 right-0 flex items-center">
        <div className="flex h-full w-full flex-col px-20">
          <div className="relative xl:p-8 ">
            <h2 className=" flex items-center gap-1 text-sinbadKYC-white text-3xl font-bold">
              <BrifecaseCross
                size="25"
                variant="Bold"
                className=" text-sinbadKYC-background"
              />
              SinbadKYC
            </h2>
            <p className="mt- lg:mt-0 xl:mt-20 text-center  text-sinbadKYC-white text-3xl font-bold">
              Login
            </p>
          </div>

          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => login(values)}
            validationSchema={Yup.object({
              email: Yup.string().required('email is required'),
              password: Yup.string().required('Password is required'),
            })}>
            <div className=" z-40">
              <Form className="w-full md:w-6/12 xl:w-5/12 2xl:w-4/12 p-8 space-y-4 bg-white dark:bg-afexdark-darkest m-auto rounded-xl shadow-lg drop-shadow-lg z-[2] relative">
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
                      htmlFor="remember">
                      Remember me
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-center flex-col xl:pt-12 space-y-4">
                  <Button
                    type="submit"
                    text={
                      <span className="flex items-center space-x-6">
                        Submit
                        <MdKeyboardArrowRight />{' '}
                      </span>
                    }
                    loading={loading}
                  />

                  {/* <p className="flex gap-2">
                    Dont have an account?
                    <span
                      onClick={() => {
                        navigate('/create-account');
                      }}
                      className="text-bg-afexpurple text-red-400 font-semibole hover:underline cursor-pointer">
                      Register here
                    </span>
                  </p> */}
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

import { Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import afexLogo from '../../../assets/brand/AFEX-logo.png';
import cudiLogo from '../../../assets/brand/Cudi-Logo.png';
// import cuddieLogo from '../../../assets/brand/Cuddie 2.svg';
import flap from '../../../assets/brand/flap.svg';
import { TextInput } from '../../../components';
import Button from '../../../components/button';
import { useAuthCtx } from '../../../context';

const LoginOverlay = (props: { isVisible: boolean }) => {
  const { login, loading } = useAuthCtx();

  const navigate = useNavigate();

  return (
    <>
      {props.isVisible && (
        <motion.div
          className="bg-afexgray dark:bg-afexdark-verydark w-screen h-screen absolute top-0 left-0 right-0 flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}>
          <div className="flex h-full w-full flex-col px-20">
            <div className="relative xl:p-8 ">
              <motion.div
                className="absolute top-8 xl:top-10 left-[-20%] md:left-0 lg:left-0 "
                initial={{ transform: 'translateX(100%)', opacity: 0 }}
                animate={{ transform: 'translateX(0%)', opacity: 1 }}
                exit={{ opacity: 0, transform: 'translate(0,0)' }}
                transition={{ duration: 2 }}>
                <img src={cudiLogo} alt="cudi" className="w-24" />
              </motion.div>

              <h3 className="mt-10 lg:mt-0 xl:mt-20 py-8 text-center dark:text-textgrey-normal text-2xl font-semibold">
                Welcome to Cudie!
              </h3>
            </div>

            <Formik
              initialValues={{ username: '', password: '' }}
              onSubmit={(values) => login(values)}
              validationSchema={Yup.object({
                username: Yup.string().required('Username is required'),
                password: Yup.string().required('Password is required'),
              })}>
              <motion.div
                className=" z-40"
                initial={{ transform: 'translateY(-100%)', opacity: 0 }}
                animate={{ transform: 'translateY(0%)', opacity: 1 }}
                exit={{ opacity: 0, transform: 'translate(0,0)' }}
                transition={{ duration: 2 }}>
                <Form className="w-full md:w-6/12 xl:w-5/12 2xl:w-4/12 p-8 space-y-4 bg-white dark:bg-afexdark-darkest m-auto rounded-xl shadow-lg drop-shadow-lg z-[2] relative">
                  <TextInput
                    id="username"
                    name="username"
                    type="text"
                    autocomplete="username"
                    autoFocus
                    placeholder="Username"
                    label="Username"
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

                    <span
                      onClick={() => {
                        navigate('/forgot-password');
                      }}
                      className="text-bg-afexpurple text-red-400 font-semibole hover:underline cursor-pointer">
                      Forgot your password?
                    </span>
                  </div>
                </Form>
              </motion.div>
            </Formik>
          </div>

          <motion.div
            className="flex items-end justify-center absolute bottom-0 w-full flex-1 h-2/4 lg:h-2/3"
            style={{
              background: `url(${flap}) top/cover no-repeat`,
            }}
            initial={{ transform: 'translateY(100%)', opacity: 0 }}
            animate={{ transform: 'translateY(0%)', opacity: 1 }}
            exit={{ opacity: 0, transform: 'translate(0,0)' }}
            transition={{ duration: 2 }}>
            <p className="text-white p-6 flex items-center space-x-4 uppercase text-sm">
              Powered by <img src={afexLogo} alt="AFEX" />
            </p>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, transform: '(translateY(100%)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            className='flex items-end justify-center pb-16 absolute bottom-0 w-full flex-1 h-2/3'
            style={{
              background: `url(${flap}) top/cover no-repeat`,
            }}></motion.div> */}
        </motion.div>
      )}
    </>
  );
};

export default LoginOverlay;

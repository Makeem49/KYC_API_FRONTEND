import React from 'react';
import { motion } from 'framer-motion';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { useNavigate } from 'react-router-dom';
import { TextInput } from '../../../components';
import Button from '../../../components/button';

// import cuddieLogo from '../../../assets/brand/Cuddie 2.svg';
import flap from '../../../assets/brand/flap.svg';
import afexLogo from '../../../assets/brand/AFEX-logo.png';
import { useAuthCtx } from '../../../context';
import cudiLogo from '../../../assets/brand/Cudi-Logo.png';

const LoginOverlay = (props: { isVisible: boolean }) => {
  const { login, loading } = useAuthCtx();

  const navigate = useNavigate();

  return (
    <>
      {props.isVisible && (
        <motion.div
          className='bg-afexgray dark:bg-afexdark-verydark w-screen h-screen absolute top-0 left-0 right-0 flex items-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}>
          <motion.div
            initial={{ transform: 'translateY(-100%)', opacity: 0 }}
            animate={{ transform: 'translateY(0%)', opacity: 1 }}
            exit={{ opacity: 0, transform: 'translate(0,0)' }}
            transition={{ duration: 2 }}></motion.div>

          <div className='flex flex-1 h-full w-full flex-col space-y-14 px-20'>
            <motion.img
              // src={cuddieLogo}
              initial={{
                transform: 'translateX(-100%) translateY(-100%)',
              }}
              animate={{
                transform: 'translateX(0) translateY(30%)',
              }}
              transition={{ duration: 1 }}
              className='w-32'
            />

            <div className='relative p-8 '>
              <motion.div
                initial={{ transform: 'translateX(100%)', opacity: 0 }}
                animate={{ transform: 'translateX(0%)', opacity: 1 }}
                exit={{ opacity: 0, transform: 'translate(0,0)' }}
                transition={{ duration: 2 }}>
                <img src={cudiLogo} alt='cudi' className='w-24' />
              </motion.div>

              <h3 className=' mt-20 text-center text-2xl font-semibold'>
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
                className=' z-40'
                initial={{ transform: 'translateY(-100%)', opacity: 0 }}
                animate={{ transform: 'translateY(0%)', opacity: 1 }}
                exit={{ opacity: 0, transform: 'translate(0,0)' }}
                transition={{ duration: 2 }}>
                <Form className='w-full md:w-8/12 xl:w-5/12 2xl:w-4/12 p-8 space-y-8 bg-white dark:bg-afexdark-darkest m-auto rounded-xl shadow-lg drop-shadow-lg z-[2] relative'>
                  <TextInput
                    id='username'
                    name='username'
                    type='text'
                    autocomplete='username'
                    autoFocus
                    placeholder='Username'
                    label='Username'
                  />
                  <TextInput
                    id='password'
                    name='password'
                    type='password'
                    autocomplete='current-password'
                    placeholder='Password'
                    label='Password'
                  />

                  <div className='flex justify-between items-center'>
                    <div className='flex items-center space-x-4'>
                      <input
                        type='checkbox'
                        id='remember'
                        className='checkbox white'
                      />
                      <label htmlFor='remember'>Remember me</label>
                    </div>
                  </div>

                  <div className='flex items-center justify-center flex-col pt-12 space-y-4'>
                    <Button
                      type='submit'
                      text={
                        <span className='flex items-center space-x-6'>
                          Submit
                          <MdKeyboardArrowRight />{' '}
                        </span>
                      }
                      loading={loading}
                    />
                    {/* <button
                    className='bg-[#E1261C] text-white flex justify-center  font-bold px-5 p-4 rounded-lg items-center w-1/2 hover:shadow-md'
                    type='submit'>
                    Sign in
                    <MdKeyboardArrowRight className='text-3xl ' />
                  </button> */}

                    <span
                      onClick={() => {
                        navigate('/forgot-password');
                      }}
                      className='text-bg-afexpurple text-red-400 font-semibole hover:underline cursor-pointer'>
                      Forgot your password?
                    </span>
                  </div>
                </Form>
              </motion.div>
            </Formik>
          </div>

          <motion.div
            className='flex items-end justify-center pb-16 absolute bottom-0 w-full flex-1 h-2/3'
            style={{
              background: `url(${flap}) top/cover no-repeat`,
            }}
            initial={{ transform: 'translateY(100%)', opacity: 0 }}
            animate={{ transform: 'translateY(0%)', opacity: 1 }}
            exit={{ opacity: 0, transform: 'translate(0,0)' }}
            transition={{ duration: 2 }}>
            <p className='text-white flex items-center space-x-4 uppercase text-sm'>
              Powered by <img src={afexLogo} alt='AFEX' />
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

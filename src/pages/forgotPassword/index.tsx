import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { toast } from '../../utils';

import { TextInput } from '../../components';
import Button from '../../components/button';

// import cuddieLogo from '../../../assets/brand/Cuddie 2.svg';
import flap from '../../assets/brand/flap.svg';
import afexLogo from '../../assets/brand/AFEX-logo.png';
// import { useAuthCtx } from '../../context';
import AuthProvider from '../../context/auth_context';

// import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import { request_password_reset } from '../../api';
import { useMutation, useQueryClient } from 'react-query';
import cudiLogo from '../././../assets/brand/Cudi-Logo.png';

const ForgotPassword = () => {
  // const { search } = useLocation();
  // const token = search.split('=')[1];
  // console.log(token);

  // const accessRoken = pathname.split('/')[2];
  // const navigate = useNavigate();
  // const { login, loading } = useAuthCtx();

  const queryProvider = useQueryClient();

  const mutation = useMutation({
    mutationFn: request_password_reset,
    onSuccess: () => {
      queryProvider.invalidateQueries({ queryKey: ['reset-user'] }); // To  invalidate and refetch
      toast(
        'success',
        'Please check your mail',
        'A password reset link will be sent to you shortly'
      );
    },
  });

  const [loading, setLoading] = useState(false);

  return (
    <>
      <AuthProvider>
        <div className='bg-afexgray dark:bg-afexdark-verydark w-screen h-screen absolute top-0 left-0 right-0 flex items-center'>
          <div className='flex flex-1 h-full w-full flex-col space-y-20 px-20'>
            <div className='relative p-8 '>
              <div className='top-[30%] absolute'>
                <img src={cudiLogo} alt='' className=' w-20 ' />
              </div>

              <div className=' mt-20'>
                <h3 className='text-center text-2xl font-semibold'>
                  Reset your password
                </h3>

                <p className='p-5 mb-0 text-center mt-3 text-xl'>
                  Instructions to reset your account will be sent to the email
                  associatied with your account
                </p>
              </div>
            </div>

            <Formik
              initialValues={{ email: '' }}
              onSubmit={(values) => {
                const activated = {
                  ...values,
                };

                setLoading(true);
                mutation.mutate(activated);
                setLoading(false);
              }}
              validationSchema={Yup.object({
                email: Yup.string().required('Email is required'),
              })}>
              <Form className='w-full md:w-8/12 xl:w-5/12 2xl:w-4/12 p-8 space-y-8 bg-white dark:bg-afexdark-darkest m-auto rounded-xl shadow-lg drop-shadow-lg z-[2] relative'>
                <TextInput
                  id='email'
                  name='email'
                  type='email'
                  autocomplete='email'
                  autoFocus
                  placeholder='email'
                  label='Enter your email'
                />

                {/* 
              <div className='flex justify-between items-center'>
                <div className='flex items-center space-x-4'>
                  <input
                    type='checkbox'
                    id='remember'
                    className='checkbox white'
                  />
                  <label htmlFor='remember'>Remember me</label>
                </div>
              </div> */}

                <div className='flex items-center justify-center flex-col pt-12 space-y-4'>
                  <Button
                    type='submit'
                    text={
                      <span className='flex items-center space-x-6'>
                        Reset
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

                  {/* <span
                    // onClick={() => {
                    //   navigate('/login');
                    // }}
                    className='text-bg-afexpurple text-red-400 font-semibole hover:underline cursor-pointer'>
                    Log in
                  </span> */}
                </div>
              </Form>
            </Formik>
          </div>
          <div
            className='flex items-end justify-center pb-16 absolute bottom-0 w-full flex-1 h-2/3'
            style={{
              background: `url(${flap}) top/cover no-repeat`,
            }}>
            <p className='text-white flex items-center space-x-4 uppercase text-sm'>
              Powered by <img src={afexLogo} alt='AFEX' />
            </p>
          </div>
        </div>
      </AuthProvider>
    </>
  );
};

export default ForgotPassword;

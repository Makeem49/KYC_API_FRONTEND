import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import * as Yup from 'yup';

import cudiLogo from '../././../assets/brand/Cudi-Logo.png';
import { reset__user_Password } from '../../api';
import afexLogo from '../../assets/brand/AFEX-logo.png';
// import cuddieLogo from '../../../assets/brand/Cuddie 2.svg';
import flap from '../../assets/brand/flap.svg';
import { TextInput } from '../../components';
import Button from '../../components/button';

const ResetPassword = () => {
  const { search } = useLocation();
  const token = search.split('=')[1];
  // console.log(token);

  // const accessRoken = pathname.split('/')[2];
  const navigate = useNavigate();
  // const { login, loading } = useAuthCtx();

  const queryProvider = useQueryClient();

  const mutation = useMutation({
    mutationFn: reset__user_Password,
    onSuccess: () => {
      queryProvider.invalidateQueries({ queryKey: ['resetUserPassword'] }); // To  invalidate and refetch
    },
  });

  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className='bg-afexgray dark:bg-afexdark-verydark w-screen h-screen absolute top-0 left-0 right-0 flex items-center'>
        <div className='flex flex-1 h-full w-full flex-col space-y-20 px-20'>
          <div className='relative p-8 '>
            <div className='top-[30%] absolute'>
              <img src={cudiLogo} alt='' className=' w-20 ' />
            </div>

            <h3 className='mt-20 text-center dark:text-textgrey-normal text-2xl font-semibold'>
              Reset Password!
            </h3>
          </div>

          <Formik
            initialValues={{ username: '', password: '', token: '' }}
            onSubmit={(values) => {
              const activated = {
                ...values,
                token,
              };

              setLoading(true);
              mutation.mutate(activated);
              setLoading(false);
            }}
            validationSchema={Yup.object({
              username: Yup.string().required('Username is required'),
              password: Yup.string()
                .min(8, 'Password must be 8 characters long')
                .matches(/[0-9]/, 'Password requires a number')
                .matches(/[a-z]/, 'Password requires a lowercase letter')
                .matches(/[A-Z]/, 'Password requires an uppercase letter')
                .matches(/[^\w]/, 'Password requires a symbol')
                .required('Password is required'),
              passwordConfirmation: Yup.string().oneOf(
                [Yup.ref('password'), null],
                'Passwords must match'
              ),
            })}>
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
                label='Enter new password'
              />

              <TextInput
                id='passwordConfirmation'
                name='passwordConfirmation'
                type='password'
                autocomplete=''
                placeholder='Password'
                label='Confirm Password'
              />

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

                <span
                  onClick={() => {
                    navigate('/login');
                  }}
                  className='text-bg-afexpurple text-red-400 font-semibole hover:underline cursor-pointer'>
                  Log in
                </span>
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
    </>
  );
};

export default ResetPassword;

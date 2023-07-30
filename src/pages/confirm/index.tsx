import { Form, Formik } from 'formik';

import { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { createNewUser } from '../../api';
import { TextInput } from '../../components';
import Button from '../../components/button';



const ConfirmOverlay = () => {
  const navigate = useNavigate();

  const queryProvider = useQueryClient();

  const mutation = useMutation({
    mutationFn: createNewUser,
    onSuccess: () => {
      queryProvider.invalidateQueries({ queryKey: ['activate-user'] }); // To  invalidate and refetch
      setLoading(false);
    },
  });

  const [loading, setLoading] = useState(false);

  return (
    <>
     
        <div className=" bg-sinbadKYC-background w-screen h-screen absolute top-0 left-0 right-0 flex items-center">
          <div className="flex h-full w-full flex-col space-y-1 px-20">
            <div className="relative px-8 ">
             
              <p className="mt- lg:mt-0 xl:mt-20 text-center text-sinbadKYC-grey text-2xl font-bold">
                Create new user
              </p>
            </div>

            <Formik
              initialValues={{
                first_name: '',
                last_name: '',
                email: '',
                password: '',
              }}

              onSubmit={async (values) => {
                setLoading(true);
                const User = {
                  first_name: values.first_name,
                  last_name: values.last_name,
                  email: values.email,
                  password: values.password,
                };
              
                console.log(User, 'user'); // The typo is fixed here ('usre' to 'user')
              
                await mutation.mutate(User);
             
              }}
              
              
             
              validationSchema={Yup.object({
                first_name: Yup.string().required('First name is required'),
                last_name: Yup.string().required('Last name is required'),
                email: Yup.string().email('Invalid email address').required('Email is required'),
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
              })}

              
              >
              
                <Form className="w-full md:w-8/12 xl:w-5/12 2xl:w-4/12 p-8 space-y-4 m-auto rounded-xl z-[2] relative">
                  <TextInput
                    id="first_name"
                    name="first_name"
                    type="text"
                    autocomplete="text"
                    required
                    autoFocus
                    placeholder="Enter name"
                    label="Firstname"
                  />

                  <TextInput
                    id="last_name"
                    name="last_name"
                    type="text"
                    required
                    autocomplete="text"
                    autoFocus
                    placeholder="Enter name"
                    label="Lastname"
                  />

                  <TextInput
                    id="email"
                    name="email"
                    type="text"
                    autocomplete="text"
                    autoFocus
                    required
                    placeholder="e-mail"
                    label="E-mail"
                  />
                  <div className="flex gap-3 justify-between">
                    <TextInput
                      id="password"
                      name="password"
                      type="password"
                      required
                      autocomplete="text"
                      placeholder="Password"
                      label="Enter password"
                    />

                    <TextInput
                      id="passwordConfirmation"
                      name="passwordConfirmation"
                      type="password"
                      autocomplete="text"
                      placeholder="Password"
                      label="Confirm Password"
                    />
                  </div>

                  <div className="flex items-center justify-center flex-col pt-5 space-y-4">
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
                        navigate('/login');
                      }}
                      className=" underline text-sinbadKYC-grey font-semibole hover:underline cursor-pointer">
                      Log in
                    </span>
                  </div>
                </Form>
              
            </Formik>
          </div>
        </div>

    </>
  );
};

export default ConfirmOverlay;

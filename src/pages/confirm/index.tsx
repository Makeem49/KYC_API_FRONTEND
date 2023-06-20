import { Form, Formik } from 'formik';
import { BrifecaseCross } from 'iconsax-react';
import { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { createNewUser } from '../../api';
import { TextInput } from '../../components';
import Button from '../../components/button';
import AuthProvider from '../../context/auth_context';

const ConfirmOverlay = () => {
  const navigate = useNavigate();

  const queryProvider = useQueryClient();

  const mutation = useMutation({
    mutationFn: createNewUser,
    onSuccess: () => {
      queryProvider.invalidateQueries({ queryKey: ['activate-user'] }); // To  invalidate and refetch
    },
  });

  const [loading, setLoading] = useState(false);

  return (
    <>
      <AuthProvider>
        <div className=" bg-sinbadKYC-grey w-screen h-screen absolute top-0 left-0 right-0 flex items-center">
          <div className="flex flex-1 h-full w-full flex-col space-y-14 px-20">
            <div className="relative px-8 ">
              <h2 className=" flex mt-4 items-center gap-1 text-sinbadKYC-white text-3xl font-bold">
                <BrifecaseCross
                  size="25"
                  variant="Bold"
                  className=" text-sinbadKYC-background"
                />
                SinbadKYC
              </h2>
              <p className="mt- lg:mt-0 xl:mt-20 text-center  text-sinbadKYC-white text-3xl font-bold">
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
              onSubmit={(values) => {
                setLoading(true);
                const User = {
                  first_name: values.first_name,
                  last_name: values.last_name,
                  email: values.email,
                  password: values.password,
                };

                mutation.mutate(User);
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
              {({ handleSubmit }) => (
                <Form className="w-full md:w-8/12 xl:w-5/12 2xl:w-4/12 p-8 space-y-4 bg-white dark:bg-afexdark-darkest m-auto rounded-xl shadow-lg drop-shadow-lg z-[2] relative">
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
                      onClick={handleSubmit}
                    />

                    <span
                      onClick={() => {
                        navigate('/login');
                      }}
                      className=" underline text-red-400 font-semibole hover:underline cursor-pointer">
                      Log in
                    </span>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </AuthProvider>
    </>
  );
};

export default ConfirmOverlay;

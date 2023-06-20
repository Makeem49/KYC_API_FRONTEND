import { Form, Formik } from 'formik';
import { t } from 'i18next';
import { Add } from 'iconsax-react';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import * as Yup from 'yup';

import { Button, Modal } from '@mantine/core';

import { createNewUser } from '../../../../api';
import Botton from '../../../../components/button';
import { FormInput } from '../../../../components/form';

function CreateUser() {
  const queryClient = useQueryClient();
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const mutation = useMutation({
    mutationFn: createNewUser,
    onSuccess: () => {
      queryClient.invalidateQueries();
      // To  invalidate and refetch
    },
  });

  return (
    <>
      <Button
        className="hidden self-end md:block py-2 px-1 w-48 hover:bg-sinbadKYC-orange  bg-sinbadKYC-orange hover:shadow md:text-[16px] rounded-lg"
        onClick={() => {
          setOpened((s) => !s);
        }}>
        <span className="md:w-full text-lg">{t('Create new user')}</span>
        <Add />
      </Button>

      <Modal
        size="30%"
        withCloseButton={false}
        centered
        opened={opened}
        onClose={() => {
          setOpened((s) => !s);
        }}>
        {/* Map Component */}
        <div className="flex justify-center flex-col gap-2 p-10">
          <p className="text-center text-lg font-semibold">Create a user</p>
          <Formik
            initialValues={{
              first_name: '',
              last_name: '',
              email: '',
              password: '',
            }}
            onSubmit={async (values) => {
              const newUser = {
                first_name: values.first_name,
                last_name: values.last_name,
                email: values.email,
                password: values.password,
              };

              setLoading(true);
              mutation.mutate(newUser);

              setLoading(false);
              setOpened(false);
            }}
            validationSchema={Yup.object({
              first_name: Yup.string().required('Firstname is required'),
              last_name: Yup.string().required('Lastname is required'),
              email: Yup.string().required('email is required'),
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
            {({ resetForm }) => (
              <Form className="w-full flex p-8 border border-afexpurple-lighter dark:border-afexdark-dark rounded-lg flex-col gap-y-4">
                <div className="flex flex-col">
                  <FormInput
                    id="first_name"
                    name="first_name"
                    label="Firstname"
                    placeholder="Enter name"
                    required
                    type="text"
                    autocomplete="first_name"
                  />

                  <FormInput
                    id="last_name"
                    name="last_name"
                    label="Lastname"
                    placeholder="Enter name"
                    required
                    type="text"
                    autocomplete="last_name"
                  />

                  <FormInput
                    id="email"
                    name="email"
                    label="email"
                    placeholder="Enter email"
                    required
                    type="text"
                    autocomplete="email"
                  />

                  <FormInput
                    id="password"
                    name="password"
                    label="Password"
                    placeholder="Enter password"
                    required
                    type="text"
                    autocomplete="password"
                  />
                  <FormInput
                    id="passwordConfirmation"
                    name="passwordConfirmation"
                    type="password"
                    autocomplete=""
                    placeholder="Password"
                    label="Confirm Password"
                  />
                </div>

                <div className="flex items-center justify-center pt-8 space-x-6">
                  <button
                    type="button"
                    className="bg-gray-200 dark:bg-afexdark-verydark p-4 rounded-lg px-5 text-base font-semibold text-gray-600 hover:shadow-lg"
                    onClick={() => {
                      resetForm();
                      setOpened(false);
                    }}>
                    {t('Discard')}
                  </button>
                  <Botton
                    type="submit"
                    text={
                      <span className="flex items-center space-x-6">
                        {t('Submit')}
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

export default CreateUser;

import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { faker } from '@faker-js/faker';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { get_client_provider_query } from '../../../../../../queries/client_provider';

import {
  FormImage,
  FormInput,
  FormMultiSelect,
  // FromLabel,
} from '../../../../../../components/form';
// import MultiSelectDup from '../../../../../../components/form/multiselectDup';
import Button from '../../../../../../components/button';

import { create_user } from '../../../../../../api';

import { useUsersCtx } from '../../../../../../context';
import { toast } from '../../../../../../utils';
import * as Yup from 'yup';
import { t } from 'i18next';

const UserInfo = ({ closeModal }: { closeModal: () => void }) => {
  const { item, itemTwo } = useUsersCtx();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: create_user,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      toast('success', 'activation link will be sent to the users email'); // To  invalidate and refetch
    },
    onError: () => {
      toast(
        'error',
        'unable to create user',
        'please ensure you enter the required credentials'
      );
    },
  });

  const [loading, setLoading] = useState(false);
  const {
    data: list,
    isError,
    isLoading,
  } = useQuery(get_client_provider_query());
  if (isLoading) return <span> Loading......</span>;
  if (isError) return <span> Error!!!</span>;

  // console.log(list, 'provider');

  return (
    <div className='w-full flex flex-col gap-3 p-6'>
      <Formik
        initialValues={{
          fullName: '',
          username: '',
          email: '',
          // password: 'Password@1',
          roles: [],
          permissions: [],
          image: '',
          providers: [],
        }}
        onSubmit={async (values) => {
          const newUser = {
            username: values.username,
            email: values.email,
            firstName: values.fullName.split(' ')[0],
            lastName: values.fullName.split(' ')[1],
            // password: values.password,
            roles: values.roles,
            providers: values.providers,
            permissions: values.permissions,
            image: faker.image.people(640, 640),
          };
          setLoading(true);
          mutation.mutate(newUser);
          console.log(newUser);
          setLoading(false);
          closeModal();

          // const message = await create_user(newUser);

          // if (message === 'unable to create user') {
          //   alert(message);
          //   setLoading(false);
          // }
        }}
        validationSchema={Yup.object({
          fullName: Yup.string()
            .matches(
              /^[^\s]+(\s[^\s]+)?$/,
              'String must not have more than one space.'
            )
            .required('Full name is required'),
          username: Yup.string().required('Username is required'),
          email: Yup.string().required('Email is required'),
        })}>
        {({ resetForm }) => (
          <Form className='flex flex-col gap-y-4'>
            <FormImage
              label='Avatar'
              accepted={['.jpeg', '.jpg', '.png']}
              id='image'
              name='image'
            />

            <FormInput
              id='fullName'
              name='fullName'
              label='Full Name'
              placeholder='Full Name'
              required
              type='text'
              autocomplete='name'
            />
            <FormInput
              id='email'
              name='email'
              label='Email'
              placeholder='Email address'
              required
              type='email'
              autocomplete='email'
            />
            <div className='flex items-center space-x-4'>
              <div className='flex-1'>
                <FormInput
                  id='username'
                  name='username'
                  label='User Name'
                  placeholder='User Name'
                  required
                  type='text'
                  autocomplete='username'
                />
              </div>
              {/* <div className='flex-1'>
                <FormInput
                  id='password'
                  name='password'
                  label='Password'
                  placeholder='Password'
                  required
                  type='password'
                  autocomplete='current-password'
                />
              </div> */}
            </div>
            <div className='relative'>
              {/* <p className='absolute top-12 text-sm text-textgrey-light left-4 z-30'>
                Select Applicable Permissions
              </p>{' '} */}
              <FormMultiSelect
                data={item?.map((a) => {
                  return { value: a.id, label: a.name };
                })}
                id='permissions'
                name='permissions'
                label='Permissions'
                required
                placeholder=''
              />
            </div>

            <div className='relative'>
              {/* <p className='absolute top-12 text-sm text-textgrey-light left-4 z-30'>
                Select Applicable Roles
              </p> */}
              <FormMultiSelect
                data={itemTwo?.map((b) => {
                  return { value: b.id, label: b.name };
                })}
                id='roles'
                name='roles'
                label='Roles'
                required
                placeholder=''
              />
            </div>

            <div className='relative'>
              {/* <p className='absolute top-12 text-sm text-textgrey-light left-4 z-30'>
                Select Provider
              </p> */}

              <FormMultiSelect
                data={list!?.map((b) => {
                  return { value: b.id, label: b.name };
                })}
                id='providers'
                name='providers'
                label='Providers'
                required
                placeholder=''
              />
            </div>

            <div className='flex items-center justify-center pt-8 space-x-6'>
              <button
                type='button'
                className='bg-gray-200 dark:bg-afexdark-verydark p-4 rounded-lg px-5 text-base font-semibold text-gray-600 hover:shadow-lg'
                onClick={() => {
                  resetForm();
                  closeModal();
                }}>
                {t('Discard')}
              </button>
              <Button
                type='submit'
                text={
                  <span className='flex items-center space-x-6'>
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
  );
};

export default UserInfo;

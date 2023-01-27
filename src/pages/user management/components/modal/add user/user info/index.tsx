import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { faker } from '@faker-js/faker';

import {
  FormImage,
  FormInput,
  FormMultiSelect,
  // FromLabel,
} from '../../../../../../components/form';
import Button from '../../../../../../components/button';

import { create_user } from '../../../../../../api';

import { useUsersCtx } from '../../../../../../context';

const UserInfo = ({ closeModal }: { closeModal: () => void }) => {
  const { refreshContext, item, itemTwo } = useUsersCtx();

  const [loading, setLoading] = useState(false);

  return (
    <div className='w-full flex flex-col gap-3 p-6'>
      <Formik
        initialValues={{
          fullName: '',
          username: '',
          email: '',
          password: '',
          roles: [],
          permissions: [],
          image: '',
        }}
        onSubmit={async (values) => {
          const newUser = {
            username: values.username,
            email: values.email,
            firstName: values.fullName.split(' ')[0],
            lastName: values.fullName.split(' ')[1],
            password: values.password,
            roles: values.roles,
            permissions: values.permissions,
            image: faker.image.people(640, 640),
          };
          setLoading(true);
          const message = await create_user(newUser);

          if (message === 'unable to create user') {
            alert(message);
            setLoading(false);
          }
          setLoading(false);

          refreshContext();
          closeModal();
        }}>
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
              placeholder='Full name'
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
                  id='userName'
                  name='userName'
                  label='Username'
                  placeholder='Username'
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

            <FormMultiSelect
              // data={[
              //   // { value: 1, label: 'Permission 1' },
              //   // { value: 2, label: 'Permission 2' },
              //   // { value: 3, label: 'Permission 3' },
              //   // { value: 4, label: 'Permission 4' },
              // ]}
              data={item?.map((a) => {
                return { value: a.id, label: a.name };
              })}
              id='permissions'
              name='permissions'
              label='Set applicable Permissions'
              required
              placeholder='Set applicable Permissions'
            />
            <FormMultiSelect
              data={itemTwo?.map((b) => {
                return { value: b.id, label: b.name };
              })}
              id='roles'
              name='roles'
              label='Set applicable Roles'
              required
              placeholder='Set applicable Roles'
            />

            <div className='flex items-center justify-center pt-8 space-x-6'>
              <button
                type='button'
                className='bg-gray-200 p-4 rounded-lg px-5 text-base font-semibold text-gray-600 hover:shadow-lg'
                onClick={() => resetForm()}>
                Discard
              </button>
              <Button
                type='submit'
                text={
                  <span className='flex items-center space-x-6'>Submit</span>
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

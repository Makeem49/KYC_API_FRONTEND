import React from 'react';
// import { faker } from '@faker-js/faker';
import { Formik, Form } from 'formik';
import { useSingleUserCtx } from '../../../context/single_user.ctx';
import { useUsersCtx } from '../../../../../../context';
import {
  FormImage,
  FormInput,
  FormMultiSelect,
} from '../../../../../../components/form';

const UserInfo = ({ close }: { close: () => void }) => {
  const { data } = useSingleUserCtx();
  const { item, itemTwo } = useUsersCtx();
  console.log(data);
  return (
    <div className='w-full flex flex-col gap-3 p-6'>
      {/* INPUT FIELDS */}

      <Formik
        initialValues={{
          ...data,
          fullName: `${data?.firstName} ${data.lastName}`,
          username: `${data?.username}`,
          email: `${data.email}`,
          roles: `${data.roles}`,
          permissions: `${data.permissions}`,
          image: `${data.image}`,
        }}
        onSubmit={() => {}}>
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
                  id='username'
                  name='username'
                  label='Username'
                  placeholder='Username'
                  required
                  type='text'
                  autocomplete='username'
                />
              </div>
              <div className='flex-1'>
                <FormInput
                  id='password'
                  name='password'
                  label='Password'
                  placeholder='Password'
                  required
                  type='password'
                  autocomplete='current-password'
                />
              </div>
            </div>

            <FormMultiSelect
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
              <button
                type='submit'
                className='bg-afexred-regular p-4 rounded-lg px-5 text-base font-semibold text-white hover:shadow-lg'>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserInfo;

import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { faker } from '@faker-js/faker';

import { update_user } from '../../../../../../api';
import Button from '../../../../../../components/button';
import {
  FormImage,
  FormInput,
  FormMultiSelect,
} from '../../../../../../components/form';
import { useGetPermissions, useGetRoles } from '../../../../../../queries';
import { toast } from '../../../../../../utils';

// import { useSingleUserCtx } from '../../../context/single_user.ctx';

interface AddUserProps extends ModalControllerType {
  data: User;
}

const UserInfo = ({ data, close, show }: AddUserProps) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (payload: User) => update_user(data.username, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] }); // To  invalidate and refetch
    },
  });
  const { data: item } = useGetPermissions();
  const { data: itemTwo } = useGetRoles();

  const [loading, setLoading] = useState(false);

  return (
    <div className="w-full flex flex-col gap-3 p-6">
      {/* INPUT FIELDS */}

      <Formik
        initialValues={{
          ...data,
          fullName: `${data?.firstName} ${data.lastName}`,
          username: `${data?.username}`,
          email: `${data.email}`,
          roles: data.roles,
          providers: data.providerId,
          permissions: data.permissions,
          image: `${data.image}`,
        }}
        onSubmit={async (values) => {
          const updateUser: any = {
            // username: values.username,
            email: values.email,
            firstName: values.fullName.split(' ')[0],
            lastName: values.fullName.split(' ')[1],
            roles: values.roles,
            providers: data.providerId,
            permissions: values.permissions,
            image: faker.image.people(640, 640),
          };

          setLoading(true);
          mutation.mutate(updateUser);

          setLoading(false);
          toast('success', 'User created successfully');
        }}>
        {({ resetForm }) => (
          <Form className="flex flex-col gap-y-4">
            <FormImage
              label="Avatar"
              accepted={['.jpeg', '.jpg', '.png']}
              id="image"
              name="image"
            />
            <FormInput
              id="fullName"
              name="fullName"
              label="Full Name"
              placeholder="Full name"
              required
              type="text"
              autocomplete="name"
            />
            <FormInput
              id="email"
              name="email"
              label="Email"
              placeholder="Email address"
              required
              type="email"
              autocomplete="email"
            />

            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <FormInput
                  id="username"
                  name="username"
                  label="Username"
                  placeholder="Username"
                  required
                  type="text"
                  autocomplete="username"
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
              data={item!?.map((a) => {
                return { value: a.id, label: a.name };
              })}
              id="permissions"
              name="permissions"
              label="Permissions"
              required
              placeholder=""
            />
            <FormMultiSelect
              data={itemTwo!?.map((b) => {
                return { value: b.id, label: b.name };
              })}
              id="roles"
              name="roles"
              label="Roles"
              required
              placeholder=""
            />

            <div className="flex items-center justify-center pt-8 space-x-6">
              <button
                type="button"
                className="bg-gray-200 dark:bg-afexdark-verydark p-4 rounded-lg px-5 text-base font-semibold text-gray-600 hover:shadow-lg"
                onClick={() => {
                  resetForm();
                  close();
                }}>
                Discard
              </button>
              <Button
                type="submit"
                text={
                  <span className="flex items-center space-x-6">Submit</span>
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

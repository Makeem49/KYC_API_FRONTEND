import React from 'react';
import { Menu } from '@mantine/core';
import { ArrowDown2 } from 'iconsax-react';

import { Formik, Form } from 'formik';
import { useSingleUserCtx } from '../../../context/single_user.ctx';
import { TextInput } from '../../../../../../components';

const UserInfo = ({ close }: { close: () => void }) => {
  const { data } = useSingleUserCtx();
  return (
    <div className='w-full flex flex-col gap-3 p-6'>
      {/* AVATAR */}
      <div className='flex flex-col gap-5'>
        <p>Avatar</p>
        {/* BOX */}
        <div className='bg-[#D9D9D9] border-[#FFFF] w-[100px] h-[100px]'></div>

        <p className='text-[14px] font-normal text-[#8F8E91]'>
          Allowed file types: png, jpg, jpeg.
        </p>
      </div>

      {/* INPUT FIELDS */}

      <Formik
        initialValues={{
          ...data,
          fullName: `${data.firstName} ${data.lastName}`,
        }}
        onSubmit={() => {}}>
        <Form className='flex flex-col gap-3'>
          <TextInput
            id='fullName'
            name='fullName'
            type='text'
            label='Fullname'
            placeholder='Fullname'
            inputClass='h-[36px] text-sm p-3 px-3 border-color'
            labelClass='mb-2 font-semibold text-[#000000] '
          />
          <TextInput
            id='email'
            name='email'
            type='text'
            label='Email'
            placeholder='Fullname'
            inputClass='h-[36px] text-sm p-3 px-3 border-color'
            labelClass='mb-2 font-semibold text-[#000000] '
          />

          <div className='flex flex-col'>
            <label
              htmlFor='phonNumber'
              className='text-base font-semibold mb-2'>
              Phone number
            </label>
            <div className='flex space-x-4 items-end w-full'>
              <div className='w-16'>
                <TextInput
                  id='countryCode'
                  name='countryCode'
                  type='text'
                  placeholder='+234'
                  inputClass='h-[36px] text-sm p-3 px-3'
                />
              </div>
              <TextInput
                id='phoneNumber'
                name='phoneNumber'
                type='tel'
                placeholder='Phone Number'
                inputClass='h-[36px] text-sm p-3 px-3 border-color'
                labelClass='mb-2 font-semibold text-[#000000] '
              />
            </div>
          </div>
          <div className='w-full h-full mt-5'>
            <Menu shadow='md' width='90%'>
              <Menu.Target>
                <div className='flex justify-between items-center border p-3 border-[#DADADD] rounded-lg text-left  text-[14px] font-normal text-textgrey-Light hover:bg-white bg-[#ffff] w-full'>
                  <span> Select Applicable Role</span>
                  <ArrowDown2 size='16' color='#8F8E91' variant='Bold' />
                </div>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item>Payment Analyst</Menu.Item>
                <Menu.Item>Finance Manager</Menu.Item>
                <Menu.Item>Clearing Intern</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>

          <div className='w-full h-full mt-5'>
            <Menu shadow='md' width='90%' position='top'>
              <Menu.Target>
                <div className='flex p-3 justify-between items-center border border-[#DADADD] rounded-lg text-left text-[14px] font-normal text-textgrey-Light hover:bg-white bg-[#ffff] w-full'>
                  <span>Set applicable Permissions</span>
                  <ArrowDown2 size='16' color='#8F8E91' variant='Bold' />
                </div>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item>Can view transaction log</Menu.Item>
                <Menu.Item>can create admin user </Menu.Item>
                <Menu.Item>can deactivate admin user </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>

          <div className='w-full mt-5 gap-8 flex justify-center'>
            <button
              className='p-4 rounded-lg bg-[#F0F0F0] text-[#8F8E91]'
              onClick={close}>
              Discard
            </button>
            <button className='p-4 rounded-lg bg-afexpurple-dark text-[#ffff]'>
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default UserInfo;

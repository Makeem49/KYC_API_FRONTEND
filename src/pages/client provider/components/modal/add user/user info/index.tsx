import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { FormImage, FormInput } from '../../../../../../components/form';
// import { create_user } from '../../../../../../api';

import { useUsersCtx } from '../../../../../../context';

import { faker } from '@faker-js/faker';

const UserInfo = () => {
  const { refreshContext } = useUsersCtx();
  const [enabled, setEnabled] = useState(false);
  return (
    <div className='w-full flex flex-col gap-3 p-6'>
      <Formik
        initialValues={{
          name: '',
          code: '',
          clientRepoUrl: '',
          walletTransactionCallbackUrl: '',
          inventoryPositionUrl: '',
          transactionPhrase: '',
          image: '',
        }}
        onSubmit={async (values) => {
          const newProvider = {
            name: values.name,
            code: values.code,
            clientRepoUrl: values.clientRepoUrl,
            walletTransactionCallbackUrl: values.walletTransactionCallbackUrl,
            inventoryPositionUrl: values.inventoryPositionUrl,
            transactionPhrase: values.transactionPhrase,
            image: faker.image.people(640, 640),
          };
          const message = newProvider;
          console.log(message);

          refreshContext();
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
              id='name'
              name='name'
              label=' Name'
              placeholder='Enter name'
              required
              type='text'
              autocomplete='text'
            />
            <FormInput
              id='code'
              name='code'
              label='Code'
              placeholder='code'
              required
              type='text'
              autocomplete='code'
            />
            <FormInput
              id='clientRepoUrl'
              name='clientRepoUrl'
              label='Clients Callback URL'
              placeholder='Enter URL'
              required
              type='text'
              autocomplete='URL'
            />
            <FormInput
              id='walletTransactionCallbackUrl'
              name='walletTransactionCallbackUrl'
              label='Wallet Transaction Callback Url'
              placeholder='Enter URL'
              required
              type='text'
              autocomplete='URL'
            />
            <FormInput
              id='inventoryPositionUrl'
              name='inventoryPositionUrl'
              label='Inventory Position Url'
              placeholder='Enter URL'
              required
              type='text'
              autocomplete='URL'
            />
            <FormInput
              id=' transactionPhrase'
              name='transactionPhrase'
              label='Transaction Phrase'
              placeholder='Enter Phrase'
              required
              type='text'
              autocomplete='URL'
            />

            <label className='inline-flex relative items-center cursor-pointer'>
              <input
                type='checkbox'
                className='sr-only peer'
                checked={enabled}
                readOnly
              />
              <div
                onClick={() => {
                  setEnabled(!enabled);
                }}
                className='w-12 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-afexpurple peer-checked:after:translate-x-full peer-checked:after:border-whit after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-afexpurple '></div>
            </label>

            <div className='flex items-center justify-center pt-8 space-x-6'>
              <button
                type='button'
                className='bg-gray-200 p-4 rounded-lg px-5 text-base font-semibold text-gray-600 hover:shadow-lg'
                onClick={() => resetForm()}>
                Discard
              </button>
              <button
                type='submit'
                className='bg-afexpurple p-4 rounded-lg px-5 text-base font-semibold text-white hover:shadow-lg'>
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

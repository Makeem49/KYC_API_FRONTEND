import React from 'react';
import { Form, Formik } from 'formik';
import { FormImage, FormInput } from '../../../../../../components/form';
import ToggleButton from '../../../../../../components/toggleButton';
import { faker } from '@faker-js/faker';
import { useSingleClientCtx } from '../../../context/single_user.ctx';

const UserInfo = () => {
  const { data } = useSingleClientCtx();
  return (
    <div className='w-full h-full overflow-y-auto flex flex-col gap-3 p-6'>
      <Formik
        initialValues={{
          ...data,
          name: `${data.name}`,
          code: `${data.code}`,
          clientRepoUrl: `${data.clientRepoUrl}`,
          walletTransactionCallbackUrl: `${data.walletTransactionCallbackUrl}`,
          inventoryPositionUrl: `${data.inventoryPositionUrl}`,
          transactionPhrase: `${data.transactionPhrase}`,

          API_KEY: `${data.requestHeaders.API_KEY}`,
          REQUEST_TS: `${data.requestHeaders.REQUEST_TS}`,
          HASH_KEY: `${data.requestHeaders.HASH_KEY}`,
          image: `${data.image}`,
          checkWalletBalanceEnabled: `${data.checkWalletBalanceEnabled}`,
          bankTransferEnabled: `${data.bankTransferEnabled}`,
          clientTransferEnabled: `${data.clientTransferEnabled}`,
          checkInventoryPositionEnabled: `${data.checkInventoryPositionEnabled}`,
          tradeInventoryTransactionEnabled: `${data.tradeInventoryTransactionEnabled}`,
          allowAutoApproveFundRequest: `${data.allowAutoApproveFundRequest}`,
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
            checkWalletBalanceEnabled: values.checkWalletBalanceEnabled,
            bankTransferEnabled: values.bankTransferEnabled,
            clientTransferEnabled: values.clientTransferEnabled,
            checkInventoryPositionEnabled: values.checkInventoryPositionEnabled,
            tradeInventoryTransactionEnabled:
              values.tradeInventoryTransactionEnabled,
            allowAutoApproveFundRequest: values.allowAutoApproveFundRequest,
          };
          console.log(newProvider);
        }}>
        {({ resetForm }) => (
          <Form className='flex overflow-y-auto flex-col gap-y-4'>
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

            <ToggleButton
              label='Check Wallet Balance Enabled'
              id='checkWalletBalanceEnabled'
              name='checkWalletBalanceEnabled'
            />
            <ToggleButton
              label='Bank Transfer Enabled'
              id='bankTransferEnabled'
              name='bankTransferEnabled'
            />

            <ToggleButton
              label='Client Transfer Enabled'
              id=' clientTransferEnabled'
              name='clientTransferEnabled'
            />

            <ToggleButton
              label='Check Inventory Position Enabled'
              id='checkInventoryPositionEnabled'
              name='checkInventoryPositionEnabled'
            />

            <ToggleButton
              label='Trade Inventory Transaction Enabled'
              id='tradeInventoryTransactionEnabled'
              name='tradeInventoryTransactionEnabled'
            />

            <div className='flex items-center mb-6 justify-center space-x-6'>
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

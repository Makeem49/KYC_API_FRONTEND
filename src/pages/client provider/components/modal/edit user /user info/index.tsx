import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import {
  FormImage,
  FormInput,
  FormMultiSelect,
} from '../../../../../../components/form';
import Button from '../../../../../../components/button';
import ToggleButton from '../../../../../../components/toggleButton';
import { faker } from '@faker-js/faker';
import { useSingleClientCtx } from '../../../context/single_user.ctx';
import { edit_client_provider_info } from '../../../../../../api';
import { useClientsCtx } from '../../../../../../context';
const UserInfo = () => {
  const { data } = useSingleClientCtx();
  console.log(data);
  const { refreshContext } = useClientsCtx();
  const [loading, setLoading] = useState(false);

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
          countryCode: `${data.countryCode}`,
          image: `${data.image}`,
          checkWalletBalanceEnabled: data.checkWalletBalanceEnabled,
          bankTransferEnabled: data.bankTransferEnabled,
          clientTransferEnabled: data.clientTransferEnabled,
          checkInventoryPositionEnabled: data.checkInventoryPositionEnabled,
          tradeInventoryTransactionEnabled:
            data.tradeInventoryTransactionEnabled,
          allowAutoApproveFundRequest: data.allowAutoApproveFundRequest,
        }}
        onSubmit={async (values) => {
          const updateProvider = {
            id: data.id,
            name: values.name,
            code: values.code,
            clientRepoUrl: values.clientRepoUrl,
            walletTransactionCallbackUrl: values.walletTransactionCallbackUrl,
            inventoryPositionUrl: values.inventoryPositionUrl,
            transactionPhrase: values.transactionPhrase,
            requestHeaders: {
              API_KEY: values.API_KEY,
              REQUEST_TS: values.REQUEST_TS,
              HASH_KEY: values.HASH_KEY,
            },
            countryCode: values.countryCode[0],
            image: faker.image.people(640, 640),
            checkWalletBalanceEnabled: values.checkWalletBalanceEnabled,
            bankTransferEnabled: values.bankTransferEnabled,
            clientTransferEnabled: values.clientTransferEnabled,
            checkInventoryPositionEnabled: values.checkInventoryPositionEnabled,
            tradeInventoryTransactionEnabled:
              values.tradeInventoryTransactionEnabled,
            allowAutoApproveFundRequest: values.allowAutoApproveFundRequest,
          };
          // console.log({ updateProvider });

          const message = await edit_client_provider_info(
            values.id,
            updateProvider
          );
          alert(message);
          setLoading(false);

          refreshContext();
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
              label='Client Repo URL'
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

            <FormInput
              id='API_KEY'
              name='API_KEY'
              label='API KEY'
              placeholder='Enter API KEY'
              required
              type='text'
              autocomplete='text'
            />

            <FormInput
              id='REQUEST_TS'
              name='REQUEST_TS'
              label='Request Time'
              placeholder='Enter request'
              required
              type='text'
              autocomplete='text'
            />

            <FormInput
              id='HASH_KEY'
              name='HASH_KEY'
              label='Hash Key'
              placeholder='Enter key'
              required
              type='text'
              autocomplete='text'
            />

            <FormMultiSelect
              data={[
                { value: 'GH', label: 'Ghana' },
                { value: 'KE', label: 'Kenya' },
                { value: 'NG', label: 'Nigeria' },
                { value: 'UG', label: 'Uganda' },
              ]}
              id='countryCode'
              name='countryCode'
              label='Country'
              required
              placeholder='Select Country'
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

            <ToggleButton
              label='Allow Auto Approve FundRequest'
              id='allowAutoApproveFundRequest'
              name='allowAutoApproveFundRequest'
            />

            <div className='flex items-center mb-6 justify-center space-x-6'>
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

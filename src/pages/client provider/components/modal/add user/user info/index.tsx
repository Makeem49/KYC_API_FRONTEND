import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import {
  FormImage,
  FormInput,
  // FormMultiSelect,
} from '../../../../../../components/form';
import MultiSelectDup from '../../../../../../components/form/multiselectDup';
// import DoubleInput from '../../../../../../components/dynamicInput';
import Button from '../../../../../../components/button';
import ToggleButton from '../../../../../../components/toggleButton';

import { create_client_provider } from '../../../../../../api';

import { faker } from '@faker-js/faker';
import { useMutation, useQueryClient } from 'react-query';
// import { toast } from '../../../../../../utils';
import { t } from 'i18next';
import * as Yup from 'yup';

// import DoubleForm from '../../../../../../components/dynamicInput';

const UserInfo = ({ closeModal }: { closeModal: () => void }) => {
  const [loading, setLoading] = useState(false);

  const queryProvider = useQueryClient();

  const mutation = useMutation({
    mutationFn: create_client_provider,
    onSuccess: () => {
      queryProvider.invalidateQueries({ queryKey: ['clientProvider'] });
      closeModal();
      // toast('success', 'Client Provider created successfully');
      // To  invalidate and refetch
    },
  });

  return (
    <div className='w-full h-full overflow-y-auto flex flex-col gap-3 p-6'>
      <Formik
        initialValues={{
          name: '',
          code: '',
          logo: '',
          clientRepoUrl: '',
          walletTransactionCallbackUrl: '',
          inventoryPositionUrl: '',
          inventoryTradeUrl: '',
          locationsUrl: '',
          loanCallbackUrl: '',
          transactionPhrase: '',
          checkInventoryPositionEnabled: false,
          tradeInventoryTransactionEnabled: false,
          requestHeaders: {},
          allowAutoApproveFundRequest: false,

          countryCode: '',
        }}
        onSubmit={async (values) => {
          const newProvider = {
            name: values.name,
            code: values.code,
            logo: faker.image.people(640, 640),
            clientRepoUrl: values.clientRepoUrl,
            walletTransactionCallbackUrl: values.walletTransactionCallbackUrl,
            inventoryPositionUrl: values.inventoryPositionUrl,
            inventoryTradeUrl: values.inventoryTradeUrl,
            locationsUrl: values.locationsUrl,
            loanCallbackUrl: values.loanCallbackUrl,
            transactionPhrase: values.transactionPhrase,
            checkInventoryPositionEnabled: values.checkInventoryPositionEnabled,
            tradeInventoryTransactionEnabled:
              values.tradeInventoryTransactionEnabled,
            requestHeaders: {
              API_KEY: 'kUvOHKMrkd',
              REQUEST_TS: new Date().toISOString(),
              HASH_KEY: 'TNiD1NXGW0Pk8Gou7XfuHSpi8SBJRYIA',
            },
            allowAutoApproveFundRequest: values.allowAutoApproveFundRequest,
            countryCode: values.countryCode[0],
          };

          setLoading(true);
          mutation.mutate(newProvider);
          setLoading(false);
          // console.log(newProvider);
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Name cannot be empty'),
          code: Yup.string().required('Code cannot be empty'),
          clientRepoUrl: Yup.string()
            .matches(
              /^(http:\/\/|https:\/\/)/,
              'URL must start with http:// or https://'
            )
            .url('Invalid URL')
            .required('Required'),

          walletTransactionCallbackUrl: Yup.string()
            .matches(
              /^(http:\/\/|https:\/\/)/,
              'URL must start with http:// or https://'
            )
            .url('Invalid URL')
            .required('Required'),

          inventoryPositionUrl: Yup.string()
            .matches(
              /^(http:\/\/|https:\/\/)/,
              'URL must start with http:// or https://'
            )
            .url('Invalid URL')
            .required('Required'),

          inventoryTradeUrl: Yup.string()
            .matches(
              /^(http:\/\/|https:\/\/)/,
              'URL must start with http:// or https://'
            )
            .url('Invalid URL')
            .required('Required'),

          locationsUrl: Yup.string()
            .matches(
              /^(http:\/\/|https:\/\/)/,
              'URL must start with http:// or https://'
            )
            .url('Invalid URL')
            .required('Required'),

          loanCallbackUrl: Yup.string()
            .matches(
              /^(http:\/\/|https:\/\/)/,
              'URL must start with http:// or https://'
            )
            .url('Invalid URL')
            .required('Required'),
          transactionPhrase: Yup.string().required(
            'Transaction phrase is required'
          ),
        })}>
        {({ resetForm }) => (
          <Form className='flex overflow-y-auto flex-col gap-y-4'>
            <FormImage
              label='Avatar'
              accepted={['.jpeg', '.jpg', '.png']}
              id='logo'
              name='logo'
            />
            <FormInput
              id='name'
              name='name'
              label='Name'
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
              label='Clients Repo URL'
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
              id='inventoryTradeUrl'
              name='inventoryTradeUrl'
              label='Inventory Trade Url'
              placeholder='Enter URL'
              required
              type='text'
              autocomplete='URL'
            />

            <FormInput
              id='locationsUrl'
              name='locationsUrl'
              label='Locations Url'
              placeholder='Enter URL'
              required
              type='text'
              autocomplete='URL'
            />

            <FormInput
              id='loanCallbackUrl'
              name='loanCallbackUrl'
              label='Loan Callback Url'
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

            <MultiSelectDup
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
              placeholder=''
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

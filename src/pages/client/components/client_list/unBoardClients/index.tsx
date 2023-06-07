import { Form, Formik } from 'formik';
import { t } from 'i18next';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import * as Yup from 'yup';

import { Button, Modal } from '@mantine/core';

import { re_on_board_clients } from '../../../../../api';
import Botton from '../../../../../components/button';
import { FormInput } from '../../../../../components/form';

function OnBoardClients() {
  const queryClient = useQueryClient();
  const [opened, setOpened] = useState(false);
  const { mutate, isLoading } = useMutation({
    mutationFn: re_on_board_clients,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reOnBoardClients'] });
      // To  invalidate and refetch
    },
  });
  console.log(mutate);
  return (
    <>
      <Button
        className="hidden md:block md:w-[300px] items-center gap-2 py-2 px-3 hover:bg-afexpurple-regular hover:shadow text-white md:text-[16px] bg-afexpurple-regular rounded-lg"
        onClick={() => {
          setOpened((s) => !s);
        }}>
        <span className="md:w-full text-xs">{t(' RE-ONBOARD CLIENTS')}</span>
      </Button>

      <Modal
        size="30%"
        withCloseButton={false}
        centered
        opened={opened}
        onClose={() => setOpened((s) => !s)}>
        {/* Map Component */}
        <div className="flex justify-center p-10">
          <Formik
            initialValues={{
              onboard: '',
            }}
            onSubmit={async (values) => {
              // Convert comma-separated string to an array of trimmed strings
              const onBoard = values.onboard.split(',');

              // mutate({ onBoard });
              console.log(onBoard);
            }}
            validationSchema={Yup.object({
              onboard: Yup.string()
                .required('Phonenumber(s) or platformId(s) is required')
                .matches(
                  /^(?:(?:\d{11}|(?:\+\d{1,3})?\d{10}|\d{3}-\d{5}-\d{6}),)*\d{11}|(?:\+\d{1,3})?\d{10}|\d{3}-\d{5}-\d{6}$/,
                  'Invalid format. Please enter valid phone numbers or platform IDs separated by commas.'
                ),
            })}>
            {({ resetForm }) => (
              <Form className="w-full flex p-8 border border-afexpurple-lighter dark:border-afexdark-dark rounded-lg flex-col gap-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <FormInput
                      id="onboard"
                      name="onboard"
                      label="Re-onboard Clients"
                      placeholder="Enter phonenumber(s) or platformId(s)"
                      required
                      type="text"
                      autocomplete="onboard"
                    />
                  </div>
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
                    loading={isLoading}
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

export default OnBoardClients;

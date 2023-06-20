import { Form, Formik } from 'formik';
import { t } from 'i18next';
import { Add } from 'iconsax-react';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { Button, Modal } from '@mantine/core';

import { create_user } from '../../../api';
import Botton from '../../../components/button';
import { FormInput } from '../../../components/form';
import SelectOne from '../../../components/form/select-one';

const data = [
  { id: 1, country: 'Nigeria' },
  { id: 2, country: 'Ghana' },
];

function OnBoardClients() {
  const queryClient = useQueryClient();
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const mutation = useMutation({
    mutationFn: create_user,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['waitList'] });
      // To  invalidate and refetch
    },
  });

  return (
    <>
      <Button
        className="hidden self-end md:block py-2 px-1 w-48 hover:bg-sinbadKYC-orange  bg-sinbadKYC-orange hover:shadow md:text-[16px] rounded-lg"
        onClick={() => {
          setOpened((s) => !s);
        }}>
        <span className="md:w-full text-lg">{t('Onboard Clent')}</span>
        <Add />
      </Button>

      <Modal
        size="30%"
        withCloseButton={false}
        centered
        opened={opened}
        onClose={() => {
          setOpened((s) => !s);
        }}>
        {/* Map Component */}
        <div className="flex justify-center flex-col gap-2 p-10">
          <p className="text-center text-lg font-semibold">Onboard a Client</p>
          <Formik
            initialValues={{
              phone: '',
            }}
            onSubmit={async (values) => {
              const newUser = { phone: values.phone };
              setLoading(true);
              mutation.mutate(newUser);

              setLoading(false);
              setOpened(false);
            }}>
            {({ resetForm }) => (
              <Form className="w-full flex p-8 border border-afexpurple-lighter dark:border-afexdark-dark rounded-lg flex-col gap-y-4">
                <div className="flex flex-col">
                  <SelectOne
                    data={data?.map((b: any) => {
                      return { value: b.id, label: b.country };
                    })}
                    id="country"
                    name="country"
                    label="Country"
                    required
                    placeholder=""
                  />

                  <FormInput
                    id="phone"
                    name="phone"
                    label="Phone number"
                    placeholder="Enter phonenumber"
                    required
                    type="text"
                    autocomplete="phoneNumber"
                  />
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
                    loading={loading}
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

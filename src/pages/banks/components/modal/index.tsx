import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import * as Yup from 'yup';

import { Modal } from '@mantine/core';

import { edit_payment_portal_code } from '../../../../api/banks';
import { Button } from '../../../../components';
import { FormInput } from '../../../../components/form';

interface AddUserProps extends ModalControllerType {
  data: Banks;
}
const EditPaymentCode = ({ show, close, data }: AddUserProps) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (payload: Banks) =>
      edit_payment_portal_code(payload.id, payload.paymentPortalCode),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['banks'] }); // To  invalidate and refetch
      close();
      // toast('success', 'Provider updated successfully');
    },
  });

  const [loading, setLoading] = useState(false);

  return (
    <>
      <Modal
        size='25%'
        withCloseButton={false}
        centered
        opened={show}
        onClose={close}>
        {/* Map Component */}
        <div className='flex flex-col mt-0 items-center gap-4 text-center p-8'>
          <Formik
            initialValues={{
              ...data,
              paymentPortalCode: `${data.paymentPortalCode}`,
            }}
            onSubmit={async (values) => {
              const updatePaymentCode: any = {
                id: data.id,
                paymentPortalCode: values.paymentPortalCode,
              };
              console.log(updatePaymentCode);

              setLoading(true);
              mutation.mutate(updatePaymentCode);
              setLoading(false);
            }}
            validationSchema={Yup.object({
              code: Yup.string().required('Code cannot be empty'),
            })}>
            {({ resetForm }) => (
              <Form className='flex overflow-y-auto flex-col gap-y-4'>
                <FormInput
                  id='paymentPortalCode'
                  name='paymentPortalCode'
                  label='Payment Portal Code'
                  placeholder='Enter code'
                  required
                  type='text'
                  autocomplete='URL'
                />

                <div className='flex items-center mb-6 justify-center space-x-6'>
                  <button
                    type='button'
                    className='bg-gray-200 dark:bg-afexdark-verydark p-4 rounded-lg px-5 text-base font-semibold text-gray-600 hover:shadow-lg'
                    onClick={() => {
                      resetForm();
                      close();
                    }}>
                    Discard
                  </button>
                  <Button
                    type='submit'
                    text={
                      <span className='flex items-center space-x-6'>
                        Submit
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
};

export default EditPaymentCode;

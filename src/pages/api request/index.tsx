import React from 'react';
import { Add } from 'iconsax-react';
import ApiKeys from './components/api keys';
import { create_token } from '../../api';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from '../../utils';
import { ArrowLeft } from 'iconsax-react';
import { Link, useLocation } from 'react-router-dom';
import { t } from 'i18next';

const ApiRequest = () => {
  const { pathname } = useLocation();
  const providerId = pathname.split('/')[3];

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: create_token,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['apiTokens'] });
      toast('success', 'token generated successfully'); // To  invalidate and refetch
    },
    onError: () => {
      toast('error', 'please ', 'unable to generate token');
    },
  });

  return (
    <div className='w-full h-[100vh]  overflow-y-auto flex'>
      <div className='w-full h-[100vh] flex flex-col gap-14 overflow-y-auto p-10'>
        {/* Title */}
        <div className='flex w-full justify-between items-center'>
          <div className='flex w-full flex-col'>
            <h2 className='dark:text-afexdark-lighter text-[18px] font-bold '>
              {t('API Keys')}
            </h2>
            <p className='flex items-center gap-1 text-textgrey-normal'>
              <Link to='/client-provider'>
                {' '}
                <ArrowLeft className=' w-5' />
              </Link>{' '}
              <span>{t('Client Providers')}/</span>
              <span className=' text-textgrey-dark'>{t('API Key')}</span>
            </p>
          </div>

          <div
            className='flex w-[250px] py-2 px-3 justify-end gap-4 text-[14px] font-normal items-center '
            onClick={() => {
              const ProvidedId = parseInt(providerId, 10);
              mutation.mutate(ProvidedId);
            }}>
            <button className='flex w-full items-center gap-4 py-2 px-3 hover:bg-afexpurple-lighter hover:shadow text-afexpurple text-[14px] bg-afexpurple-lighter dark:bg-afexdark-darkest rounded-lg'>
              <span className='w-full'>{t('GENERATE API KEY')}</span>
              <Add size='20' color='#7738DD' variant='Bulk' />
            </button>
          </div>
        </div>

        <ApiKeys />
      </div>
    </div>
  );
};

export default ApiRequest;

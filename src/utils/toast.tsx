import { showNotification } from '@mantine/notifications';

import { ShieldTick, CloseCircle, InfoCircle } from 'iconsax-react';

const toast = (
  id: 'success' | 'error' | 'info',
  heading: string,
  text?: string
) => {
  const borderColor =
    id === 'success'
      ? ' #38CB89'
      : id === 'error'
      ? 'rgb(254, 31, 17)'
      : 'rgb(250, 232, 76)';
  const icon =
    id === 'success' ? (
      <ShieldTick variant='Bulk' color='#38CB89' />
    ) : id === 'error' ? (
      'error' && <CloseCircle color='#F47373' />
    ) : (
      <InfoCircle color='#dce775' />
    );
  //id = 'success' | 'warning' | 'error'
  return showNotification({
    styles: {
      root: {
        borderRadius: '1rem',
        backgroundColor: '#fff',
        top: '1px',
        border: `1px solid ${borderColor}`,
        padding: '0 1.5rem 0 0 ',
        position: 'relative',
      },
      body: { padding: '1.5rem 1.5rem 1.5rem 0' },
      closeButton: {
        backgroundColor: 'unset',
        transform: 'scale(1.25)',
        transition: 'all',
        transitionDuration: '150ms',
      },
      icon: {
        backgroundColor: '#ffffff !important',
        margin: '0 3px',
        width: '40px',
        height: '40px',
      },
    },
    icon: icon,
    message: (
      <div
        className={`flex items-start top-1 rounded-2xl before:content-[''] before:inset-0 before:absolute before:w-full before:h-full before:rounded-2xl ${
          id === 'success'
            ? 'before:bg-afexgreen-lighter'
            : id === 'error'
            ? 'before:bg-error-lighter'
            : 'before:bg-warninig-lighter'
        }`}>
        {heading.length > 0 && (
          <div className='pl-5 pr-4 child:py-1'>
            <p className='font-bold text-md '>{heading}</p>
            <p className=''>{text}</p>
          </div>
        )}
      </div>
    ),
    autoClose: 3000,
  });
};
export default toast;

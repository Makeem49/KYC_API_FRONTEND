import { showNotification } from '@mantine/notifications';

// import { ShieldTick, CloseCircle, InfoCircle } from 'iconsax-react';

import { RiShieldCheckFill, RiErrorWarningLine } from 'react-icons/ri';

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
      <div className=' bg-afexgreen-lighter z-50 rounded-full p-3'>
        <RiShieldCheckFill color='#38CB89' size={30} />
      </div>
    ) : id === 'error' ? (
      'error' && (
        <div className=' bg-afexred-lighter z-50 rounded-full p-3'>
          <RiErrorWarningLine color='#FE1F11' size={30} />
        </div>
      )
    ) : (
      <div className=' bg-afexwarning-lighter z-50 rounded-full p-3'>
        <RiErrorWarningLine color='#dce775' size={30} />
      </div>
    );
  //id = 'success' | 'warning' | 'error'
  return showNotification({
    styles: {
      root: {
        borderRadius: '1rem',
        backgroundColor: '#fff',
        top: '50px',
        border: `1px solid ${borderColor}`,
        padding: '0 1.5rem 0 0 ',
        position: 'absolute',
        zIndex: '-moz-initial',
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
        className={`flex  items-start top-1 rounded-2xl before:content-[''] before:inset-0 before:absolute before:w-full before:h-full before:rounded-2xl ${
          id === 'success'
            ? 'before:bg-[#FFFFFF] dark:before:bg-afexdark-verydark'
            : id === 'error'
            ? 'before:bg-[#FFFFFF] dark:before:bg-afexdark-verydark'
            : 'before:bg-[#FFFFFF] dark:before:bg-afexdark-verydark'
        }`}>
        {heading.length > 0 && (
          <div className='pl-5 z-50 pr-4 child:py-1'>
            <p className='font-bold text-md dark:text-afexdark-regular '>
              {heading}
            </p>
            <p className='dark:text-afexdark-regular'>{text}</p>
          </div>
        )}
      </div>
    ),
    autoClose: 10000,
  });
};
export default toast;

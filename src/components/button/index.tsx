import React from 'react';
// import spinner from '../../assets/gif/spinner.gif';

// Text is the default text on the button
// type is one of button | reset | submit
// loading is a boolean indication an API call
// onClick is an optional callback for type button
interface MyButtonInterface {
  text: React.ReactNode;
  loading: boolean;
  type: 'submit' | 'button' | 'reset' | undefined;
  onClick?: () => void;
}

const Button = ({ text, loading, type, onClick }: MyButtonInterface) => {
  return (
    <button
      className={`w-[120px] font-medium text-white bg-afexpurple-dark rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center ${
        loading ? 'py-2' : 'py-4'
      }`}
      type={type ?? 'button'}
      disabled={loading}
      onClick={onClick}>
      {loading ? (
        <div className='flex items-center justify-center'>
          <button
            type='button'
            className='inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-white transition duration-150 ease-in-out rounded-md shadow cursor-not-allowed'
            disabled={true}>
            <svg
              className='w-5 h-5 mr-3 -ml-1 text-white animate-spin'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'>
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                stroke-width='4'></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
            </svg>
            Loading...
          </button>
        </div>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;

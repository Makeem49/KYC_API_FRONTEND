import React from 'react';
import spinner from '../../assets/gif/spinner.gif';

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
      className={`w-[95px] font-medium text-white bg-afexpurple-dark rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center ${
        loading ? 'py-2' : 'py-4'
      }`}
      type={type ?? 'button'}
      disabled={loading}
      onClick={onClick}>
      {loading ? <img src={spinner} alt='Loading...' /> : text}
    </button>
  );
};

export default Button;

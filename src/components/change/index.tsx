import React from 'react';
import { decimalFormatter } from '../../utils';

const Change = ({ value }: { value: number }) => {
  return (
    <span
      className={`font-normal text-[13px] ${
        value > 0 ? 'text-afexgreen-regular' : 'text-afexred-regular'
      } `}>
      {value > 0 ? `+${decimalFormatter(value)}` : `${decimalFormatter(value)}`}
      %{' '}
    </span>
  );
};

export default Change;

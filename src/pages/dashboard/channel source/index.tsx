import React from 'react';
import ChanneSource from './channelCharts';

const ChannelSource = () => {
  return (
    <div className='h-full flex flex-col gap-8 border border-[#DAD9DA] rounded-lg p-5'>
      <p className=' text-textgrey-darker font-semibold text-[18px] ml-6'>
        Service Provider
      </p>
      <ChanneSource />
    </div>
  );
};

export default ChannelSource;

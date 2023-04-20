import React from 'react';

type ProgressBarProps = {
  total: number;
  progress: number;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  total,
  progress,
}) => {
  const percent = (progress / total) * 100;

  return (
    <div>
      <div style={{ width: '100%', height: 10, backgroundColor: '#ddd' }}>
        <div
          style={{
            width: `${percent}%`,
            height: 10,
            backgroundColor: '#0077ff',
          }}></div>
      </div>
      <div>{`${progress} / ${total} items exported`}</div>
    </div>
  );
};

import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {
  const error = useRouteError() as unknown as Response;
  return (
    <div>
      {/* {error.status} */}
      <p>This is my Error Page</p>
      <p>{error.statusText} </p>
    </div>
  );
};

export default ErrorElement;

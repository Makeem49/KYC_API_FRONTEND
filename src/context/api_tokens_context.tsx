import React, { createContext, useContext, useEffect, useState } from 'react';

const ApiTokensCtx = createContext(null);

const ApiTokensProvider = (props: WithChildren) => {
  return (
    <ApiTokensCtx.Provider value={null}>{props.children}</ApiTokensCtx.Provider>
  );
};

export const useApiTokenCtx = () => useContext(ApiTokensCtx);

export default ApiTokensProvider;

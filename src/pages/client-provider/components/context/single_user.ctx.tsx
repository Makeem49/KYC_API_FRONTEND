import React, { createContext, useContext, useState } from 'react';

const SingleClientCtx = createContext({} as SingleEntityCtx<ClientProvider>);

export const SingleClientProvider = ({ children }: WithChildren) => {
  const [clients, setClients] = useState<ClientProvider>({} as ClientProvider);

  return (
    <SingleClientCtx.Provider value={{ data: clients, setData: setClients }}>
      {children}
    </SingleClientCtx.Provider>
  );
};

export const useSingleClientCtx = () => useContext(SingleClientCtx);

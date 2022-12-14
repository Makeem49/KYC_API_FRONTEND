import React, { useContext, createContext, useEffect, useState } from 'react';
import { get_client_providers } from '../api';

const ClientsContext = createContext(
  {} as GenericContextInterface<ClientProvider>
);

const ClientsContextProvider = (props: WithChildren) => {
  const [clients, setClients] = useState<ClientProvider[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);

  const refreshContext = () => {
    setLoading(true);
    setRefresh((s) => !s);
    setLoading(false);
  };

  const fetchClientProvider = async () =>
    setClients(await get_client_providers());

  useEffect(() => {
    fetchClientProvider();
  }, [loading, refresh]);

  return (
    <ClientsContext.Provider value={{ list: clients, loading, refreshContext }}>
      {props.children}
    </ClientsContext.Provider>
  );
};

export const useClientsCtx = () => useContext(ClientsContext);

export default ClientsContextProvider;

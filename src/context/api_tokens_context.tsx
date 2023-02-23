import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { get_token_list } from '../api';

const ApiTokensCtx = createContext<
  GenericContextInterface<ClientProviderToken[]>
>({} as GenericContextInterface<ClientProviderToken[]>);

const ApiTokensProvider = (props: WithChildren) => {
  const { pathname } = useLocation();
  const providerId = pathname.split('/')[3];

  const [apiKeys, setApiKeys] = useState<ClientProviderToken[]>([]);

  const refreshContext = () => {};

  useEffect(() => {
    if (!providerId) return;

    const fetch_keys = async () => {
      const resp = await get_token_list(parseInt(providerId, 10));
      if (!Response) return;
      setApiKeys(resp);
    };

    fetch_keys();
  }, [providerId]);

  return (
    <ApiTokensCtx.Provider
      value={{
        list: apiKeys,
        loading: false,
        refreshContext,
      }}>
      {props.children}
    </ApiTokensCtx.Provider>
  );
};

export const useApiTokenCtx = () => useContext(ApiTokensCtx);

export default ApiTokensProvider;

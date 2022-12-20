import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { get_token_list } from '../api';

const ApiTokensCtx = createContext<
  GenericContextInterface<ClientProviderToken[]>
>({} as GenericContextInterface<ClientProviderToken[]>);

const ApiTokensProvider = (props: WithChildren) => {
  const { pathname } = useLocation();
  const provider_id = pathname.split('/')[2];
  const [apiKeys, setApiKeys] = useState<ClientProviderToken[]>([]);

  const refreshContext = () => {};

  useEffect(() => {
    const fetch_keys = async () => {
      const resp = await get_token_list(parseInt(provider_id, 10));

      setApiKeys(resp);
    };

    fetch_keys();
  }, [provider_id]);

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

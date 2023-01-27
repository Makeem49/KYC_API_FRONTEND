import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { get_single_client } from '../api';
import { get_a_client } from '../api/single-client';

const SingleClientCtx = createContext<SpecificSingleInterface<SingleClient[]>>(
  {} as SpecificSingleInterface<SingleClient[]>
);

const SingleClientProvider = (props: WithChildren) => {
  const { pathname } = useLocation();
  // console.log(pathname.split('/'));
  const clientId = pathname.split('/')[2];
  const providerId = pathname.split('/')[2];
  // console.log(clientId, 'runs');

  const [clientList, setClientLIst] = useState<SingleClient[]>([]);
  const [clientBio, setClientBio] = useState<ClientBio>({} as ClientBio);

  const refreshContext = () => {};

  useEffect(() => {
    if (!clientId || !providerId) return;

    const fetchSingleClient = async () => {
      const resp = await get_single_client(parseInt(clientId, 10));

      setClientLIst(resp);
    };

    const fetchClientBio = async () => {
      const data = await get_a_client(parseInt(clientId, 10));

      if (!data) return;
      setClientBio(data);
    };

    fetchClientBio();
    fetchSingleClient();
  }, [clientId, providerId]);

  return (
    <SingleClientCtx.Provider
      value={{
        list: clientList,
        stats: clientBio,
        refreshContext,
        loading: false,
      }}>
      {props.children}
    </SingleClientCtx.Provider>
  );
};
export const useSingleClientCtx = () => useContext(SingleClientCtx);
export default SingleClientProvider;

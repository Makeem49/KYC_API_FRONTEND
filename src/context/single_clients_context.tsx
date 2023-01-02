import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { get_single_client } from '../api';
// import { get_a_client } from '../api/single-client';

const SingleClientCtx = createContext<SpecificContextInterface<SingleClient[]>>(
  {} as SpecificContextInterface<SingleClient[]>
);

const SingleClientProvider = (props: WithChildren) => {
  const { pathname } = useLocation();
  // console.log(pathname.split('/'));
  const clientId = pathname.split('/')[3];
  const providerId = pathname.split('/')[2];

  const [clientList, setClientLIst] = useState<SingleClient[]>([]);
  // const [clientBio, setClientBio] = useState<SingleClient[]>([]);

  const refreshContext = () => {};

  useEffect(() => {
    const fetchSingleClient = async () => {
      const resp = await get_single_client(parseInt(clientId, 10));

      setClientLIst(resp);
    };

    // const fetchClientBio = async () => {
    //   const resp = await get_a_client(
    //     parseInt(clientId, 10),
    //     parseInt(providerId, 10)
    //   );

    //   setClientBio(resp);
    // };

    // fetchClientBio();
    fetchSingleClient();
  }, [clientId, providerId]);

  return (
    <SingleClientCtx.Provider
      value={{
        list: clientList,
        // item: clientBio,
        refreshContext,
        loading: false,
      }}>
      {props.children}
    </SingleClientCtx.Provider>
  );
};
export const useSingleClientCtx = () => useContext(SingleClientCtx);
export default SingleClientProvider;

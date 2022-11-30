import React, { useContext, createContext, useEffect, useState } from 'react';

import { clients_dummy_data } from '../assets/data';

interface DayOnDay {
  current: number;
  previous_day: number;
}

interface Summary {
  total: DayOnDay;
  verified: DayOnDay;
  unverified: DayOnDay;
  active: DayOnDay;
}

interface ClientsCtxInterface extends GenericContextInterface<Client> {
  summary: Summary;
}

const ClientsContext = createContext({} as ClientsCtxInterface);

const ClientsContextProvider = (props: WithChildren) => {
  const [clients, setClients] = useState<Client[]>([]);
  const [summary, setSummary] = useState<Summary>({} as Summary);

  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);

  const refreshContext = () => {
    setLoading(true);
    setRefresh((s) => !s);
    setLoading(false);
  };

  useEffect(() => {
    const fetchClientsList = () => {
      setClients(clients_dummy_data);
    };

    const fetchSummary = () => {
      setSummary({
        total: {
          current: 2000,
          previous_day: 1600,
        },
        verified: {
          current: 2000,
          previous_day: 1600,
        },
        unverified: {
          current: 2000,
          previous_day: 1600,
        },
        active: {
          current: 2000,
          previous_day: 1600,
        },
      });
    };

    fetchClientsList();
    fetchSummary();
  }, [loading, refresh]);

  return (
    <ClientsContext.Provider
      value={{ list: clients, summary, loading, refreshContext }}>
      {props.children}
    </ClientsContext.Provider>
  );
};

export const useClientsCtx = () => useContext(ClientsContext);

export default ClientsContextProvider;

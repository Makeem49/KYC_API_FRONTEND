import React, { useContext, createContext, useEffect, useState } from 'react';

import { clients_dummy_data } from '../assets/dummyData';

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

interface ClientsCtxInt {
  summary: Summary;
  list: Client[];
}

const ClientsContext = createContext<ClientsCtxInt>({} as ClientsCtxInt);

const ClientsContextProvider = (props: WithChildren) => {
  const [clients, setClients] = useState<Client[]>([]);
  const [summary, setSummary] = useState<Summary>({} as Summary);

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
  }, []);

  return (
    <ClientsContext.Provider value={{ list: clients, summary }}>
      {props.children}
    </ClientsContext.Provider>
  );
};

export const useClientxCtx = () => useContext(ClientsContext);

export default ClientsContextProvider;

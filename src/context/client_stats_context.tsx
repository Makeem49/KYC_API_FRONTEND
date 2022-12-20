import React, { useContext, createContext, useEffect, useState } from 'react';
import { get_client_stats, get_client_list } from '../api';

interface CliSS extends GenericContextInterface<ClientList[]> {
  stats: ClientSSS;
}

const CLientStatsContext = createContext({} as CliSS);

const ClientStatsProvider = (props: WithChildren) => {
  const [clients, setClients] = useState<ClientList[]>([]);
  const [stats, setStats] = useState<ClientSSS>({} as ClientSSS);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);

  const refreshContext = () => {
    setLoading(true);
    setRefresh((s) => !s);
    setLoading(false);
  };

  const fetchClientList = async () => {
    setClients(await get_client_list());
  };

  const fetchClientStats = async () => {
    const data = await get_client_stats();

    if (!data) return;
    setStats(data);
  };

  useEffect(() => {
    fetchClientStats();
    fetchClientList();
  }, [loading, refresh]);

  return (
    <CLientStatsContext.Provider
      value={{ list: clients, stats, loading, refreshContext }}>
      {props.children}
    </CLientStatsContext.Provider>
  );
};

export const useClientStats = () => useContext(CLientStatsContext);
export default ClientStatsProvider;

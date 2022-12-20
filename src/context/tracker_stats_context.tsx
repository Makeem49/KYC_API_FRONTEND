import React, { useContext, createContext, useEffect, useState } from 'react';
import { get_tracker_stats } from '../api';

const TrackerStatsContext = createContext(
  {} as GenericContextInterface<TrackerSect>
);

const TrackerStatsProvider = (props: WithChildren) => {
  const [stats, setStats] = useState<TrackerSect>({} as TrackerSect);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);

  const refreshContext = () => {
    setLoading(true);
    setRefresh((s) => !s);
    setLoading(false);
  };

  const fetchTrackerStats = async () => {
    const data = await get_tracker_stats();
    if (!data) return;
    setStats(data);
  };

  useEffect(() => {
    fetchTrackerStats();
  }, [loading, refresh]);

  return (
    <TrackerStatsContext.Provider
      value={{ list: stats, loading, refreshContext }}>
      {' '}
      {props.children}
    </TrackerStatsContext.Provider>
  );
};
export const useTrackerStatsCtx = () => useContext(TrackerStatsContext);
export default TrackerStatsProvider;

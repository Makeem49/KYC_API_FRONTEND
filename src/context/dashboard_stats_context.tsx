import React, { useContext, createContext, useEffect, useState } from 'react';
import { get_dashboard_stats } from '../api';
import { shortDateFormatter } from '../utils';

const DashboardStatsContext = createContext(
  {} as GenericContextInterface<ResponseSect>
);
const DashboardStatsProvider = (props: WithChildren) => {
  const [stats, setStats] = useState<ResponseSect>({
    others: {
      numberOfUsers: 0,
      totalDeposit: 0,
      totalWalletBalance: 0,
      totalWithdrawal: 0,
    },
    performanceOverview: [
      {
        date: shortDateFormatter(new Date()),
        stats: {
          deposit: 0,
          transfer: 0,
          withdrawals: 0,
        },
      },
    ],
    sectionOne: {
      activeClients: {
        active: 0,
        previousDay: 0,
        today: 0,
      },
      channels: {
        previousDay: {
          others: 0,
          ussd: 0,
        },
        today: {
          others: 0,
          ussd: 0,
        },
      },
      totalClients: {
        active: 0,
        previousDay: 0,
        today: 0,
      },
      transactions: {
        active: 0,
        previousDay: 0,
        today: 0,
      },
      users: {
        active: 0,
        previousDay: 0,
        today: 0,
      },
      values: {
        active: 0,
        previousDay: 0,
        today: 0,
      },
      verifiedClients: {
        active: 0,
        previousDay: 0,
        today: 0,
      },
    },
    serviceProviderStatus: [
      {
        name: 'Glo',
        value: 0,
      },
    ],
    transactionStatus: {
      failed: 0,
      pending: 0,
      successful: 0,
    },
  } as ResponseSect);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);

  const refreshContext = () => {
    setLoading(true);
    setRefresh((s) => !s);
    setLoading(false);
  };

  const fetchDshboardStatsProvider = async () => {
    const data = await get_dashboard_stats();

    if (!data) return;
    setStats(() => ({ ...data }));
  };

  useEffect(() => {
    fetchDshboardStatsProvider();
  }, [loading, refresh]);

  return (
    <DashboardStatsContext.Provider
      value={{ list: stats, loading, refreshContext }}>
      {props.children}
    </DashboardStatsContext.Provider>
  );
};

export const useDashboardCtx = () => useContext(DashboardStatsContext);
export default DashboardStatsProvider;

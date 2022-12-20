import React, { createContext, useContext, useEffect, useState } from 'react';

import {
  get_transaction_stats,
  get_all_transactions,
} from '../api/transactions';

interface TransactionSSS extends GenericContextInterface<TransactionList[]> {
  stats: TransactionSect;
}

const TransactionsCtx = createContext({} as TransactionSSS);

const TransactionsProvider = (props: WithChildren) => {
  const [trans, setTrans] = useState<TransactionList[]>([]);
  const [stats, setStats] = useState<TransactionSect>({} as TransactionSect);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);

  const refreshContext = () => {
    setLoading(true);
    setRefresh((s) => !s);
    setLoading(false);
  };

  const fetchTransactionList = async () => {
    setTrans(await get_all_transactions());
  };

  const fetchTransactionStats = async () => {
    const data = await get_transaction_stats();

    if (!data) return;
    setStats(data);
  };

  useEffect(() => {
    fetchTransactionList();
    fetchTransactionStats();
  }, [loading, refresh]);

  return (
    <TransactionsCtx.Provider
      value={{ list: trans, stats, loading, refreshContext }}>
      {props.children}
    </TransactionsCtx.Provider>
  );
};

export const useTransactionCtx = () => useContext(TransactionsCtx);

export default TransactionsProvider;

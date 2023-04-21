import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  colTransactionTable,
  colActivityLogTable,
  colApiTable,
  colClientProviderTable,
  colUserProviderTable,
  colClientsTable,
  colSingleClientTable,
} from '../assets/columnData';

const columnCtx = createContext({} as any);

interface columns {
  [key: string]: string[];
}

export function ColumnProvider({ children }: { children: React.ReactNode }) {
  const [columns, setColumns] = useState({});

  useEffect(() => {
    // const farmersColumn = columnOptionsFarmers?.map((item) => item.value);
    const transactionsColumn = colTransactionTable.map((item) => item.value);
    const activityLogColumn = colActivityLogTable.map((item) => item.value);
    const clientColumn = colClientsTable.map((item) => item.value);
    const clientProviderColumn = colClientProviderTable.map(
      (item) => item.value
    );
    const userColumn = colUserProviderTable.map((item) => item.value);
    const apiColumn = colApiTable.map((item) => item.value);
    const SingleClientColumn = colSingleClientTable.map((item) => item.value);

    const total = localStorage.getItem('cuddie-preference')
      ? JSON.parse(localStorage.getItem('cuddie-preference')!)
      : {
          transactionsColumn,
          activityLogColumn,
          clientColumn,
          clientProviderColumn,
          userColumn,
          apiColumn,
          SingleClientColumn,
        };
    setColumns(total); // eslint-disable-next-line
  }, []);

  useEffect(() => {
    Object.keys(columns).length !== 0 &&
      localStorage.setItem('cuddie-preference', JSON.stringify(columns));
  }, [columns]);

  const settingColumns = (obj: columns) => {
    setColumns((p) => ({ ...p, ...obj }));
  };

  const value = { ...columns, settingColumns };
  return <columnCtx.Provider value={value}>{children}</columnCtx.Provider>;
}

export const useColumnCtx = () => useContext(columnCtx);

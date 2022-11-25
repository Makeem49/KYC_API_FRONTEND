import React, { createContext, useContext, useEffect, useState } from 'react';

const TransactionsCtx = createContext(null);

const TransactionsProvider = (props: WithChildren) => {
  return (
    <TransactionsCtx.Provider value={null}>
      {props.children}
    </TransactionsCtx.Provider>
  );
};

export const useTransactionCtx = () => useContext(TransactionsCtx);

export default TransactionsProvider;

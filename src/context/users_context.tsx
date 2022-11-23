import React, { createContext, useContext, useEffect, useState } from 'react';

const UsersCtx = createContext(null);

const UsersProvider = (props: WithChildren) => {
  return <UsersCtx.Provider value={null}>{props.children}</UsersCtx.Provider>;
};

export const useUsersCtx = () => useContext(UsersCtx);

export default UsersProvider;

import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthCtx = createContext(null);

const AuthProvider = (props: WithChildren) => {
  return <AuthCtx.Provider value={null}>{props.children}</AuthCtx.Provider>;
};

export const useAuthCtx = () => useContext(AuthCtx);

export default AuthProvider;

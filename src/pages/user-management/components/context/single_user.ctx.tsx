import React, { createContext, useContext, useState } from 'react';

const SingleUserCtx = createContext({} as SingleEntityCtx<User>);

export const SingleUserProvider = ({ children }: WithChildren) => {
  const [user, setUser] = useState<User>({} as User);

  return (
    <SingleUserCtx.Provider value={{ data: user, setData: setUser }}>
      {children}
    </SingleUserCtx.Provider>
  );
};

export const useSingleUserCtx = () => useContext(SingleUserCtx);

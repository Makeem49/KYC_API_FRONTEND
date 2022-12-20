import React, { createContext, useContext, useEffect, useState } from 'react';
import { get_users } from '../api';

const UsersCtx = createContext({} as GenericContextInterface<User[]>);

const UsersProvider = (props: WithChildren) => {
  const [users, setUsers] = useState<User[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);

  const refreshContext = () => {
    setLoading(true);
    setRefresh((s) => !s);
    setLoading(false);
  };

  const fetchUsers = async () => setUsers(await get_users());

  useEffect(() => {
    fetchUsers();
  }, [loading, refresh]);

  return (
    <UsersCtx.Provider value={{ list: users, loading, refreshContext }}>
      {props.children}
    </UsersCtx.Provider>
  );
};

export const useUsersCtx = () => useContext(UsersCtx);

export default UsersProvider;

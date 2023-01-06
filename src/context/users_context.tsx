import React, { createContext, useContext, useEffect, useState } from 'react';
import { get_users, get_permissions, get_roles } from '../api';
import { get_admin_name } from '../api';

const UsersCtx = createContext({} as SpecificUserContextInterface<User[]>);

const UsersProvider = (props: WithChildren) => {
  const [users, setUsers] = useState<User[]>([]);
  const [perms, setPerms] = useState<User[]>([]);
  const [roles, setRoles] = useState<User[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState<User[]>([]);

  const refreshContext = () => {
    setLoading(true);
    setRefresh((s) => !s);
    setLoading(false);
  };

  const fetchUsers = async () => setUsers(await get_users());
  const fetchPermissions = async () => setPerms(await get_permissions());
  const fetchRoles = async () => setRoles(await get_roles());
  const fetchAdmin = async () => setAdmin(await get_admin_name());

  useEffect(() => {
    fetchUsers();
    fetchPermissions();
    fetchRoles();
    fetchAdmin();
  }, [loading, refresh]);

  return (
    <UsersCtx.Provider
      value={{
        list: users,
        item: perms,
        itemTwo: roles,
        admin: admin,
        loading,
        refreshContext,
      }}>
      {props.children}
    </UsersCtx.Provider>
  );
};

export const useUsersCtx = () => useContext(UsersCtx);

export default UsersProvider;

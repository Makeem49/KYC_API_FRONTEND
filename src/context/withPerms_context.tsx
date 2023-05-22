import React, { createContext, useContext } from 'react';

type Role = {
  name: string;
  id: number;
};

type AuthContextType = {
  hasPermission: (permissions: string[]) => boolean;
};

const loggedin_user = {
  name: 'afex-admin',
  username: 'afex-admin',
  id: 1,
  roles: [
    {
      name: 'SYSADMIN',
      id: 1,
    },
  ],
  permissions: [],
  providers: [
    {
      countryCode: 'NG',
      name: 'AFTL Nigeria',
      id: 1,
    },
  ],
  iat: 1682714929,
  exp: 1682887729,
};

const PermCtx = createContext({} as AuthContextType);

const PermProvider = (props: WithChildren) => {
  const hasPermission = (requiredPermissions: string[]) => {
    // if (!user || !user.permissions) return false;
    if (loggedin_user.roles.find((role: Role) => role.name === 'SYSADMIN'))
      return true;
    const hasAllPermissions = requiredPermissions.every((permission) =>
      loggedin_user.permissions.map((el: Role) => el.name).includes(permission)
    );
    if (!hasAllPermissions) {
    }
    return hasAllPermissions;
  };

  const authContextValue: AuthContextType = {
    hasPermission,
  };

  return (
    <PermCtx.Provider value={authContextValue}>
      {props.children}
    </PermCtx.Provider>
  );
};

export const usePermCtx = () => useContext(PermCtx);
export default PermProvider;

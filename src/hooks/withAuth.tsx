// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const withAuth = (Component: React.FC) => () => {
//   const perm = false;
//   console.log({ perm });
//   return <Component />;
// };

// export default withAuth;

import React from 'react';

const Permissions = {
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
const withPermission = (
  WrappedComponent: React.FC<any>,
  requiredPermissions: any
) => {
  const WrappedWithPermission = ({ ...props }) => {
    // if (!isAuthenticated) {
    //   return <Redirect to='/login' />;
    // }

    const hasPermission =
      !!Permissions.roles.find(
        (el: { id: number; name: string }) => el.name === 'SYSADMIN'
      ) ||
      !requiredPermissions.every((permission: { id: number; name: string }) =>
        Permissions.permissions
          .map((el: Record<string, any>) => el.name)
          .includes(permission)
      );

    if (!hasPermission) {
      console.log(Permissions, 'here');
      return <div>You don't have permission to access this page.</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return WrappedWithPermission;
};

export default withPermission;

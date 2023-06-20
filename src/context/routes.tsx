import { BrifecaseCross, HomeHashtag, Profile2User } from 'iconsax-react';
import { ReactNode, useEffect } from 'react';
import {
  Outlet,
  createBrowserRouter,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import { MobileSideBar, Sidebar } from '../components';
import {
  Authentication,
  ClientProfile,
  ConfirmOverlay,
  Dashboard,
  ErrorElement,
  IDENTITY,
} from '../pages';
import ForgotPassword from '../pages/forgotPassword';
import AuthProvider from './auth_context';
import { ColumnProvider } from './column_context';
import ContextProvider from '.';

interface Routes {
  index?: boolean;
  path?: string;
  errorElement?: ReactNode;
  element: ReactNode;
  icon?: ReactNode;
  label?: string;
  permissions?: Array<string>;
  children?: Array<Routes>;
}

export function Root() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const isAuthorised = localStorage.getItem('sinbad-kyc-token');
    if (!isAuthorised) navigate('/login');
    // throw new Error('This is an error message');
  }, [navigate, pathname]);

  return (
    <AuthProvider>
      <ContextProvider>
        <ColumnProvider>
          <div className="md:flex bg-sinbadKYC-background  h-[100vh] text-[#54565B] text-sm xl:text-base">
            <div className="w-full fixed z-50 p-3 flex items-center bg-sinbadKYC-grey md:hidden ">
              <MobileSideBar />
              <h2 className="absolute flex items-center gap-1 left-[30%] font-bold text-2xl text-sinbadKYC-background">
                <BrifecaseCross
                  size="25"
                  variant="Bold"
                  className=" text-sinbadKYC-background"
                />
                SinbadKYC
              </h2>
            </div>
            <div className="hidden md:block w-[15%] bg-sinbadKYC-grey shadow h-[100vh]">
              <Sidebar />
            </div>
            <div className="w-full md:w-[85%] h-[100vh] py-4 px-1 md:px-0 md:py-0">
              <Outlet />
            </div>
          </div>
        </ColumnProvider>
      </ContextProvider>
    </AuthProvider>
  );
}

export const ROUTES: Routes[] = [
  {
    element: <Root />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: '/',
        icon: (
          <HomeHashtag
            variant="Bold"
            className="md:h-[14px] md:w-[14px] 2xl:w-[25px] 2xl:h-[25px]"
          />
        ),
        element: <Dashboard />,
        label: 'Dashboard',
      },

      {
        path: '/:clientId',
        element: <ClientProfile />,
      },

      {
        path: '/identity',
        icon: (
          <Profile2User
            variant="Bold"
            className="md:h-[14px] md:w-[14px] 2xl:w-[25px] 2xl:h-[25px]"
          />
        ),
        element: <IDENTITY />,
        label: 'Identity',
      },
    ],
  },
  {
    path: '/login',
    element: <Authentication />,
  },
  {
    path: 'create-account',
    element: <ConfirmOverlay />,
  },
  {
    path: 'forgot-password',
    element: <ForgotPassword />,
  },
];

// const loggedin_user = {
//   name: 'afex-admin',
//   username: 'afex-admin',
//   id: 1,
//   roles: [
//     {
//       name: '',
//       id: 1,
//     },
//   ],
//   permissions: [{ id: 2, name: 'View Client Provider' }],
//   providers: [
//     {
//       countryCode: 'NG',
//       name: 'AFTL Nigeria',
//       id: 1,
//     },
//   ],
//   iat: 1682714929,
//   exp: 1682887729,
// };

const state = localStorage.getItem('decoded-arrays');
const loggedin_user = JSON.parse(state ?? '{}');

type Role = {
  name: string;
  id: number;
};

const isSysAdmin = loggedin_user?.roles?.find(
  (role: Role) => role.name === 'SYSADMIN'
);

const userPermissions = loggedin_user?.permissions?.map(
  (el: Record<string, any>) => el.name
);

const showRoute = (required_permissions: undefined | string[]) => {
  if (!required_permissions || isSysAdmin) return true;
  return required_permissions?.every((permission) => {
    return userPermissions?.includes(permission);
  });
};

interface ExtractPath {
  element: ReactNode;
  errorElement?: ReactNode;
  children?: Array<ExtractPath>;
  path?: string;
}

function extractPath({
  path,
  element,
  children,
  errorElement,
  permissions,
}: Routes) {
  const instance: ExtractPath = {
    element: showRoute(permissions) ? element : <ErrorElement />,
    path,
  };
  if (errorElement) instance['errorElement'] = errorElement;
  if (children) instance['children'] = children.map(extractPath);
  return instance;
}

interface Menu {
  icon: ReactNode;
  path: string;
  permissions: string[];
  label: string;
}

function extractMenu({ icon, path, label, permissions }: Partial<Menu>) {
  return showRoute(permissions) && icon
    ? {
        icon,
        path,
        label,
      }
    : [];
}
export const menu = ROUTES?.at(0)?.children?.flatMap(extractMenu);
export const routes = ROUTES.map(extractPath);
export const router = createBrowserRouter(routes);

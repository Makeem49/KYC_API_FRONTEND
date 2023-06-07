import {
  ArrowSwapHorizontal,
  Bank,
  Book1,
  HomeHashtag,
  KeyboardOpen,
  MoneyArchive,
  People,
  UserCirlceAdd,
} from 'iconsax-react';
import { ReactNode, useEffect } from 'react';
import {
  Outlet,
  createBrowserRouter,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import cudiLogo from '../assets/brand/Cudi-Logo.png';
import { MobileSideBar, Sidebar } from '../components';
import {
  ApiRequest,
  Authentication,
  Banks,
  Client,
  ClientProvider,
  ConfirmOverlay,
  Dashboard,
  ErrorElement,
  FailedFunding,
  FundRequest,
  NoVirtualAccount,
  Settings,
  SingleClient,
  TrackerDashboard,
  Transaction,
  UnsyncedWalletTransfer,
  UnsyncedWithdrawal,
  UserManagement,
} from '../pages';
import ForgotPassword from '../pages/forgotPassword';
import ResetPassword from '../pages/resetPassword';
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
    const isAuthorised = localStorage.getItem('cuddie-access-token');
    if (!isAuthorised) navigate('/login');
    // throw new Error('This is an error message');
  }, [navigate, pathname]);

  return (
    <AuthProvider>
      <ContextProvider>
        <ColumnProvider>
          <div className="md:flex bg-white dark:bg-afexdark-verydark h-[100vh] text-[#54565B] text-sm xl:text-base">
            <div className=" z-50 p-3 flex items-center md:hidden ">
              <MobileSideBar />
              <img src={cudiLogo} alt="cudiLogo" className="w-20 mx-auto" />
            </div>
            <div className="hidden md:block w-[6%] h-[100vh]">
              <Sidebar />
            </div>
            <div className="w-full md:w-[94%] h-[100vh] py-4 px-3 md:px-0 md:py-0 bg-hero bg-[#F5F5F5] dark:bg-afexdark-verydark">
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
            variant="Bulk"
            className="md:h-[14px] md:w-[14px] 2xl:w-[25px] 2xl:h-[25px]"
          />
        ),
        element: <Dashboard />,
        label: 'Dashboard',
      },
      {
        path: 'client',
        icon: (
          <People
            variant="Bulk"
            className="md:h-[14px] md:w-[14px] 2xl:w-[25px] 2xl:h-[25px]"
          />
        ),
        element: <Client />,
        permissions: ['View Clients'],
        label: 'Clients',
      },
      {
        path: 'client/:clientId',
        element: <SingleClient />,
        permissions: ['View Client Profile'],
      },
      {
        path: 'transaction',
        icon: (
          <Book1
            variant="Bulk"
            className="md:h-[14px] md:w-[14px] 2xl:w-[25px] 2xl:h-[25px]"
          />
        ),
        label: 'Transactions',
        permissions: ['View Client Transactions'],
        element: <Transaction />,
      },
      {
        path: 'fund-request',
        icon: (
          <MoneyArchive
            variant="Bulk"
            className="md:h-[14px] md:w-[14px] 2xl:w-[25px] 2xl:h-[25px]"
          />
        ),
        label: 'Fund Requests',
        permissions: ['View Fund Wallet Requests'],
        element: <FundRequest />,
      },
      {
        path: 'banks',
        icon: (
          <Bank
            variant="Bulk"
            className="md:h-[14px] md:w-[14px] 2xl:w-[25px] 2xl:h-[25px]"
          />
        ),
        label: 'Banks',
        permissions: ['Sync Banks'],
        element: <Banks />,
      },

      {
        path: 'client-provider',
        icon: (
          <ArrowSwapHorizontal
            variant="Bulk"
            className="md:h-[14px] md:w-[14px] 2xl:w-[25px] 2xl:h-[25px]"
          />
        ),
        label: 'Client Providers',
        permissions: ['View Client Provider'],
        element: <ClientProvider />,
      },

      {
        path: 'client-provider/api-keys/:providerId',
        element: <ApiRequest />,
        permissions: ['View Client Provider'],
      },
      {
        path: 'user-management',
        icon: (
          <UserCirlceAdd
            variant="Bulk"
            className="md:h-[14px] md:w-[14px] 2xl:w-[25px] 2xl:h-[25px]"
          />
        ),
        label: 'User Management',
        permissions: ['View Users'],
        element: <UserManagement />,
      },

      {
        path: 'tracker-dashboard',
        icon: (
          <KeyboardOpen
            variant="Bulk"
            className="md:h-[14px] md:w-[14px] 2xl:w-[25px] 2xl:h-[25px]"
          />
        ),
        label: 'Tracker Dashboard',
        permissions: ['View System Logs'],
        element: <TrackerDashboard />,
      },

      {
        path: 'tracker-dashboard/failed-funding',
        element: <FailedFunding />,
        permissions: ['View System Logs'],
      },
      {
        path: 'tracker-dashboard/no-virtual-account',
        element: <NoVirtualAccount />,
        permissions: ['View System Logs'],
      },

      {
        path: 'tracker-dashboard/unsynced-wallet-transfer',
        element: <UnsyncedWalletTransfer />,
        permissions: ['View System Logs'],
      },

      {
        path: 'tracker-dashboard/unsynced-withdrawal',
        element: <UnsyncedWithdrawal />,
        permissions: ['View System Logs'],
      },

      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
  {
    path: '/login',
    element: <Authentication />,
  },
  {
    path: 'activate-account',
    element: <ConfirmOverlay />,
  },
  {
    path: 'forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: 'reset-password',
    element: <ResetPassword />,
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
//   permissions: [
//     { id: 1, name: 'View Clients' },
//     { id: 2, name: 'View Fund Wallet Requests' },
//     { id: 2, name: 'View Client Provider' },
//   ],
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

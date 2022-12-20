import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ThemeProvider } from '@material-tailwind/react';

import DashboardStatsProvider, {
  useDashboardCtx,
} from './dashboard_stats_context';

import ClientStatsProvider, { useClientStats } from './client_stats_context';
import ApiTokensProvider, { useApiTokenCtx } from './api_tokens_context';
import AuthProvider, { useAuthCtx } from './auth_context';
import ClientsContextProvider, { useClientsCtx } from './clients_context';
import TransactionsProvider, {
  useTransactionCtx,
} from './transactions_context';
import UsersProvider, { useUsersCtx } from './users_context';
import TrackerStatsProvider, {
  useTrackerStatsCtx,
} from './tracker_stats_context';

// Context wrapper for all the context managers
const ContextProvider = (props: WithChildren) => {
  return (
    <ThemeProvider>
      <MantineProvider withNormalizeCSS withGlobalStyles>
        <NotificationsProvider limit={5}>
          <AuthProvider>
            <DashboardStatsProvider>
              <ClientsContextProvider>
                <ApiTokensProvider>
                  <UsersProvider>
                    <ClientStatsProvider>
                      <TrackerStatsProvider>
                        <TransactionsProvider>
                          {props.children}
                        </TransactionsProvider>
                      </TrackerStatsProvider>
                    </ClientStatsProvider>
                  </UsersProvider>
                </ApiTokensProvider>
              </ClientsContextProvider>
            </DashboardStatsProvider>
          </AuthProvider>
        </NotificationsProvider>
      </MantineProvider>
    </ThemeProvider>
  );
};

export {
  useApiTokenCtx,
  useAuthCtx,
  useClientsCtx,
  useTransactionCtx,
  useUsersCtx,
  useDashboardCtx,
  useClientStats,
  useTrackerStatsCtx,
};

export default ContextProvider;

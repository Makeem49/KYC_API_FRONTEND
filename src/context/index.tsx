import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

import ApiTokensProvider, { useApiTokenCtx } from './api_tokens_context';
import AuthProvider, { useAuthCtx } from './auth_context';
import ClientsContextProvider, { useClientsCtx } from './clients_context';
import TransactionsProvider, {
  useTransactionCtx,
} from './transactions_context';
import UsersProvider, { useUsersCtx } from './users_context';

// Context wrapper for all the context managers
const ContextProvider = (props: WithChildren) => {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <NotificationsProvider limit={5}>
        <AuthProvider>
          <ApiTokensProvider>
            <UsersProvider>
              <ClientsContextProvider>
                <TransactionsProvider>{props.children}</TransactionsProvider>
              </ClientsContextProvider>
            </UsersProvider>
          </ApiTokensProvider>
        </AuthProvider>
      </NotificationsProvider>
    </MantineProvider>
  );
};

export {
  useApiTokenCtx,
  useAuthCtx,
  useClientsCtx,
  useTransactionCtx,
  useUsersCtx,
};

export default ContextProvider;

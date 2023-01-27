import ApiTokensProvider, { useApiTokenCtx } from './api_tokens_context';
import { useAuthCtx } from './auth_context';
import ClientsContextProvider, { useClientsCtx } from './clients_context';
import UsersProvider, { useUsersCtx } from './users_context';
import SingleClientProvider, {
  useSingleClientCtx,
} from './single_clients_context';
import { ColumnProvider, useColumnCtx } from './column_context';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// Context wrapper for all the context managers
const ContextProvider = (props: WithChildren) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthCtx();
  const token = localStorage.getItem('cuddie-access-token');

  useEffect(() => {
    if (!isAuthenticated || !token) {
      return navigate('login');
    }
    //eslint-disable-next-line
  }, [isAuthenticated]);
  return (
    <ColumnProvider>
      <ClientsContextProvider>
        <ApiTokensProvider>
          <UsersProvider>
            <SingleClientProvider>{props.children}</SingleClientProvider>
          </UsersProvider>
        </ApiTokensProvider>
      </ClientsContextProvider>
    </ColumnProvider>
  );
};

export {
  useApiTokenCtx,
  useAuthCtx,
  useClientsCtx,
  useUsersCtx,
  useSingleClientCtx,
  useColumnCtx,
};

export default ContextProvider;

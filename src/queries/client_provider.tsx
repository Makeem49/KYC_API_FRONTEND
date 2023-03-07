import { get_client_providers } from '../api';

export const get_client_provider_query = () => ({
  queryKey: ['clientProvider'],
  queryFn: async () => await get_client_providers(),
});

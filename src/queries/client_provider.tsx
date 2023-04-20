import { get_client_providers } from '../api';

export const get_client_provider_query = (
  page: number,
  filter: string = '',
  filters: string = ''
) => ({
  queryKey: ['clientProvider', page, filter, filters],
  queryFn: async () => await get_client_providers(page, filter, filters),
});

import { get_a_client } from '../api/single-client';
import { get_single_client } from '../api';

export const get_a_client_query = (clientId: number) => ({
  queryKey: ['singleClient', clientId],
  queryFn: async () => await get_a_client(clientId),
});

export const get_client_transactions_query = (
  clientId: number,
  page: number,
  filter: string = '',
  filters: string = ''
) => ({
  queryKey: ['clientTransaction', clientId, page, filter, filters],
  queryFn: async () => await get_single_client(clientId, page, filter, filters),
});

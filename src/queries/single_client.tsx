import { get_single_client } from '../api';
import { get_a_client } from '../api/single-client';

export const get_a_client_query = (clientId: number) => ({
  queryKey: ['singleClient', clientId],
  queryFn: async () => await get_a_client(clientId),
});

export const get_client_transactions_query = (
  clientId: number,
  page: number,
  page_size: number = 0,
  filter: string = '',
  filters: string = ''
) => ({
  queryKey: ['clientTransaction', clientId, page, page_size, filter, filters],
  queryFn: async () =>
    await get_single_client(clientId, page, page_size, filter, filters),
});

import {
  get_client_list,
  get_client_stats,
  get_clients_by_value_of_transactions,
  get_top_clients_by_search,
  get_top_clients_by_transactions,
  get_unverified_client_list,
} from '../api';

export const get_client_list_query = (
  page: number,
  page_size: number = 0,
  filter: string = '',
  filters: string = ''
) => ({
  queryKey: ['clientsList', page, page_size, filter, filters],
  queryFn: async () => await get_client_list(page, page_size, filter, filters),
});

export const get_unverified_client_list_query = (
  page: number,
  page_size: number = 0,
  filter: string = '',
  filters: string = ''
) => ({
  queryKey: ['unverifiedClients', page, page_size, filter, filters],
  queryFn: async () =>
    await get_unverified_client_list(page, page_size, filter, filters),
});

export const get_client_stats_query = () => ({
  queryKey: ['clientStats'],
  queryFn: async () => await get_client_stats(),
});

export const get_top_clients_searches_query = () => ({
  queryKey: ['clientSearch'],
  queryFn: async () => await get_top_clients_by_search(),
});
export const get_top_transactions_query = () => ({
  queryKey: ['clientsTopTransactions'],
  queryFn: async () => await get_top_clients_by_transactions(),
});

export const get_top_clients_by_trans_value_query = () => ({
  queryKey: ['clientsByTransValue'],
  queryFn: async () => await get_clients_by_value_of_transactions(),
});

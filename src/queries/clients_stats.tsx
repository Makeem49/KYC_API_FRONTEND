import {
  get_client_stats,
  get_client_list,
  get_top_clients_by_search,
  get_clients_by_value_of_transactions,
  get_top_clients_by_transactions,
} from '../api';
import { fetchAll } from '../utils/functions';

export const get_client_list_query = (page: number) => ({
  queryKey: ['clientsList', page],
  queryFn: async () => await fetchAll<ClientList>(get_client_list, 1),
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

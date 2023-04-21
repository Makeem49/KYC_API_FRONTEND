import { get_all_transactions } from '../api';
import { get_trans_locations } from '../api/transactions';
import { get_transaction_stats } from '../api/transactions';
// import { fetchAll } from '../utils/functions';

export const get_transaction_list_querry = (
  page: number,
  filter: string = '',
  filters: string = ''
) => ({
  queryKey: ['transactionList', page, filter, filters],
  queryFn: async () => await get_all_transactions(page, filter, filters),
});

export const get_transaction_stats_query = () => ({
  queryKey: ['transactionStats'],
  queryFn: async () => await get_transaction_stats(),
});

export const get_trans_location_query = (
  page: number,
  filter: string = '',
  filters: string = ''
) => ({
  queryKey: ['transactionLocation'],
  queryFn: async () => await get_trans_locations(page, filter, filters),
});

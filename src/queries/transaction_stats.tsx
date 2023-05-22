import { get_all_transactions } from '../api';
import { get_trans_locations } from '../api/transactions';
import { get_transaction_stats } from '../api/transactions';
// import { fetchAll } from '../utils/functions';

export const get_transaction_list_querry = (
  page: number,
  page_size: number = 0,
  filter: string = '',
  filters: string = ''
) => ({
  queryKey: ['transactionList', page, page_size, filter, filters],
  queryFn: async () =>
    await get_all_transactions(page, page_size, filter, filters),
});

export const get_transaction_stats_query = () => ({
  queryKey: ['transactionStats'],
  queryFn: async () => await get_transaction_stats(),
});

export const get_trans_location_query = (
  page: number,
  page_size: number = 0,
  filter: string = '',
  filters: string = ''
) => ({
  queryKey: ['transactionLocation', page, page_size, filter, filters],
  queryFn: async () =>
    await get_trans_locations(page, page_size, filter, filters),
});

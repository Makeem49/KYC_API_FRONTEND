import { get_all_transactions } from '../api';
import { get_transaction_stats } from '../api/transactions';
// import { fetchAll } from '../utils/functions';

export const get_transaction_list_querry = (page: number) => ({
  queryKey: ['transactionList', page],
  queryFn: async () => await get_all_transactions(),
});

export const get_transaction_stats_query = () => ({
  queryKey: ['transactionStats'],
  queryFn: async () => await get_transaction_stats(),
});

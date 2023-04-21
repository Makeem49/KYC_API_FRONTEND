import { get_banks, refresh_bank_list, update_remote_banks } from '../api';

export const get_bank_list_query = (
  page: number = 1,
  filter: string = '',
  filters: string = ''
) => ({
  queryKey: ['banks', page, filter, filters],
  queryFn: async () => await get_banks(page, filter, filters),
});

export const update_remote_banks_query = () => ({
  queryKey: ['updateBanks'],
  queryFn: async () => await update_remote_banks(),
});

export const refresh_banks_query = () => ({
  queryKey: ['refreshBanks'],
  queryFn: async () => await refresh_bank_list(),
});

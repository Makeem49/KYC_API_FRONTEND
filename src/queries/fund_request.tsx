import { approve_fund_request, get_fund_request } from '../api';

export const get_fund_request_query = (
  page: number = 1,
  filter: string = '',
  filters: string = ''
) => ({
  queryKey: ['fundRequest', page, filter, filters],
  queryFn: async () => await get_fund_request(page, filter, filters),
});

export const get_approve_fund_request = (id: number[] = []) => ({
  queryKey: ['aprroveFundReequest'],
  queryFn: async () => await approve_fund_request(id),
});

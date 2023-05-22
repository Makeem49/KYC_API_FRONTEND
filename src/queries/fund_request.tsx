import { approve_fund_request, get_fund_request } from '../api';

export const get_fund_request_query = (
  page: number,
  page_size: number = 0,
  filter: string = '',
  filters: string = ''
) => ({
  queryKey: ['fundRequest', page, page_size, filter, filters],
  queryFn: async () => await get_fund_request(page, page_size, filter, filters),
});

export const get_approve_fund_request = (id: number[] = []) => ({
  queryKey: ['aprroveFundRequest'],
  queryFn: async () => await approve_fund_request(id),
});

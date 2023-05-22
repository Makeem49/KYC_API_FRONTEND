import {
  failed_fund_request,
  get_activity_log,
  get_tracker_stats,
  no_virtual_account,
} from '../api';

export const get_tracker_stats_query = () => ({
  queryKey: ['trackerStats'],
  queryFn: async () => await get_tracker_stats(),
});

export const get_activity_log_query = (
  page: number,
  filter: string = '',
  filters: string = ''
) => ({
  queryKey: ['activityLog', page, filter, filters],
  queryFn: async () => await get_activity_log(page, filter, filters),
});

export const get_failed_fund_request_query = (
  page: number,
  page_no: number = 0,
  filter: string = '',
  filters: string = ''
) => ({
  queryKey: ['failedFundRequest', page, page_no, filter, filters],
  queryFn: async () =>
    await failed_fund_request(page, page_no, filter, filters),
});

export const get_no_virtual_account_query = (
  page: number,
  page_no: number = 0,
  filter: string = '',
  filters: string = ''
) => ({
  queryKey: ['noVirtualAccount', page, page_no, filter, filters],
  queryFn: async () => await no_virtual_account(page, page_no, filter, filters),
});

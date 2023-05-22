import { useQuery } from 'react-query';

import { get_tokens_query } from './api_tokens';
import {
  get_bank_list_query,
  refresh_banks_query,
  update_remote_banks_query,
} from './bank_list';
import { get_client_provider_query } from './client_provider';
import {
  get_client_list_query,
  get_client_stats_query,
  get_top_clients_by_trans_value_query,
  get_top_clients_searches_query,
  get_top_transactions_query,
  get_unverified_client_list_query,
} from './clients_stats';
import { create_a_client_query } from './create_user';
import {
  get_admin_query,
  get_audit_query,
  get_dashboard_stats_query,
} from './dash_board';
import { get_fund_request_query } from './fund_request';
import {
  get_a_client_query,
  get_client_transactions_query,
} from './single_client';
import {
  get_activity_log_query,
  get_failed_fund_request_query,
  get_no_virtual_account_query,
  get_tracker_stats_query,
} from './tracker_board';
import {
  get_trans_location_query,
  get_transaction_list_querry,
  get_transaction_stats_query,
} from './transaction_stats';
import {
  get_user_permissions_query,
  get_user_roles_query,
  get_users_query,
} from './user_management';

export const useGetTokens = (
  providerId: number,
  page: number,
  filter: string = '',
  filters: string = ''
) => {
  return useQuery(get_tokens_query(providerId, page, filter, filters));
};

export const useGetClientProvider = (
  page: number = 1,
  filter: string = '',
  filters: string = ''
) => {
  return useQuery(get_client_provider_query(page, filter, filters));
};

export const useGetFundRequest = (
  page: number = 1,
  page_size: number = 0,
  filter: string = '',
  filters: string = ''
) => {
  return useQuery(get_fund_request_query(page, page_size, filter, filters));
};

export const useGetClientList = (
  page: number = 1,
  page_size: number = 0,
  filter: string = '',
  filters: string = ''
) => {
  return useQuery(get_client_list_query(page, page_size, filter, filters));
};

export const useGetUnVerifiedClientList = (
  page: number = 1,
  page_size: number = 0,
  filter: string = '',
  filters: string = ''
) => {
  return useQuery(
    get_unverified_client_list_query(page, page_size, filter, filters)
  );
};

export const useGetClientsStats = () => {
  return useQuery(get_client_stats_query());
};

export const useGetTopClientByTransValue = () => {
  return useQuery(get_top_clients_by_trans_value_query());
};

export const useGetTopClientsSearch = () => {
  return useQuery(get_top_clients_searches_query());
};

export const useTopTransactions = () => {
  return useQuery(get_top_transactions_query());
};

export const useGetTransLocation = (
  page = 1,
  page_size: number = 0,
  filter: string = '',
  filters: string = ''
) => {
  return useQuery(get_trans_location_query(page, page_size, filter, filters));
};

export const useCreateClient = (user: any) => {
  // Type this
  return useQuery(create_a_client_query(user));
};

export const useGetAdmin = () => {
  return useQuery(get_admin_query());
};

export const useGetAudit = () => {
  return useQuery(get_audit_query());
};

export const useGetDashboardStats = () => {
  return useQuery(get_dashboard_stats_query());
};

export const useGetAClient = (clientId: number) => {
  return useQuery(get_a_client_query(clientId));
};

export const useGetClientTransaction = (
  clientId: number,
  pageNo: number,
  page_size: number = 0,
  filter: string = '',
  filters: string = ''
) => {
  return useQuery(
    get_client_transactions_query(clientId, pageNo, page_size, filter, filters)
  );
};

export const useGetActivityLog = (
  page: number = 1,
  filter: string = '',
  filters: string = ''
) => {
  return useQuery(get_activity_log_query(page, filter, filters));
};

export const useGetFailedFundRequest = (
  page: number = 1,
  page_size: number = 0,
  filter: string = '',
  filters: string = ''
) => {
  return useQuery(
    get_failed_fund_request_query(page, page_size, filter, filters)
  );
};

export const useGetNoVirtualAccount = (
  page: number = 1,
  page_size: number = 0,
  filter: string = '',
  filters: string = ''
) => {
  return useQuery(
    get_no_virtual_account_query(page, page_size, filter, filters)
  );
};

export const useGetTrackerStats = () => {
  return useQuery(get_tracker_stats_query());
};

export const useGetTransactionList = (
  page: number = 1,
  page_size: number = 0,
  filter: string = '',
  filters: string = ''
) => {
  return useQuery(
    get_transaction_list_querry(page, page_size, filter, filters)
  );
};

export const useGetTransactionStats = () => {
  return useQuery(get_transaction_stats_query());
};

export const useGetUsers = (
  page: number = 1,
  filter: string = '',
  filters: string = ''
) => {
  return useQuery(get_users_query(page, filter, filters));
};

export const useGetPermissions = () => {
  return useQuery(get_user_permissions_query());
};
export const useGetRoles = () => {
  return useQuery(get_user_roles_query());
};

export const useGetBankList = (
  page: number = 1,
  page_size: number = 0,
  filter: string = '',
  filters: string = ''
) => {
  return useQuery(get_bank_list_query(page, page_size, filter, filters));
};

export const useGetRefeshBanks = () => {
  return useQuery(refresh_banks_query());
};

export const useGetUpdateBanks = () => {
  return useQuery(update_remote_banks_query());
};

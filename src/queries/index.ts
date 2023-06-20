import { useQuery } from 'react-query';

import {
  get_a_client_query,
  get_approved_list_query,
  get_client_list_query,
  get_rejected_list_query,
  get_wait_list_query,
} from './clients_stats';

export const useGetClientList = (
  page: number = 1,
  page_size: number = 0,
  filter: string = '',
  filters: string = ''
) => {
  return useQuery(get_client_list_query(page, page_size, filter, filters));
};

export const useGetWaitList = (
  page: number = 1,
  page_size: number = 0,
  filter: string = '',
  filters: string = ''
) => {
  return useQuery(get_wait_list_query(page, page_size, filter, filters));
};

export const useGetApprovedtList = (
  page: number = 1,
  page_size: number = 0,
  filter: string = '',
  filters: string = ''
) => {
  return useQuery(get_approved_list_query(page, page_size, filter, filters));
};

export const useGetRejectedtList = (
  page: number = 1,
  page_size: number = 0,
  filter: string = '',
  filters: string = ''
) => {
  return useQuery(get_rejected_list_query(page, page_size, filter, filters));
};

export const useGetAClient = (clientId: number) => {
  return useQuery(get_a_client_query(clientId));
};

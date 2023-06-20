import {
  get_a_client,
  get_approved_list,
  get_client_list,
  get_rejected_list,
  get_wait_list,
} from '../api';

export const get_client_list_query = (
  page: number,
  page_size: number = 0,
  filter: string = '',
  filters: string = ''
) => ({
  queryKey: ['clientsList', page, page_size, filter, filters],
  queryFn: async () => await get_client_list(page, page_size, filter, filters),
});

export const get_wait_list_query = (
  page: number,
  page_size: number = 0,
  filter: string = '',
  filters: string = ''
) => ({
  queryKey: ['waitList', page, page_size, filter, filters],
  queryFn: async () => await get_wait_list(page, page_size, filter, filters),
});

export const get_approved_list_query = (
  page: number,
  page_size: number = 0,
  filter: string = '',
  filters: string = ''
) => ({
  queryKey: ['approvedList', page, page_size, filter, filters],
  queryFn: async () =>
    await get_approved_list(page, page_size, filter, filters),
});

export const get_rejected_list_query = (
  page: number,
  page_size: number = 0,
  filter: string = '',
  filters: string = ''
) => ({
  queryKey: ['rejectedList', page, page_size, filter, filters],
  queryFn: async () =>
    await get_rejected_list(page, page_size, filter, filters),
});

export const get_a_client_query = (clientId: number) => ({
  queryKey: ['singleClient', clientId],
  queryFn: async () => await get_a_client(clientId),
});

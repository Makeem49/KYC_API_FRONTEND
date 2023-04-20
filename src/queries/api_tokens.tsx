import { get_token_list } from '../api';
// import { create_token } from '../api';

export const get_tokens_query = (
  providerId: number,
  page: number,
  filter: string = '',
  filters: string = ''
) => ({
  queryKey: ['apiTokens', providerId, page, filter, filters],
  queryFn: async () => get_token_list(providerId, page, filter, filters),
});

// export const create_tokens_query = (providerId: any) => ({
//   queryKey: ['GenerateApiToken', providerId],
//   queryFn: async () => await create_token(providerId),
// });

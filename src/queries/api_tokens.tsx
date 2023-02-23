import { get_token_list } from '../api';
// import { create_token } from '../api';

export const get_tokens_query = (providerId: number) => ({
  queryKey: ['apiTokens', providerId],
  queryFn: async () => get_token_list(providerId),
});

// export const create_tokens_query = (providerId: any) => ({
//   queryKey: ['GenerateApiToken', providerId],
//   queryFn: async () => await create_token(providerId),
// });

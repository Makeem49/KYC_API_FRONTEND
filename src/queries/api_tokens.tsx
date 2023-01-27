import { get_token_list } from '../api';

export const get_tokens_query = (id: number) => ({
  queryKey: ['apiTokens', id],
  queryFn: async () => get_token_list(id),
});

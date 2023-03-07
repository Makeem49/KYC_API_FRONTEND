import { get_users } from '../api';

export const get_users_query = () => ({
  queryKey: ['users'],
  queryFn: async () => await get_users(),
});

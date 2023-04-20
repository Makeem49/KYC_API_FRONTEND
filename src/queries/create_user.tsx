import { create_user } from '../api';

export const create_a_client_query = (newUser: any) => ({
  queryKey: ['newUser', newUser],
  queryFn: async () => await create_user(newUser),
});

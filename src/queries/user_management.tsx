import { get_permissions, get_roles, get_users } from '../api';

export const get_users_query = (
  page: number,
  filter: string = '',
  filters: string = ''
) => ({
  queryKey: ['users', page, filter, filters],
  queryFn: async () => await get_users(page, filter, filters),
});

export const get_user_permissions_query = () => ({
  queryKey: ['usersPermissions'],
  queryFn: async () => await get_permissions(),
});

export const get_user_roles_query = () => ({
  queryKey: ['userRoles'],
  queryFn: async () => await get_roles(),
});

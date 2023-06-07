import { apiRequest } from '../../utils';

/**
 * =================================================================
 *
 * DASHBOARD CARDS API CALLS
 *
 * =================================================================
 */

/**
 * GET A LIST OF ALL THE CARDS
 * @returns
 */
export async function get_dashboard_stats(): Promise<ResponseSect | null> {
  const resp = await apiRequest.get('admin/stats/dashboard');

  if (!resp.data) return null;

  return resp.data as ResponseSect;
}

export async function get_dashboard_audit(): Promise<Audit | null> {
  const resp = await apiRequest.get('admin/transactions/audit?');

  if (!resp.data) return null;

  return resp.data.data as Audit;
}

/**
 * List all the registered users
 * @returns
 */
export async function get_admin_name(): Promise<User | null> {
  const resp = await apiRequest.get('users/admin');

  if (!resp.data) return null;

  const el = resp.data.data;
  return {
    id: el.id ?? '',
    firstName: el.firstName ?? '',
    lastName: el.lastName ?? '',
    username: el.username ?? '',
    name: el.name ?? '',
    email: el.email ?? '',
    roles: el.roles ?? '',
    permissions: el.permissions ?? '',
  } as User;
}

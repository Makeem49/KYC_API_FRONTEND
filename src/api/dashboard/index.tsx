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

/**
 * List all the registered users
 * @returns
 */
export async function get_admin_name(): Promise<User[]> {
  const resp = await apiRequest.get('users/admin');

  if (!resp.data) return [];

  if (resp.data.data.length < 1) return [];

  return resp.data.data.map(
    (el: any) =>
      ({
        id: el.id,
        firstName: el.firstName,
        lastName: el.lastName,
        username: el.username,
        name: el.name,
      } as User)
  );
}

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

// How to use
// (async() => {
//   const data = await get_dashboard_stats()

//   if(!data) return;

//   data.

// })()

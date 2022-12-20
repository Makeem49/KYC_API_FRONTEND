import { apiRequest } from '../../utils';

/**
 * =================================================================
 *
 * TRACKER CARDS API CALLS
 *
 * =================================================================
 */

/**
 * GET A LIST OF ALL THE CARDS
 * @returns
 */
export async function get_tracker_stats(): Promise<TrackerSect | null> {
  const resp = await apiRequest.get('admin/stats/tracker');
  if (!resp.data) return null;

  return resp.data as TrackerSect;
}

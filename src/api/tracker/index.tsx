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

export async function get_activity_log(): Promise<TrackerSect[]> {
  const resp = await apiRequest.get('logs/activities');

  return resp.data.data.map(
    (el: any) =>
      ({
        id: el.actor.id,
        key: el.actor.key,
        type: el.activity.type,
        action: el.activity.action,
        description: el.activity.description,
        actionTime: el.activity.actionTime.substr(0, 15),
        ref: el.activity.ref,
      } as TrackerSect)
  );
}

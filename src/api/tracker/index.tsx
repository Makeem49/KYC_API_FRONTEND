import { apiRequest, paramsSerializer } from '../../utils';

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

export async function get_activity_log(
  page: number,
  filter?: string,
  filters?: any
): Promise<{
  data: TrackerSect[];
  total: number;
  lastPage: number;
}> {
  const resp = await apiRequest.get(`logs/activities`, {
    params: {
      page,
      page_size: 10,
      filter: filter ?? '',
      ...filters,
    },
    paramsSerializer: paramsSerializer,
  });

  if (!resp.data)
    return {
      data: [],
      total: 0,
      lastPage: 1,
    };
  if (resp.data.data.length < 1)
    return {
      data: [],
      total: 0,
      lastPage: 1,
    };

  return {
    data: resp.data.data.map(
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
    ),
    total: resp.data.total,
    lastPage: resp.data.lastPage,
  };
}

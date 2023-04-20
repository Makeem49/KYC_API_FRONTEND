import { get_activity_log, get_tracker_stats } from '../api';

export const get_tracker_stats_query = () => ({
  queryKey: ['trackerStats'],
  queryFn: async () => await get_tracker_stats(),
});

export const get_activity_log_query = (
  page: number,
  filter: string = '',
  filters: string = ''
) => ({
  queryKey: ['activityLog', page, filter, filters],
  queryFn: async () => await get_activity_log(page, filter, filters),
});

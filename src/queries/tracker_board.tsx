import { get_tracker_stats, get_activity_log } from '../api';

export const get_tracker_stats_query = () => ({
  queryKey: ['trackerStats'],
  queryFn: async () => await get_tracker_stats(),
});

export const get_activity_log_query = () => ({
  queryKey: ['activityLog'],
  queryFn: async () => await get_activity_log(),
});

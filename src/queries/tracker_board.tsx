import { get_tracker_stats } from '../api';

export const get_tracker_stats_query = () => ({
  queryKey: ['trackerStats'],
  queryFn: async () => await get_tracker_stats(),
});

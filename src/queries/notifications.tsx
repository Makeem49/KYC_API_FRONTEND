import { get_notifications } from '../api/notifications';
import { fetchAll } from '../utils/functions';

export const get_notifications_query = (page: number) => ({
  queryKey: ['notifications', page],
  queryFn: async () => await fetchAll<Notifications>(get_notifications, 1),
});

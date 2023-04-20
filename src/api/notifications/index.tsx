import { apiRequest } from '../../utils';

export async function get_notifications(
  pageNo: number
): Promise<Notifications[]> {
  const resp = await apiRequest.get(`user-notifications/user?page=${pageNo}`);

  if (!resp.data) return [];
  if (resp.data.data.length < 1) return [];

  return resp.data.data.map(
    (el: any) =>
      ({
        id: el.id,
        title: el.title,
        summary: el.summary,
        module: el.module,
        targetId: el.targetId,
        userId: el.userId,
        isRead: el.isRead,
        createdAt: el.createdAt,
      } as Notifications)
  );
}

export async function mark_as_read(
  notificationId: number,
  isRead: boolean
): Promise<string> {
  const resp = await apiRequest.patch(`user-notifications/${notificationId}`, {
    isRead,
  });

  if (!resp.data) return 'unable to disable provider';
  return resp.data.message;
}

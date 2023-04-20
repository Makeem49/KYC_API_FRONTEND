import { get_dashboard_stats } from '../api';
import { get_logged_in_user } from '../api';
import { get_dashboard_audit } from '../api/dashboard';

export const get_dashboard_stats_query = () => ({
  queryKey: ['dashboardStats'],
  queryFn: async () => await get_dashboard_stats(),
});

export const get_admin_query = () => ({
  queryKey: ['adminName'],
  queryFn: async () => await get_logged_in_user(),
});

export const get_audit_query = () => ({
  queryKey: ['audit'],
  queryFn: async () => await get_dashboard_audit(),
});

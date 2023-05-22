import { apiRequest, paramsSerializer, shortDateFormatter } from '../../utils';
import { currentNumberFormatter, timeFormatter } from '../../utils/formatter';

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
          actionTime: el.activity.actionTime,
          time: timeFormatter(el.activity.actionTime),
          ref: el.activity.ref,
        } as TrackerSect)
    ),
    total: resp.data.total,
    lastPage: resp.data.lastPage,
  };
}

export async function failed_fund_request(
  page: number,
  page_size?: number,
  filter?: string,
  filters?: any
): Promise<{
  data: TrackerBoardLists[];
  total: number;
  lastPage: number;
}> {
  const resp = await apiRequest.get(`admin/fund-requests?status=Failed`, {
    params: {
      page,
      page_size: page_size ?? 0,
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
          id: el.id,
          createdAt: shortDateFormatter(el.createdAt),
          clientName: `${el.client.firstName} ${el.client.lastName}`,
          accountName: el.client.accountName,
          bankAccount: el.client.bankAccount,
          balance: el.client.balance,
          bankName: el.client.bankName,
          amount: currentNumberFormatter(el.amount),
          phoneNumber: el.client.phoneNumber,
          ref: el.ref,
          description: el.description,
          requestType: el.requestType,
          status: el.status,
        } as TrackerBoardLists)
    ),
    total: resp.data.total,
    lastPage: resp.data.lastPage,
  };
}

export async function no_virtual_account(
  page: number,
  page_size?: number,
  filter?: string,
  filters?: any
): Promise<{
  data: TrackerBoardLists[];
  total: number;
  lastPage: number;
}> {
  const resp = await apiRequest.get(`clients/no-virtual-account`, {
    params: {
      page,
      page_size: page_size ?? 0,
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
          id: el.id,
          createdAt: shortDateFormatter(el.createdAt),
          clientName: `${el.firstName} ${el.lastName}`,
          phoneNumber: el.phoneNumber,
          idCardType: el.idCardType,
          idCardNumber: el.idCardNumber,
          platformId: el.providers[0].clientProviderClient.platformId,
          location: el.location.name,
          isVerified: el.isVerified,
        } as TrackerBoardLists)
    ),
    total: resp.data.total,
    lastPage: resp.data.lastPage,
  };
}

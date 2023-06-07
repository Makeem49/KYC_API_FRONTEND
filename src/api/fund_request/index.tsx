import {
  apiRequest,
  commaformatter,
  paramsSerializer,
  toast,
} from '../../utils';
import { timeFormatter } from '../../utils/formatter';

export async function get_fund_request(
  page: number,
  page_size?: number,
  filter?: string,
  filters?: any
): Promise<{
  data: FundRequest[];
  total: number;
  lastPage: number;
}> {
  const resp = await apiRequest.get(
    `admin/fund-requests?status[]=Successful&status[]=Failed`,
    {
      params: {
        page,
        page_size: page_size ?? 0,
        filter: filter ?? '',
        ...filters,
      },
      paramsSerializer: paramsSerializer,
    }
  );

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
          createdAt: el.createdAt ?? '',
          time: timeFormatter(el.createdAt) ?? '',
          amount: commaformatter(el.amount) ?? '',
          ref: el.ref ?? '',
          description: el.description ?? '',
          requestType: el.requestType ?? '',
          status: el.status ?? '',
          clientName: `${el.client?.firstName ?? ''} ${
            el.client?.lastName ?? ''
          }`,
          phoneNumber: el.client?.phoneNumber ?? '',
        } as FundRequest)
    ),
    total: resp.data.total,
    lastPage: resp.data.lastPage,
  };
}

export async function get_pending_fund_request(
  page: number,
  page_size?: number,
  filter?: string,
  filters?: any
): Promise<{
  data: FundRequest[];
  total: number;
  lastPage: number;
}> {
  const resp = await apiRequest.get(`admin/fund-requests?status=Pending`, {
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
          createdAt: el.createdAt ?? '',
          time: timeFormatter(el.createdAt) ?? '',
          amount: commaformatter(el.amount) ?? '',
          ref: el.ref ?? '',
          description: el.description ?? '',
          requestType: el.requestType ?? '',
          status: el.status ?? '',
          clientName: `${el.client?.firstName ?? ''} ${
            el.client?.lastName ?? ''
          }`,
          phoneNumber: el.client?.phoneNumber ?? '',
        } as FundRequest)
    ),
    total: resp.data.total,
    lastPage: resp.data.lastPage,
  };
}

export async function approve_fund_request(
  id: number[]
): Promise<string | any> {
  try {
    const resp = await apiRequest.post('admin/fund-requests/approve', id);

    if (!resp.data) return 'unable to approve fund request';

    toast('success', `${resp.data.message}`);
    return resp.data.data;
  } catch (error: any) {
    toast('error', 'Unable to Aprrove Request', `${error.response.data.error}`);
  }
}

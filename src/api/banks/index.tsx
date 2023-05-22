import { apiRequest, paramsSerializer, toast } from '../../utils';

export async function get_banks(
  page: number,
  page_size?: number,
  filter?: string,
  filters?: any
): Promise<{
  data: Banks[];
  total: number;
  lastPage: number;
}> {
  const resp = await apiRequest.get(`admin/banks`, {
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
          name: el.name,
          code: el.code,
          paymentPortalCode: el.paymentPortalCode,
          countryCode: el.countryCode === 'NG' ? 'Nigeria' : '',
          createdAt: el.createdAt,
        } as Banks)
    ),
    total: resp.data.total,
    lastPage: resp.data.lastPage,
  };
}

export async function update_remote_banks(): Promise<any | null> {
  try {
    const resp = await apiRequest.get('admin/banks/update-remote-server');
    if (!resp) return null;

    toast('success', `${resp.data.message}`);
  } catch (error: any) {
    toast(
      'error',
      'Unable to update remote banks',
      `${error.response.data.message}`
    );
  }
}

export async function refresh_bank_list(): Promise<any | null> {
  try {
    const resp = await apiRequest.get('admin/banks/refresh-list');
    if (!resp) return null;

    if (resp && resp.status === 200) {
      toast('success', `${resp.data.message}`);
    }
  } catch (error: any) {
    console.log(error);
    toast('error', 'Unable to refresh banks', `${error.response.data.message}`);
  }
}

export async function edit_payment_portal_code(
  id: number,
  paymentPortalCode: string
): Promise<string | undefined> {
  try {
    const resp = await apiRequest.put(`admin/banks/${id}/update-pp-code`, {
      paymentPortalCode,
    });
    if (!resp.data) return 'unable to update';
    toast('success', 'Payment code updated successfully');
    return resp.data.message;
  } catch (error: any) {
    toast('error', 'Unable to Update', `${error.response.data.message}`);
  }
}

import { AxiosResponse } from 'axios';
import { apiRequest } from '../../utils';
import { shortDateFormatter, commaformatter } from '../../utils';

export function create_client(
  data: ClientIntegration[]
): Promise<AxiosResponse<any, any>> {
  return apiRequest.post('integrations/client', data);
}

/**
 * =================================================================
 *
 * CLIENT LIST API CALLS
 *
 * =================================================================
 */

/**
 * GET A LIST OF ALL CLIENT
 * @returns
 */

export async function get_client_list(): Promise<ClientList[]> {
  const resp = await apiRequest.get('clients');

  if (!resp.data) return [];
  if (resp.data.data.length < 1) return [];

  return resp.data.data.map(
    (el: any) =>
      ({
        id: el.id,
        firstName: el.firstName,
        lastName: el.lastName,
        phoneNumber: el.phoneNumber,
        bvn: el.bvn,
        idCardType: el.idCardType,
        isVerified: el.isVerified,
        isActive: el.isActive,
        balance: commaformatter(el.balance),
        createdAt: shortDateFormatter(el.createdAt),
        updatedAt: shortDateFormatter(el.updatedAt),
        accountId: el.accountId,
        providerId: el.providerId,
      } as ClientList)
  );
}

export async function get_client_stats(): Promise<ClientSSS | null> {
  const resp = await apiRequest.get('admin/stats/clients');
  if (!resp.data) return null;
  return resp.data as ClientSSS;
}

import {
  apiRequest,
  commaformatter,
  paramsSerializer,
  shortDateFormatter,
} from '../../utils';
import { checkCountryCode, timeFormatter } from '../../utils/formatter';

/**
 * =================================================================
 *
 * SINGLE CLIENT API CALL
 *
 * =================================================================
 */

/**
 *
 * @param clientId The ID of the provider
 * @returns
 */

export async function get_single_client(
  clientId: number,
  page: number,
  page_size?: number,
  filter?: string,
  filters?: any
): Promise<{
  data: SingleClient[];
  total: number;
  lastPage: number;
}> {
  const resp = await apiRequest.get(`transactions?clientId=${clientId}`, {
    params: {
      clientId,
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
          createdAt: shortDateFormatter(el.createdAt) ?? '',
          time: timeFormatter(el.createdAt) ?? '',
          amount: commaformatter(el.amount) ?? '',
          amountBefore: commaformatter(el.amountBefore) ?? '',
          amountAfter: commaformatter(el.amountAfter) ?? '',
          transactionType: el.transactionType ?? '',
          ref: el.ref.substr(0, 10) + '...' ?? '',
          channel: el.channel ?? '',
          description: el.description ?? '',
          comment: el.comment ? el.comment : '',
          status: el.status ?? '',
          sessionId: el.sessionId ?? '',
          isPlatformSynced: el.isPlatformSynced ? el.isPlatformSynced : '',
          updatedAt: el.updatedAt ?? '',
          deletedAt: el.deletedAt ? el.deletedAt : '',
          clientId: el.clientId ?? '',
          client: el.client ?? '',
          countryCode: checkCountryCode(el.client?.countryCode) ?? '',
        } as SingleClient)
    ),
    total: resp.data.total,
    lastPage: resp.data.lastPage,
  };
}

export async function get_a_client(
  clientId: number
): Promise<ClientBio | null> {
  const resp = await apiRequest.get(`clients/${clientId}`);

  if (!resp.data) return null;

  return resp.data.data as ClientBio;
}

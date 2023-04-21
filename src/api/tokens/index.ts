import { paramsSerializer, shortDateFormatter } from '../../utils';

import { apiRequest } from '../../utils';
// import { AxiosResponse } from 'axios';
import { t } from 'i18next';

/**
 * =================================================================
 *
 * API TOKENS API CALLS
 *
 * =================================================================
 */

/**
 *
 * @param providerId The ID of the provider
 * @returns
 */

export async function get_token_list(
  providerId: number,
  page: number,
  filter?: string,
  filters?: any
): Promise<{
  data: ClientProviderToken[];
  total: number;
  lastPage: number;
}> {
  const resp = await apiRequest.get(`api-tokens?providerId=${providerId}`, {
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
          id: el.id,
          createdAt: shortDateFormatter(el.createdAt),
          apiKey: el.apiKey.substr(0, 15) + '...',
          noOfRequests: el.noOfRequests ? el.noOfRequests : '0',
          lastUsedAt: el.lastUsedAt ? el.lastUsedAt : 'unavailable',
          isActive: el.isActive ? `${t('Active')}` : `${t('Inactive')}`,
        } as ClientProviderToken)
    ),
    total: resp.data.total,
    lastPage: resp.data.lastPage,
  };
}

/**
 *
 * @param providerId The ID of the provider
 * @returns
 */
export async function create_token(providerId: number): Promise<string> {
  const resp = await apiRequest.post('api-tokens', { providerId });
  if (!resp.data) return 'Unable to generate token';
  return resp.data.message;
}

/**
 *
 * @param tokenId The ID of the token
 * @param data Toggles the availability of the token
 * @returns
 */
export async function toggle_token_availability(
  tokenId: number,
  isActive: boolean
): Promise<string> {
  const resp = await apiRequest.put(`api-tokens/${tokenId}/enable-or-disable`, {
    isActive,
  });

  if (!resp.data) return 'unable to disable provider';
  return resp.data.message;
}

import { AxiosResponse } from 'axios';
import { apiRequest } from '../../utils';
import { shortDateFormatter } from '../../utils';

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
  providerId: number
): Promise<ClientProviderToken[]> {
  const resp = await apiRequest.get(`api-tokens?providerId=${providerId}`);

  if (!resp.data) return [];

  if (resp.data.data.length < 1) return [];

  return resp.data.data.map(
    (el: any) =>
      ({
        id: el.id,
        createdAt: shortDateFormatter(el.createdAt),
        apiKey: el.apiKey,
        lastUsedAt: shortDateFormatter(el.lastUsedAt),
        isActive: el.isActive,
      } as ClientProviderToken)
  );
}

/**
 *
 * @param providerId The ID of the provider
 * @returns
 */
export function create_token(
  providerId: number
): Promise<AxiosResponse<any, any>> {
  return apiRequest.post('api-tokens', { providerId });
}

/**
 *
 * @param tokenId The ID of the token
 * @param data Toggles the availability of the token
 * @returns
 */
export function toggle_token_availability(
  tokenId: string,
  data: { isActive: boolean }
): Promise<AxiosResponse<any, any>> {
  return apiRequest.put(`api-tokens/${tokenId}/enable-or-disable`, data);
}

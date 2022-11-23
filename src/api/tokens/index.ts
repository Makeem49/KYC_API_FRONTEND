import { AxiosResponse } from 'axios';
import { apiRequest } from '../../utils';

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
export function get_token_list(
  providerId: string
): Promise<AxiosResponse<any, any>> {
  return apiRequest.get(`api-tokens?providerId=${providerId}`);
}

/**
 *
 * @param providerId The ID of the provider
 * @returns
 */
export function create_token(
  providerId: string
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

import { AxiosResponse } from 'axios';
import { apiRequest } from '../../utils';

class APITokensCalls {
  /**
   *
   * @param providerId The ID of the provider
   * @returns
   */
  get_token_list(providerId: string): Promise<AxiosResponse<any, any>> {
    return apiRequest.get(`api-tokens?providerId=${providerId}`);
  }
  /**
   *
   * @param providerId The ID of the provider
   * @returns
   */
  create_token(providerId: string): Promise<AxiosResponse<any, any>> {
    return apiRequest.post('api-tokens', { providerId });
  }
  /**
   *
   * @param tokenId The ID of the token
   * @param data Toggles the availability of the token
   * @returns
   */
  toggle_token_availability(
    tokenId: string,
    data: { isActive: boolean }
  ): Promise<AxiosResponse<any, any>> {
    return apiRequest.put(`api-tokens/${tokenId}/enable-or-disable`, data);
  }
}

export const TokenAPIs = new APITokensCalls();

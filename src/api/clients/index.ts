import { AxiosResponse } from 'axios';
import { apiRequest } from '../../utils';

export function create_client(
  data: ClientIntegration[]
): Promise<AxiosResponse<any, any>> {
  return apiRequest.post('integrations/client', data);
}

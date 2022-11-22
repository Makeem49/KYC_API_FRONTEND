import { AxiosResponse } from 'axios';
import { apiRequest } from '../../utils';

class ClientProvidersDataAPICalls {
  /**
   * =================================================================
   *
   * CLIENT PROVIDERS API CALLS
   *
   * =================================================================
   */
  get_client_providers(): Promise<AxiosResponse<any, any>> {
    return apiRequest.get('client-providers');
  }

  /**
   *
   * @param data
   * "name":"Comx",
   * "code": "Comx",
   * "logo": "https://stackoverflow.com/questions/42370881/allow-string-to-be-null-or-empty-in-joi-and-express-validation",
   * "clientRepoUrl": "https://stackoverflow.com/questions/42370881/allow-string-to-be-null-or-empty-in-joi-and-express-validation",
   * "walletTransactionCallbackUrl": "https://stackoverflow.com/questions/42370881/allow-string-to-be-null-or-empty-in-joi-and-express-validation",
   * "inventoryPositionUrl": "https://stackoverflow.com/questions/42370881/allow-string-to-be-null-or-empty-in-joi-and-express-validation",
   * "inventoryTradeUrl": "https://stackoverflow.com/questions/42370881/allow-string-to-be-null-or-empty-in-joi-and-express-validation",
   * "transactionPhrase": "Workbench",
   * "checkWalletBalanceEnabled": true,
   * "bankTransferEnabled": true,
   * "clientTransferEnabled": true,
   * "checkInventoryPositionEnabled": true,
   * "tradeInventoryTransactionEnabled": true
   *
   * @returns
   */
  create_client_provider(
    data: ClientProvider
  ): Promise<AxiosResponse<any, any>> {
    return apiRequest.post('client-providers', data);
  }

  /**
   * =================================================================
   *
   * SINGLE CLIENT PROVIDER API CALLS
   *
   * =================================================================
   */
  /**
   *
   * @param id ID of the client
   * @returns
   */
  get_client_provider_details(id: string): Promise<AxiosResponse<any, any>> {
    return apiRequest.get(`client-providers/${id}`);
  }
  // /**
  //  *
  //  * @param id ID of the client
  //  * @returns
  //  */
  // get_client_provider_transactions(
  //   id: string
  // ): Promise<AxiosResponse<any, any>> {
  //   return apiRequest.get(`client-providers/${id}/transactions`);
  // }
  // /**
  //  *
  //  * @param id ID of the client
  //  * @param start Transactions start day
  //  * @param end Transactions end day
  //  */
  // get_client_provider_transactions_within_range(
  //   id: string,
  //   start: Date,
  //   end: Date
  // ): Promise<AxiosResponse<any, any>> {
  //   return apiRequest.get(`client-providers/${id}/transactions`);
  // }
  // /**
  //  *
  //  * @param id ID of the client
  //  * @returns
  //  */
  // get_client_provider_bank_info(id: string): Promise<AxiosResponse<any, any>> {
  //   return apiRequest.get(`client-providers/${id}/bank_info`);
  // }

  /**
   * Edit an existing client provider details
   *
   * @param id ID of the client
   * @param data Object containing information to be updated
   * @returns
   */
  edit_client_provider_info(
    id: string,
    data: Partial<ClientProvider>
  ): Promise<AxiosResponse<any, any>> {
    return apiRequest.put(`clients/${id}/`, data);
  }

  /**
   * Deactivate or activate a client provider
   * @param id ID of the client
   * @param data {isActive: true or false}
   * @returns
   */
  toggle_client_provider_status(
    id: string,
    data: { isActive: boolean }
  ): Promise<AxiosResponse<any, any>> {
    return apiRequest.put(`client-providers/${id}/enable-or-disable`, data);
  }

  /**
   * Get Clients under a client provider
   * @param id ID of the client
   * @returns
   */
  get_clients_under_provider(id: string): Promise<AxiosResponse<any, any>> {
    return apiRequest.get(`client-providers/${id}/clients`);
  }
}

export const ClientProvidersAPIs = new ClientProvidersDataAPICalls();

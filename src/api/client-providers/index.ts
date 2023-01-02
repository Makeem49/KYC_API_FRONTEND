import { AxiosResponse } from 'axios';
import { apiRequest, shortDateFormatter } from '../../utils';

/**
 * =================================================================
 *
 * CLIENT PROVIDERS API CALLS
 *
 * =================================================================
 */

/**
 * GET A LIST OF ALL CLIENT PROVIDERS
 * @returns
 */
export async function get_client_providers(): Promise<ClientProvider[]> {
  const resp = await apiRequest.get('client-providers');

  if (!resp.data) return [];

  if (resp.data.data.length < 1) return [];

  return resp.data.data.map(
    (el: any) =>
      ({
        id: el.id,
        createdAt: shortDateFormatter(el.createdAt),
        name: el.name,
        transactionPhrase: el.transactionPhrase,
        isActive: el.isActive,
      } as ClientProvider)
  );
}

/**
 *
 * @param data
 * {
 *    "name":"Comx",
 *    "code": "Comx",
 *    "logo": "https://stackoverflow.com/questions/42370881/allow-string-to-be-null-or-empty-in-joi-and-express-validation",
 *    "clientRepoUrl": "https://stackoverflow.com/questions/42370881/allow-string-to-be-null-or-empty-in-joi-and-express-validation",
 *    "walletTransactionCallbackUrl": "https://stackoverflow.com/questions/42370881/allow-string-to-be-null-or-empty-in-joi-and-express-validation",
 *    "inventoryPositionUrl": "https://stackoverflow.com/questions/42370881/allow-string-to-be-null-or-empty-in-joi-and-express-validation",
 *    "inventoryTradeUrl": "https://stackoverflow.com/questions/42370881/allow-string-to-be-null-or-empty-in-joi-and-express-validation",
 *    "transactionPhrase": "Workbench",
 *    "checkWalletBalanceEnabled": true,
 *    "bankTransferEnabled": true,
 *    "clientTransferEnabled": true,
 *    "checkInventoryPositionEnabled": true,
 *    "tradeInventoryTransactionEnabled": true
 *
 * }
 * @returns
 */
export async function create_client_provider(
  data: Partial<ClientProvider>
): Promise<string> {
  const resp = await apiRequest.post('client-providers', {
    name: data.name,
    code: data.code,
    clientRepoUrl: data.clientRepoUrl,
    walletTransactionCallbackUrl: data.walletTransactionCallbackUrl,
    inventoryPositionUrl: data.inventoryPositionUrl,
    transactionPhrase: data.transactionPhrase,
    image: data.image,
    checkWalletBalanceEnabled: data.checkWalletBalanceEnabled,
    bankTransferEnabled: data.bankTransferEnabled,
    clientTransferEnabled: data.clientTransferEnabled,
    checkInventoryPositionEnabled: data.checkInventoryPositionEnabled,
    tradeInventoryTransactionEnabled: data.tradeInventoryTransactionEnabled,
  });

  if (!resp.data) return 'Bad request. Unable to create client provider';

  return resp.data.message;
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
export async function get_client_provider_details(
  id: string
): Promise<ClientProvider | null> {
  const resp = await apiRequest.get(`client-providers/${id}`);

  if (!resp.data) return null;

  const { data }: { data: ClientProvider } = resp.data;

  return data;
}

/**
 *
 * @param id ID of the client
 * @returns
 */
export function get_client_provider_transactions(
  id: string
): Promise<AxiosResponse<any, any>> {
  return apiRequest.get(`client-providers/${id}/transactions`);
}

/**
 *
 * @param id ID of the client
 * @param start Transactions start day
 * @param end Transactions end day
 */
export function get_client_provider_transactions_within_range(
  id: string,
  start: Date,
  end: Date
): Promise<AxiosResponse<any, any>> {
  return apiRequest.get(`client-providers/${id}/transactions`);
}

/**
 *
 * @param id ID of the client
 * @returns
 */
export function get_client_provider_bank_info(
  id: string
): Promise<AxiosResponse<any, any>> {
  return apiRequest.get(`client-providers/${id}/bank_info`);
}

/**
 * Edit an existing client provider details
 *
 * @param id ID of the client
 * @param data Object containing information to be updated. Any or all of the following
 * {
 *    name: "";
 *    code: "string";
 *    logo: "string";
 *    clientRepoUrl: "string";
 *    walletTransactionCallbackUrl: "string";
 *    inventoryPositionUrl: "string";
 *    inventoryTradeUrl: "string";
 *    transactionPhrase: "string";
 *    checkWalletBalanceEnabled: true;
 *    bankTransferEnabled: true;
 *    clientTransferEnabled: true;
 *    checkInventoryPositionEnabled: true;
 *    tradeInventoryTransactionEnabled: true;
 * }
 * @returns
 */

export function edit_client_provider_info(
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
export function toggle_client_provider_status(
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
export function get_clients_under_provider(
  id: string
): Promise<AxiosResponse<any, any>> {
  return apiRequest.get(`client-providers/${id}/clients`);
}

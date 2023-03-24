import { AxiosResponse } from 'axios';
import { apiRequest, shortDateFormatter, toast } from '../../utils';

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

  return resp.data.data.map(
    (el: any) =>
      ({
        id: el.id,
        createdAt: shortDateFormatter(el.createdAt),
        name: el.name,
        transactionPhrase: el.transactionPhrase,
        apiKey: el.apiKey ? el.apiKey : 'Api Keys',
        isActive: el.isActive ? 'Active' : 'Inactive',
        noOfClients: el.noOfClients ? el.noOfClients : '',
        code: el.code ? el.code : '',
        logo: el.logo ? el.logo : '',
        clientRepoUrl: el.clientRepoUrl,
        walletTransactionCallbackUrl: el.walletTransactionCallbackUrl,
        inventoryPositionUrl: el.inventoryPositionUrl,
        inventoryTradeUrl: el.inventoryTradeUrl ? el.inventoryTradeUrl : '',
        locationsUrl: el.locationsUrl,

        loanCallbackUrl: el.loanCallbackUrl ? el.loanCallbackUrl : '',
        countryCode: el.countryCode,
        // checkWalletBalanceEnabled: el.checkWalletBalanceEnabled
        //   ? el.checkWalletBalanceEnabled
        //   : '',
        // bankTransferEnabled: el.bankTransferEnabled
        //   ? el.bankTransferEnabled
        //   : '',
        // clientTransferEnabled: el.clientTransferEnabled
        //   ? el.clientTransferEnabled
        //   : '',
        checkInventoryPositionEnabled: el.checkInventoryPositionEnabled,
        tradeInventoryTransactionEnabled: el.tradeInventoryTransactionEnabled,
        requestHeaders: el.requestHeaders,
        allowAutoApproveFundRequest: el.allowAutoApproveFundRequest,
        createdBy: el.createdBy,
        image: el.image ? el.image : '',

        clientProviderToken: el.clientProviderToken
          ? el.clientProviderToken
          : '',

        updatedAt: el.updatedAt,
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
): Promise<string | undefined> {
  try {
    const resp = await apiRequest.post('client-providers', {
      name: data.name,
      code: data.code,
      logo: data.logo,
      clientRepoUrl: data.clientRepoUrl,
      walletTransactionCallbackUrl: data.walletTransactionCallbackUrl,
      inventoryPositionUrl: data.inventoryPositionUrl,
      inventoryTradeUrl: data.inventoryTradeUrl,
      locationsUrl: data.locationsUrl,
      loanCallbackUrl: data.loanCallbackUrl,
      transactionPhrase: data.transactionPhrase,
      checkInventoryPositionEnabled: data.checkInventoryPositionEnabled,
      tradeInventoryTransactionEnabled: data.tradeInventoryTransactionEnabled,
      requestHeaders: {
        API_KEY: 'kUvOHKMrkd',
        REQUEST_TS: new Date().toISOString(),
        HASH_KEY: 'TNiD1NXGW0Pk8Gou7XfuHSpi8SBJRYIA',
      },
      allowAutoApproveFundRequest: data.allowAutoApproveFundRequest,
      countryCode: data.countryCode,
    });

    if (!resp.data) return 'Bad request. Unable to create client provider';
    toast('success', 'Client Provider created successfully');
    return resp.data.message;
  } catch (error: any) {
    toast('error', 'Unable to login', `${error.response.data.error}`);
  }
}

export async function edit_client_provider_info(
  id: number,
  data: Partial<ClientProvider>
): Promise<string | undefined> {
  try {
    const resp = await apiRequest.put(`client-providers/${id}`, {
      id: data.id,
      name: data.name,
      code: data.code,
      logo: data.logo,
      clientRepoUrl: data.clientRepoUrl,
      walletTransactionCallbackUrl: data.walletTransactionCallbackUrl,
      inventoryPositionUrl: data.inventoryPositionUrl,
      inventoryTradeUrl: data.inventoryTradeUrl,
      locationsUrl: data.locationsUrl,
      loanCallbackUrl: data.loanCallbackUrl,
      transactionPhrase: data.transactionPhrase,
      checkInventoryPositionEnabled: data.checkInventoryPositionEnabled,
      tradeInventoryTransactionEnabled: data.tradeInventoryTransactionEnabled,
      requestHeaders: data.requestHeaders,
      allowAutoApproveFundRequest: data.allowAutoApproveFundRequest,
      countryCode: data.countryCode,
    });
    if (!resp.data) return 'unable to create user';
    toast('success', 'Provider updated successfully');
    return resp.data.message;
  } catch (error: any) {
    toast('error', 'Unable to login', `${error.response.data.error}`);
  }
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

/**
 * Deactivate or activate a client provider
 * @param id ID of the client
 * @param data {isActive: true or false}
 * @returns
 */
export async function toggle_client_provider_status(
  id: number,
  isActive: boolean
): Promise<string> {
  const resp = await apiRequest.put(
    `client-providers/${id}/enable-or-disable`,
    { isActive }
  );
  if (!resp.data) return 'unable to disable provider';
  return resp.data.message;
}

/**
 * Get Clients under a client provider
 * @param id ID of the client
 * @returns
 */
export function get_clients_under_provider(
  id: string
): Promise<AxiosResponse<string>> {
  return apiRequest.get(`client-providers/${id}/clients`);
}

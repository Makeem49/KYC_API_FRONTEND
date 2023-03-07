import { AxiosResponse } from 'axios';
import { apiRequest } from '../../utils';
import { shortDateFormatter } from '../../utils';
import {
  checkCountryCode,
  currentNumberFormatter,
} from '../../utils/formatter';

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

export async function get_client_list(pageNo: number): Promise<ClientList[]> {
  const resp = await apiRequest.get(`clients?page=${pageNo}`);

  if (!resp.data) return [];
  if (resp.data.data.length < 1) return [];

  return resp.data.data.map(
    (el: any) =>
      ({
        id: el.id,
        createdAt: shortDateFormatter(el.createdAt),
        clientName: `${el.firstName} ${el.lastName}`,
        balance: currentNumberFormatter(el.balance),
        phoneNumber: el.phoneNumber,
        isActive: el.isActive ? 'Active' : 'Inactive',
        providerName: el.providers[0].name,
        isVerified: el.isVerified ? 'Verified' : 'Unverified',
        valueOfTransactions: el.valueOfTransactions
          ? el.valueOfTransactions
          : ',',
        providerId: el.providers[0].id,
        countryCode: checkCountryCode(el.countryCode),
        platformId: el.providers[0].clientProviderClient.platformId,
        // platformId: el.providers.map(
        //   (el: any) => `${el[0].clientProviderClient.platformId}`
        // ),

        // firstName: el.firstName,
        // lastName: el.lastName,
        // clientId: el.providers.map(
        //   (el: any) => el.clientProviderClient.clientId
        // ),
        // platformId: el.platformId ? el.platformId : '',
        // bvn: el.bvn,
        // idCardType: el.idCardType,
        // isVerified: el.isVerified,
        //
        // updatedAt: shortDateFormatter(el.updatedAt),
        // accountId: el.accountId ? el.accountId : '',
        // providerId: el.providerId ? el.providerId : '',
      } as ClientList)
  );
}

export async function get_client_stats(): Promise<ClientSSS | null> {
  const resp = await apiRequest.get('admin/stats/clients');
  if (!resp.data) return null;
  return resp.data as ClientSSS;
}
export async function get_top_clients_by_search(): Promise<ClientSSS[] | null> {
  const resp = await apiRequest.get('admin/stats/clients');
  if (!resp.data) return null;

  return resp.data.topClientsBySearch.map((el: any) => ({
    id: el.id,
    platformId: el.platformId,
    firstName: el.firstName,
    lastName: el.lastName,
    otherNames: el.otherNames,
    phoneNumber: el.phoneNumber,
    noOfTransactions: el.noOfTransactions,
    valueOfTransactions: el.valueOfTransactions,
    searchAppearances: el.searchAppearances,
  }));
}

export async function get_top_clients_by_transactions(): Promise<
  ClientSSS[] | null
> {
  const resp = await apiRequest.get('admin/stats/clients');
  if (!resp.data) return null;

  return resp.data.topClientsByNoOfTransactions.map((el: any) => ({
    id: el.id,
    platformId: el.platformId,
    firstName: el.firstName,
    lastName: el.lastName,
    otherNames: el.otherNames,
    phoneNumber: el.phoneNumber,
    noOfTransactions: el.noOfTransactions,
    valueOfTransactions: el.valueOfTransactions,
    searchAppearances: el.searchAppearances,
  }));
}

export async function get_clients_by_value_of_transactions(): Promise<
  ClientSSS[] | null
> {
  const resp = await apiRequest.get('admin/stats/clients');
  if (!resp.data) return null;
  return resp.data.topClientsByValueOfTransactions.map((el: any) => ({
    id: el.id,
    platformId: el.platformId,
    firstName: el.firstName,
    lastName: el.lastName,
    otherNames: el.otherNames,
    phoneNumber: el.phoneNumber,
    noOfTransactions: el.noOfTransactions,
    valueOfTransactions: el.valueOfTransactions,
    searchAppearances: el.searchAppearances,
  }));
}

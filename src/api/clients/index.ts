import { AxiosResponse } from 'axios';
import { t } from 'i18next';

import { apiRequest, paramsSerializer, shortDateFormatter } from '../../utils';
import { currentNumberFormatter } from '../../utils/formatter';

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

export async function get_client_list(
  page: number,
  page_size?: number,
  filter?: string,
  filters?: any
): Promise<{
  data: ClientList[];
  total: number;
  lastPage: number;
}> {
  const resp = await apiRequest.get(`clients`, {
    params: {
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
          createdAt: shortDateFormatter(el.createdAt),
          clientName: `${el.firstName} ${el.lastName}`,
          balance: currentNumberFormatter(el.balance),
          phoneNumber: el.phoneNumber,
          isActive: el.isActive ? `${t('Active')}` : `${t('Inactive')}`,
          providerName: el.providers[0].name,
          isVerified: el.isVerified ? `${t('Verified')}` : `${t('Unverified')}`,
          valueOfTransactions: el.valueOfTransactions
            ? el.valueOfTransactions
            : ',',
          platformId: el.providers[0].clientProviderClient.platformId,
          location: el.location.name,
        } as ClientList)
    ),
    total: resp.data.total,
    lastPage: resp.data.lastPage,
  };
}

export async function get_unverified_client_list(
  page: number,
  page_size?: number,
  filter?: string,
  filters?: any
): Promise<{
  data: ClientList[];
  total: number;
  lastPage: number;
}> {
  const resp = await apiRequest.get(`client-providers/1/onboarding/logs`, {
    params: {
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
          clientName: `${el.payload.firstName} ${el.payload.lastName}` ?? '',
          phoneNumber: el.phoneNumber ?? '',
          platformId: el.platformId ?? '',
          comment: el.comment ?? '',
          status: el.status ?? '',
          providerName: el.client_provider.name ?? '',
        } as ClientList)
    ),
    total: resp.data.total,
    lastPage: resp.data.lastPage,
  };
}

export async function get_client_stats(): Promise<ClientSSS | null> {
  const resp = await apiRequest.get('admin/stats/clients');
  if (!resp.data) return null;
  return resp.data as ClientSSS;
}
export async function get_top_clients_by_search(): Promise<ClientSSS[] | null> {
  const resp = await apiRequest.get('admin/stats/clients?page_size=10');
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
  const resp = await apiRequest.get('admin/stats/clients?page_size=10');
  if (!resp.data) return null;

  return resp.data.topClientsByNoOfTransactions.map((el: any) => ({
    id: el.id ?? 0,
    platformId: el.platformId ?? '',
    firstName: el.firstName ?? '',
    lastName: el.lastName ?? '',
    otherNames: el.otherNames ?? '',
    phoneNumber: el.phoneNumber ?? '',
    noOfTransactions: el.noOfTransactions ?? '',
    valueOfTransactions: el.valueOfTransactions ?? '',
    searchAppearances: el.searchAppearances ?? '',
  }));
}

export async function get_clients_by_value_of_transactions(): Promise<
  ClientSSS[]
> {
  const resp = await apiRequest.get('admin/stats/clients?page_size=10');
  if (!resp.data) return [];
  return resp.data.topClientsByValueOfTransactions.map((el: any) => ({
    id: el.id ?? 0,
    platformId: el.platformId ?? '',
    firstName: el.firstName ?? '',
    lastName: el.lastName ?? '',
    otherNames: el.otherNames ?? '',
    phoneNumber: el.phoneNumber ?? '',
    noOfTransactions: el.noOfTransactions ?? '',
    valueOfTransactions: el.valueOfTransactions ?? '',
    searchAppearances: el.searchAppearances ?? '',
  }));
}

import { AxiosResponse } from 'axios';
import { t } from 'i18next';

import { timeFormatter } from './../../utils/formatter';
import { paramsSerializer, shortDateFormatter } from '../../utils';
import { apiRequest } from '../../utils';
import {
  checkCountryCode,
  currentNumberFormatter,
} from '../../utils/formatter';

/**
 * =================================================================
 *
 * TRANSACTION API CALLS
 *
 * =================================================================
 */

/**
 * Get the transactions summary information
 * @returns
 */
export function get_transactions_overview(): Promise<AxiosResponse<any, any>> {
  return apiRequest.get('transactions');
}

/**
 * List all the transactions
 *
 * @returns
 */
export async function get_all_transactions(
  page: number,
  page_size?: number,
  filter?: string,
  filters?: any
): Promise<{
  data: TransactionList[];
  total: number;
  lastPage: number;
}> {
  const resp = await apiRequest.get(`transactions`, {
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
          time: timeFormatter(el.createdAt),
          clientName: `${el.client.firstName} ${el.client.lastName}` ?? '',
          sessionId: el.sessionId.substr(0, 15) + '' ?? '',
          amount: currentNumberFormatter(el.amount) ?? '',
          transactionType: el.transactionType ?? '',
          description: el.description ?? '',
          status: el.status ? `${t('Active')}` : `${t('Inactive')}`,
          countryCode: checkCountryCode(el.client.countryCode) ?? '',
          clientId: el.clientId ? el.clientId : '',
        } as TransactionList)
    ),
    total: resp.data.total,
    lastPage: resp.data.lastPage,
  };
}

export async function get_trans_locations(
  page: number,
  page_size?: number,
  filter?: string,
  filters?: any
): Promise<{
  data: LocationStats[];
  total: number;
  lastPage: number;
}> {
  const resp = await apiRequest.get(`admin/transactions/locations`, {
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
          id: el.id ?? 0,
          code: el.code ?? '',
          name: el.name ?? '',
          state: el.state ?? '',
          total_transactions_value: el.total_transactions_value ?? '0',
          transactions_count: el.transactions_count ?? '0',
          total_clients: el.total_clients ?? '0',
        } as LocationStats)
    ),
    total: resp.data.total,
    lastPage: resp.data.lastPage,
  };
}

/**
 * Get all the transactions statistics
 *
 * @returns
 */
export async function get_transaction_stats(): Promise<TransactionSect | null> {
  const resp = await apiRequest.get('admin/stats/transactions');

  if (!resp.data) return null;

  return resp.data as TransactionSect;
}

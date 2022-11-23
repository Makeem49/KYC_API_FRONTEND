import { AxiosResponse } from 'axios';
import { apiRequest } from '../../utils';

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
export function get_all_transactions(): Promise<AxiosResponse<any, any>> {
  return apiRequest.get('transactions');
}

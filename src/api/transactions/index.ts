import { AxiosResponse } from 'axios';
import { apiRequest } from '../../utils';

class TransactionsDataAPICalls {
  /**
   * =================================================================
   *
   * TRANSACTION API CALLS
   *
   * =================================================================
   */
  get_transactions_overview(): Promise<AxiosResponse<any, any>> {
    return apiRequest.get('transactions');
  }
  get_all_transactions(): Promise<AxiosResponse<any, any>> {
    return apiRequest.get('transactions');
  }
}

export const TransactionsAPIs = new TransactionsDataAPICalls();

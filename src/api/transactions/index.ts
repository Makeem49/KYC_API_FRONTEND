import { AxiosResponse } from 'axios';
import { apiRequest } from '../../utils';
import { shortDateFormatter } from '../../utils';

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
export async function get_all_transactions(): Promise<TransactionList[]> {
  const resp = await apiRequest.get('transactions');

  return resp.data.data.map(
    (el: any) =>
      ({
        id: el.id,
        createdAt: shortDateFormatter(el.createdAt),
        clientName: `${el.client.firstName} ${el.client.lastName}`,
        amount: el.amount,
        transactionType: el.transactionType,
        status: el.status,
        channel: el.channel,
        amountBefore: el.amountBefore,
        amountAfter: el.amountAfter,
        description: el.description,
        comment: el.comment ? el.comment : '',

        sessionId: el.sessionId,
        ref: el.ref,
        isPlatformSynced: el.isPlatformSynced ? el.isPlatformSynced : '',

        updatedAt: el.updatedAt,
        deletedAt: el.deletedAt ? el.deletedAt : '',
        clientId: el.clientId ? el.clientId : '',

        clientBalance: el.client.balance,
        clientPlatformId: el.client.platformId,
      } as TransactionList)
  );
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

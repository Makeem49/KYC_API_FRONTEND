import { apiRequest } from '../../utils';
import { shortDateFormatter } from '../../utils';

/**
 * =================================================================
 *
 * SINGLE CLIENT API CALL
 *
 * =================================================================
 */

/**
 *
 * @param clientId The ID of the provider
 * @returns
 */

export async function get_single_client(
  clientId: number
): Promise<SingleClient[]> {
  const resp = await apiRequest.get(`transactions?clientid=${clientId}`);
  if (!resp.data) return [];

  if (resp.data.data.length < 1) return [];

  return resp.data.data.map(
    (el: any) =>
      ({
        id: el.id,
        amount: el.amount,
        transactionType: el.transactionType,
        channel: el.channel,
        amountBefore: el.amountBefore,
        amountAfter: el.amountAfter,
        description: el.description,
        comment: el.comment,
        status: el.status,
        sessionId: el.sessionId,
        ref: el.ref,
        isPlatformSynced: el.isPlatformSynced,
        createdAt: shortDateFormatter(el.createdAt),
        updatedAt: el.updatedAt,
        deletedAt: el.deletedAt,
        clientId: el.clientId,
        client: el.client,
      } as SingleClient)
  );
}

export async function get_a_client(
  clientId: number,
  providerId: number
): Promise<SingleClient[]> {
  const resp = await apiRequest.get(
    `client-providers/${providerId}/clients/${clientId}`
  );
  if (!resp.data) return [];

  if (resp.data.data.length < 1) return [];

  return resp.data.data.map(
    (el: any) =>
      ({
        id: el.id,
        amount: el.amount,
        transactionType: el.transactionType,
        channel: el.channel,
        amountBefore: el.amountBefore,
        amountAfter: el.amountAfter,
        description: el.description,
        comment: el.comment,
        status: el.status,
        sessionId: el.sessionId,
        ref: el.ref,
        isPlatformSynced: el.isPlatformSynced,
        createdAt: shortDateFormatter(el.createdAt),
        updatedAt: el.updatedAt,
        deletedAt: el.deletedAt,
        clientId: el.clientId,
        client: el.client,
      } as SingleClient)
  );
}

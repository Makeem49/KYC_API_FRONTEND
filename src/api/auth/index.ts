import { AxiosResponse } from 'axios';
import { apiRequest } from '../../utils';

/**
 * =================================================================
 *
 * AUTHENTICATION API CALLS
 *
 * =================================================================
 */

/**
 * Login to the system
 *
 * @param username existing username
 * @param password password
 */
export async function authenticate(
  username: string,
  password: string
): Promise<string | null> {
  const resp = await apiRequest.post('auth/login', { username, password });

  if (!resp.data) return null;

  if (resp.data.message !== 'Authenticated') return null;

  return resp.data.access_token;
}

export function register() {}

/**
 *
 * @param username username of the user
 */
export function forgot_password(
  username: string
): Promise<AxiosResponse<any, any>> {
  return apiRequest.post('auth/forgot-password', { username });
}

/**
 *
 * @param username username of the user
 * @param new_password  new password
 * @param confirm_password confirm password to be equal to the new password
 * @returns
 */
export function reset_password(
  username: string,
  new_password: string,
  confirm_password: string
): Promise<AxiosResponse<any, any>> {
  return apiRequest.post('auth/reset-password', {
    username,
    new_password,
    confirm_password,
  });
}

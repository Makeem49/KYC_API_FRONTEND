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
export function login(
  username: string,
  password: string
): Promise<AxiosResponse<any, any>> {
  return apiRequest.post('auth/login', { username, password });
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

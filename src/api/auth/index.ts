import { AxiosResponse } from 'axios';

import { apiRequest, toast } from '../../utils';

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
export async function authenticate(username: string, password: string) {
  try {
    const resp = await apiRequest.post('auth/login', { username, password });

    if (!resp.data) return null;

    if (resp.data.message !== 'Authenticated') return null;

    return resp.data;
  } catch (error: any) {
    if (error.response) {
      // This error was caused by a server response that returned a non 2xx status code
      const message = error.message ? error.message : 'Unknown error';
      toast('error', 'Unable to login', message);
    } else if (error.code === 'ERR_NETWORK') {
      // This error was caused by a network error

      toast('error', 'Unable to login', 'no internet connection');
    } else {
      // This error was caused by something else
      toast('error', 'Unable to login', 'Something went wrong');
    }
  }
}

/**
 * Activate user on the system
 *
 * @param username existing username
 * @param password password
 */
export async function activateUser(
  data: Partial<ActivateUser>
): Promise<string> {
  try {
    const resp = await apiRequest.post('auth/activate-account', {
      username: data.username,
      password: data.password,
      token: data.token,
    });

    if (!resp.data) return 'Bad request. Unable to activate account';
    if (resp && resp.status === 200) {
      toast('success', 'User account activated successfully');
    }

    return resp.data.message;
  } catch (error: any) {
    if (error.response) {
      // This error was caused by a server response that returned a non 2xx status code
      const message = error.message ? error.message : 'Unknown error';
      toast('error', 'Activation failed', message);
    } else if (error.code === 'ERR_NETWORK') {
      // This error was caused by a network error

      toast('error', 'no internet connection');
    } else {
      // This error was caused by something else
      toast('error', 'Something went wrong');
    }
    return error;
  }
}

/**
 * Request reset to password
 *
 * @param email existing email
 *
 */
export async function request_password_reset(
  data: Partial<ActivateUser>
): Promise<string> {
  try {
    const resp = await apiRequest.post('auth/request-password-reset', {
      email: data.email,
    });

    if (resp && resp.status === 200) {
      toast(
        'success',
        'Please check your mail',
        'A password reset link will be sent to you shortly'
      );
    }
    if (!resp.data) return 'Bad request. Unable to reset password';

    return resp.data.message;
  } catch (error: any) {
    if (error.response) {
      // This error was caused by a server response that returned a non 2xx status code
      const message = error.message ? error.message : 'Unknown error';
      toast('error', 'Unable to process request', message);
    } else if (error.code === 'ERR_NETWORK') {
      // This error was caused by a network error

      toast('error', 'no internet connection');
    } else {
      // This error was caused by something else
      toast('error', 'Something went wrong');
    }
    return error;
  }
}

/**
 * Reset user password on the system
 *
 * @param username existing username
 * @param password password
 */
export async function reset__user_Password(
  data: Partial<ActivateUser>
): Promise<string> {
  try {
    const resp = await apiRequest.post('auth/reset-password', {
      username: data.username,
      password: data.password,
      token: data.token,
    });

    if (!resp.data) return 'Bad request. Unable to process request';

    if (resp && resp.status === 200) {
      toast('success', 'Password reset was successful');
    }

    return resp.data.message;
  } catch (error: any) {
    if (error.response) {
      // This error was caused by a server response that returned a non 2xx status code
      const message = error.message ? error.message : 'Unknown error';
      toast('error', 'Password reset failed', message);
    } else if (error.code === 'ERR_NETWORK') {
      // This error was caused by a network error

      toast('error', 'no internet connection');
    } else {
      // This error was caused by something else
      toast('error', 'Something went wrong');
    }
    return error;
  }
}

/**
 * Get the details of the logged in user
 */
export async function get_logged_in_user(): Promise<Me | null> {
  const resp = await apiRequest.get('users/me');

  if (!resp.data) return null;

  if (resp.data.data.length < 1) return null;

  return {
    id: resp.data?.data?.id,
    firstName: resp.data?.data?.firstName,
    lastName: resp.data?.data?.lastName,
    username: resp.data?.data?.username,
    name: resp.data?.data?.name,
    email: resp.data?.data?.email,
    roles: resp.data?.data?.roles,
    permissions: resp.data?.data?.permissions,
  } as Me;
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
// export function reset_password(
//   username: string,
//   new_password: string,
//   confirm_password: string
// ): Promise<AxiosResponse<any, any>> {
//   return apiRequest.post('auth/reset-password', {
//     username,
//     new_password,
//     confirm_password,
//   });
// }

export async function reset_password(
  username: string,
  new_password: string,
  confirm_password: string
) {
  try {
    const resp = await apiRequest.post('auth/reset-password', {
      username,
      new_password,
      confirm_password,
    });
    if (!resp.data) return null;

    return resp;
  } catch (error: any) {
    if (error.response) {
      // This error was caused by a server response that returned a non 2xx status code
      const message = error.message ? error.message : 'Unknown error';
      toast('error', 'Password reset failed', message);
    } else if (error.code === 'ERR_NETWORK') {
      // This error was caused by a network error

      toast('error', 'Unable to login', 'no internet connection');
    } else {
      // This error was caused by something else
      toast('error', 'Unable to login', 'Something went wrong');
    }
  }
}
export function request_password_reset_setttings(
  email: string
): Promise<AxiosResponse<any, any>> {
  return apiRequest.post('auth/request-password-reset', {
    email,
  });
}

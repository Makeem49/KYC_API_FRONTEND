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
 * @param email existing email
 * @param password password
 */
export async function authenticate(email: string, password: string) {
  try {
    const resp = await apiRequest.post('users/token/', { email, password });

    if (!resp.data) return null;

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
export async function createNewUser(
  data: Partial<ActivateUser>
): Promise<string> {
  try {
    const resp = await apiRequest.post('users/signup/', {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
    });

    if (resp && resp.status === 400) {
      toast('error', resp.data.email[0]);
    }
    if (resp && resp.status === 201) {
      toast('success', resp.data.email[0]);
    }

    return resp.data.message;
  } catch (error: any) {
    if (error.response) {
      // This error was caused by a server response that returned a non 2xx status code
      const message = error.message ? error.message : 'Unknown error';
      toast('error', 'Activation failed');
      return message;
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

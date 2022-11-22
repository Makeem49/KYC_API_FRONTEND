import { AxiosResponse } from 'axios';
import { apiRequest } from '../../utils';

class Auth {
  /**
   * Login to the system
   *
   * @param username existing username
   * @param password password
   */
  login(username: string, password: string): Promise<AxiosResponse<any, any>> {
    return apiRequest.post('auth/login', { username, password });
  }

  register() {}

  forgot_password() {}

  reset_password() {}
}

export const AuthAPIs = new Auth();

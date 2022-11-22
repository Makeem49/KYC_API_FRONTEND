import { AxiosResponse } from 'axios';
import { apiRequest } from '../../utils';

class UsersDataAPICalls {
  get_users(): Promise<AxiosResponse<any, any>> {
    return apiRequest.get('users');
  }
  /**
   *
   * @param data
   *  "username": "gemdajs221",
   *  "email": "gemdajs221@gmail.com",
   *  "firstName": "Nasirudeen",
   *  "lastName": "Lasisi",
   *  "password": "passwprd@1",
   *  "permissions": [1, 2, 5],
   *  "roles": [1],
   *  "image": "path/to/image"
   *
   * @returns
   */
  create_user(data: User): Promise<AxiosResponse<any, any>> {
    return apiRequest.post('users', data);
  }
  /**
   *
   * @param username username of the user
   * @returns
   */
  get_user_details(username: string): Promise<AxiosResponse<any, any>> {
    return apiRequest.get(`users/${username}`);
  }
  /**
   *
   * @param username username of the user
   * @returns
   */
  delete_user(username: string): Promise<AxiosResponse<any, any>> {
    return apiRequest.delete(`users/${username}`);
  }
  update_user(
    username: string,
    data: Partial<User>
  ): Promise<AxiosResponse<any, any>> {
    return apiRequest.put(`users/${username}`, data);
  }
  /**
   * Deactivate or activate a user
   * @param username username of the user
   * @param data {isActive: true or false}
   * @returns
   */
  toggle_user_status(username: string, data: { isActive: boolean }) {
    return apiRequest.put(`users/${username}/enable-disable`, data);
  }
}

export const UsersAPIs = new UsersDataAPICalls();

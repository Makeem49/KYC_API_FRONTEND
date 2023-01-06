import { AxiosResponse } from 'axios';
import { User } from 'iconsax-react';
import { apiRequest, shortDateFormatter } from '../../utils';

/**
 * =================================================================
 *
 * USERS API CALLS
 *
 * =================================================================
 */

/**
 * List all the registered users
 * @returns
 */
export async function get_users(): Promise<User[]> {
  const resp = await apiRequest.get('users');

  if (!resp.data) return [];

  if (resp.data.data.length < 1) return [];

  return resp.data.data.map(
    (el: any) =>
      ({
        id: el.id,
        firstName: el.firstName,
        lastName: el.lastName,
        username: el.username,
        twoStepEnabled: false,
        isActive: el.isActive,
        email: el.email,
        image: el.image,
        permissions: el.permissions ?? [],
        roles: el.roles ?? [],
        createdAt: shortDateFormatter(el.createdAt),
        updatedAt: shortDateFormatter(el.updatedAt),
      } as User)
  );
}

/**
 * List all the Permissions
 * @returns
 */
export async function get_permissions(): Promise<User[]> {
  const resp = await apiRequest.get('roles-permissions/permissions');

  if (!resp.data) return [];

  if (resp.data.data.length < 1) return [];

  return resp.data.data.map(
    (el: any) =>
      ({
        id: el.id,
        name: el.name,
        description: el.description,
        group: el.group,
        createdAt: shortDateFormatter(el.createdAt),
        updatedAt: shortDateFormatter(el.updatedAt),
      } as User)
  );
}

/**
 * List all the Permissions
 * @returns
 */
export async function get_roles(): Promise<User[]> {
  const resp = await apiRequest.get('roles-permissions/roles');

  if (!resp.data) return [];

  if (resp.data.data.length < 1) return [];

  return resp.data.data.map(
    (el: any) =>
      ({
        id: el.id,
        name: el.name,
      } as User)
  );
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

export async function create_user(data: Partial<User>): Promise<string> {
  const resp = await apiRequest.post('users', {
    username: data.username,
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    password: data.password,
    permissions: data.permissions,
    roles: data.roles,
    image: data.image,
  });

  if (!resp.data) return 'unable to create user';

  return resp.data.message;
}
/**
 *
 * @param username username of the user
 * @returns
 */
export function get_user_details(
  username: string
): Promise<AxiosResponse<any, any>> {
  return apiRequest.get(`users/${username}`);
}

/**
 *
 * @param username username of the user
 * @returns
 */
export function delete_user(
  username: string
): Promise<AxiosResponse<any, any>> {
  return apiRequest.delete(`users/${username}`);
}
export function update_user(
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
export function toggle_user_status(
  username: string,
  data: { isActive: boolean }
) {
  return apiRequest.put(`users/${username}/enable-disable`, data);
}

import { AxiosResponse } from 'axios';

import {
  apiRequest,
  paramsSerializer,
  shortDateFormatter,
  toast,
} from '../../utils';

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

export async function get_users(
  page: number,
  filter?: string,
  filters?: any
): Promise<{
  data: User[];
  total: number;
  lastPage: number;
}> {
  const resp = await apiRequest.get('users', {
    params: {
      page,
      page_size: 10,
      filter: filter ?? '',
      ...filters,
    },
    paramsSerializer: paramsSerializer,
  });

  if (!resp.data)
    return {
      data: [],
      total: 0,
      lastPage: 1,
    };
  if (resp.data.data.length < 1)
    return {
      data: [],
      total: 0,
      lastPage: 1,
    };

  return {
    data: resp.data.data.map(
      (el: any) =>
        ({
          id: el.id,
          user: `${el.firstName} ${el.lastName}`,
          username: el.username,
          providers: el.providers.map((el: any) => el.name) ?? '',
          providerId: el.providers.map((el: any) => el.id) ?? '',
          lastLogin: el.lastLogin,
          twoStepEnabled: false,
          isActive: el.isActive ? 'Active' : 'Inactive',
          createdAt: el.createdAt,
          email: el.email,
          image: el.image,
          lastName: el.lastName,
          firstName: el.firstName,
          permissions: el.permissions.map((el: any) => el.id) ?? '',
          roles: el.roles.map((el: any) => el.id) ?? '',
          updatedAt: el.updatedAt,
        } as User)
    ),
    total: resp.data.total,
    lastPage: resp.data.lastPage,
  };
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
  try {
    const resp = await apiRequest.post('users', {
      username: data.username,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,

      permissions: data.permissions,
      providers: data.providers,
      roles: data.roles,
      image: data.image,
    });
    if (!resp.data) return 'unable to create user';
    if (resp && resp.status === 200) {
      toast('success', 'User account created successfully');
    }
    return resp.data.message;
  } catch (error: any) {
    if (error.response) {
      // This error was caused by a server response that returned a non 2xx status code
      const message = error.message ? error.message : 'Unknown error';
      toast('error', 'Unable to create a new user', message);
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

// export async function create_user(data: Partial<User>): Promise<string> {
//   try {
//     const resp = await apiRequest.post('users', {
//       username: data.username,
//       email: data.email,
//       firstName: data.firstName,
//       lastName: data.lastName,
//       password: data.password,
//       permissions: data.permissions,
//       providers: data.providers,
//       roles: data.roles,
//       image: data.image,
//     });

//     // console.log(resp.data, 'is okay');

//     if (!resp.data) return 'unable to create user';

//     return resp.data.message;
//   } catch (error: any) {
//     console.error(error);
//     toast('error', 'unable to create user', `${error.response.data.error}`);
//     return 'error creating user';
//   }
// }

export async function update_user(
  username: string,
  data: Partial<User>
): Promise<string> {
  try {
    const resp = await apiRequest.put(`users/${username}`, {
      username: data.username,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      permissions: data.permissions,
      providers: data.providers,
      roles: data.roles,
      image: data.image,
    });

    if (!resp.data) return 'unable to update user';

    return resp.data.message;
  } catch (error: any) {
    if (error.response) {
      // This error was caused by a server response that returned a non 2xx status code
      const message = error.message ? error.message : 'Unknown error';
      toast('error', 'Unable to update user', message);
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

export async function disable_enable_user(
  username: string,
  isActive: boolean
): Promise<string> {
  const resp = await apiRequest.put(`users/${username}/enable-disable`, {
    isActive,
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

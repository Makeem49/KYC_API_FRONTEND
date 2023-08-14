import { AxiosResponse } from "axios";

import { apiRequest, paramsSerializer, toast } from "../../utils";

export function create_client(
  data: ClientIntegration[]
): Promise<AxiosResponse<any, any>> {
  return apiRequest.post("integrations/client", data);
}

/**
 * =================================================================
 *
 * CLIENT LIST API CALLS
 *
 * =================================================================
 */

/**
 * GET A LIST OF ALL CLIENT
 * @returns
 */
export async function get_wait_list(
  page: number,
  page_size?: number,
  filter?: string,
  filters?: any
): Promise<{
  data: ClientList[];
  count: number;
  lastPage: number;
}> {
  const resp = await apiRequest.get(`waitlist/`, {
    params: {
      page,
      page_size: page_size ?? 0,
      filter: filter ?? "",
      ...filters,
    },
    paramsSerializer: paramsSerializer,
  });

  if (!resp.data)
    return {
      data: [],
      count: 0,
      lastPage: 1,
    };
  if (resp.data.results.length < 1)
    return {
      data: [],
      count: 0,
      lastPage: 1,
    };

  return {
    data: resp.data.results.map(
      (el: any) =>
        ({
          id: el.id,
          phone: el.phone,
          created_at: el.created_at,
          nationality: el.nationality,
          status: el.status,
        } as ClientList)
    ),
    count: resp.data.total,
    lastPage: resp.data.lastPage,
  };
}

export async function get_client_list(
  page: number,
  page_size?: number,
  filter?: string,
  filters?: any
): Promise<{
  data: ClientList[];
  count: number;
  lastPage: number;
}> {
  const resp = await apiRequest.get(`customers/?status=PENDING`, {
    params: {
      page,
      page_size: page_size ?? 0,
      filter: filter ?? "",
      ...filters,
    },
    paramsSerializer: paramsSerializer,
  });

  if (!resp.data)
    return {
      data: [],
      count: 0,
      lastPage: 1,
    };
  if (resp.data.results.length < 1)
    return {
      data: [],
      count: 0,
      lastPage: 1,
    };

  return {
    data: resp.data.results.map(
      (el: any) =>
        ({
          id: el.id,
          name: el.name,
          phone: el.phone,
          nationality: el.nationality,
          status: el.status,
          risk_level: el.risk_level,
        } as ClientList)
    ),
    count: resp.data.total,
    lastPage: resp.data.lastPage,
  };
}

export async function get_approved_list(
  page: number,
  page_size?: number,
  filter?: string,
  filters?: any
): Promise<{
  data: ClientList[];
  count: number;
  lastPage: number;
}> {
  const resp = await apiRequest.get(`customers/?status=APPROVE`, {
    params: {
      page,
      page_size: page_size ?? 0,
      filter: filter ?? "",
      ...filters,
    },
    paramsSerializer: paramsSerializer,
  });

  if (!resp.data)
    return {
      data: [],
      count: 0,
      lastPage: 1,
    };
  if (resp.data.results.length < 1)
    return {
      data: [],
      count: 0,
      lastPage: 1,
    };

  return {
    data: resp.data.results.map(
      (el: any) =>
        ({
          id: el.id,
          name: el.name,
          phone: el.phone,
          nationality: el.nationality,
          status: el.status,
          risk_level: el.risk_level,
          submission_date: el.submission_date,
        } as ClientList)
    ),
    count: resp.data.total,
    lastPage: resp.data.lastPage,
  };
}

export async function get_rejected_list(
  page: number,
  page_size?: number,
  filter?: string,
  filters?: any
): Promise<{
  data: ClientList[];
  count: number;
  lastPage: number;
}> {
  const resp = await apiRequest.get(`customers/?status=REJECT`, {
    params: {
      page,
      page_size: page_size ?? 0,
      filter: filter ?? "",
      ...filters,
    },
    paramsSerializer: paramsSerializer,
  });

  if (!resp.data)
    return {
      data: [],
      count: 0,
      lastPage: 1,
    };
  if (resp.data.results.length < 1)
    return {
      data: [],
      count: 0,
      lastPage: 1,
    };

  return {
    data: resp.data.results.map(
      (el: any) =>
        ({
          id: el.id,
          name: el.name,
          phone: el.phone,
          nationality: el.nationality,
          status: el.status,
          risk_level: el.risk_level,
          submission_date: el.submission_date,
        } as ClientList)
    ),
    count: resp.data.total,
    lastPage: resp.data.lastPage,
  };
}

export async function approve_user(
  id: number,
  status: string
): Promise<string> {
  try {
    const resp = await apiRequest.put(`customers/${id}/update/`, {
      status,
    });
    if (!resp.data) return "unable to create user";
    toast("success", resp.data.status);
    return resp.data.status;
  } catch (error: any) {
    if (error.response) {
      // This error was caused by a server response that returned a non 2xx status code
      const message = error.message ? error.message : "Unknown error";
      toast("error", "Unable to create a new user", message);
    } else if (error.code === "ERR_NETWORK") {
      // This error was caused by a network error

      toast("error", "no internet connection");
    } else {
      // This error was caused by something else
      toast("error", "Something went wrong");
    }
    return error;
  }
}

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

export async function get_a_client(
  clientId: number
): Promise<ClientBio | null> {
  const resp = await apiRequest.get(`customers/${clientId}`);

  if (!resp.data) return null;

  return resp.data as ClientBio;
}

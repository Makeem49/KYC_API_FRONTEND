import { apiRequest, toast } from "../../utils";

/**
 * =================================================================
 *
 * Risk Engine API CALLS
 *
 * =================================================================
 */

/**
 *
 * @returns
 */

export async function get_risk_engine(): Promise<{
  data: RiskEngine[];
}> {
  const resp = await apiRequest.get("risk_threshold");

  if (!resp.data)
    return {
      data: [],
    };

  return {
    data: resp.data.map(
      (el: any) =>
        ({
          id: el.id,
          account_balance: el.account_balance,
          employed: el.employed,
          minimum_monthly_salary: el.minimum_monthly_salary,
          country: el.country,
        } as RiskEngine)
    ),
  };
}

export async function update_risk_engine(data: any): Promise<string> {
  try {
    const resp = await apiRequest.post("risk_threshold/", {
      ...data,
    });
    if (!resp.data) return "unable to create client";

    toast("success", resp.data);

    return resp.data.message;
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

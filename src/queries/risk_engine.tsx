import { get_risk_engine } from "../api";

export const get_risk_engine_query = () => ({
  queryKey: ["riskEngine"],
  queryFn: async () => await get_risk_engine(),
});

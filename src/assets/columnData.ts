export const colClientsTable = [
  { value: 'date' },
  { value: 'client_name', label: "Client's Name", disabled: true },
  { value: 'wallet_balance', label: 'Wallet Balance', disabled: true },
  { value: 'email', disabled: true },
  { value: 'activity_stats', label: 'Activity Status' },
  { value: 'phone_number', label: 'Phone Number' },
  { value: 'status' },
];

export const colSingleClientTable = [
  { value: 'date' },
  { value: 'client_name', label: "Client's Name", disabled: true },
  { value: 'wallet_balance', label: 'Wallet Balance', disabled: true },
  { value: 'email', disabled: true },
  { value: 'activity_stats', label: 'Activity Status' },
  { value: 'phone_number', label: 'Phone Number' },
  { value: 'status' },
];

export const colTransactionTable = [
  { value: 'date' },
  { value: 'client_name', label: "Client's Name" },
  { value: 'trans_id', label: 'Transaction ID' },
  { value: 'value' },
  { value: 'trans_type', label: 'Transaction Type' },
  { value: 'sync_to_payment', label: 'Sync to Payment' },
  { value: 'status' },
];

export const colUserProviderTable = [
  { value: 'date' },
  { value: 'user' },
  { value: 'last_login', label: 'Last Login' },
  { value: 'two_step', label: 'Two Step' },
  { value: 'status' },
  { value: 'joined_date', label: 'Joined Date' },
];

export const colClientProviderTable = [
  { value: 'date_created', label: 'Date Created' },
  { value: 'api_keys', label: 'API Keys' },
  { value: 'number_of_request', label: 'Number of Request' },
  { value: 'last_used', label: 'Last Used' },
  { value: 'status' },
];

export const colApiTable = [
  { value: 'date' },
  { value: 'provider_name', label: 'Provider Name', disabled: true },
  { value: 'tansaction_phrase', label: 'Transaction Phrase', disabled: true },
  { value: 'number_of_clients', label: 'Number of Clients', disabled: true },
  { value: 'api_keys', label: 'API Keys' },
];

export const colActivityLogTable = [
  { value: 'name' },
  { value: 'email' },
  { value: 'gender' },
  { value: 'age' },
  { value: 'start_date', label: 'Start Date' },
  { value: 'status' },
];

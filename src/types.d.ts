type Client = {
  name: string;
  cid: string;
  email: string;
  phone: string;
  created: string;
  client_type: string;
  available_balance: string;
  status: string;
  address?: string;
};

type ModalControllerType = {
  show: boolean;
  close: () => void;
};

type DispatchRequest = {
  bags: number;
  client_name: string;
  cid: string;
  created: string;
  commodity: string;
  destination: string;
  dispatched_bags?: number;
  dispatched_weight?: number;
  grade?: string;
  is_ecn_dispatch: boolean;
  is_pickup: boolean;
  logistics_officer: string;
  otp: string;
  outstanding_weight: number;
  status: 'Pending' | 'Approved' | 'Rejected';
  type: 'client' | 'third_party' | 'inter-warehouse';
  transaction_id: string;
  warehouse: string;
  weight: number;
};

interface Logistics {
  status: 'Ongoing' | 'Assigned' | 'Completed';
  officer_name: string;
  rejection_reason: string;
}

interface DispatchClient {
  address: string;
  email: string;
  id: string;
  name: string;
  phone: string;
}

interface AccountHolder {
  bank_account_name: string;
  bank_account_number: string;
  bank_bank_name: string;
  bank_id: number;
}

interface Quote extends AccountHolder {
  handling_fee: number;
  transaction_fee: number;
  truck_cost: number;
}

interface LogisticPartner {
  id: number;
  amount: number;
  client: {
    id: number;
    cid: string;
    name: string;
  };
  pricing_method: 'Per Metric Tonne' | 'Per Truck' | 'Per Bag';
  quotation: {
    id: number;
    name: string;
    size: number | null;
    url: string;
  };
}

type ProcessedDispatchRequest = {
  id: number; // pk in resp.data
  approval_date: string | Date;
  bags: number;
  client: DispatchClient;
  destination: string;
  dispatched: {
    bags: number;
    weight: number;
    type: 'third_party' | 'client' | 'inter-warehouse';
  };
  is: {
    ecn: boolean;
    new: boolean;
    pickup: boolean;
    approval_complete: boolean; // object_approval_complete in resp.data
  };
  item: {
    code: string;
    name: string;
    type: 'Commodity' | 'Input' | 'Fees';
  };
  logistics: Logistics;
  otp: string;
  partners: LogisticPartner[];
  source: string;
  status: 'Ongoing' | 'Completed' | 'Assigned';
  quote: Quote;
  request_date: string | Date;
  transaction_id: string;
  volume: {
    total: number;
    outstanding: number;
  };
};

type Product = {
  id: number;
  code: string;
  name: string;
  type: 'Commodity' | 'Input' | 'Fees';
  unit_type: 'Bags' | 'Carton' | 'Bottle';
};

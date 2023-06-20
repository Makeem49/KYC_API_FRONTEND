type ModalControllerType = {
  show: boolean;
  close: () => void;
};

type WithChildren = {
  children: React.ReactNode;
};

type Banks = {
  id: number;
  name: string;
  code: string;
  paymentPortalCode: string;
  countryCode: string;
  createdAt: string;
};

type Client = {
  name: string;
  email: string;
  date_joined: string | Date;
  wallet_balance: number;
  active: boolean;
};

type ClientList = {
  id: number;
  name: string;
  verification_country: string;
  available_balance: string;
  status: string;
  last_year_income: number;
  average_monthly_income: number;
  account_age_months: number;
  monthly_amount: string;
  source: number;
  last_two_years_income: number;
  confidence: number;
  phone: string;
};

type ClientProvider = {
  id: number;
  name: string;
  code: string;
  logo: string;
  isActive: boolean | string;
  clientRepoUrl: string;
  walletTransactionCallbackUrl: string;
  inventoryPositionUrl: string;
  inventoryTradeUrl: string;
  locationsUrl: string;
  loanCallbackUrl: string;
  transactionPhrase: string;
  checkInventoryPositionEnabled: boolean;
  checkInventoryPositionEnabled: boolean;
  tradeInventoryTransactionEnabled: boolean;
  checkWalletBalanceEnabled: boolean;
  bankTransferEnabled: boolean;
  clientTransferEnabled: boolean;
  checkInventoryPositionEnabled: boolean;
  tradeInventoryTransactionEnabled: boolean;
  requestHeaders: {
    API_KEY: string;
    REQUEST_TS: string;
    HASH_KEY: string;
  };
  allowAutoApproveFundRequest: booleen;
  countryCode: string;
  header: any;

  countryCode: string;
  apiKey: string;
  createdBy: string;
  image: string;
  noOfClients: string;
  clientProviderToken: ClientProviderToken;
  createdAt: string | Date;
  updatedAt: string | Date;
};

type ActivateUser = {
  first_name: string;
  last_name: string;
  password: string;
  email: string;
  token: string;
};

type ClientIntegration = {
  firstName: string;
  lastName: string;
  otherNames: string;
  phoneNumber: string;
  bvn: string;
  idCardType: string;
  idCardNumber: string;
  image: string;
  platformId: string;
};

type FundRequest = {
  id: number;
  amount: string;
  ref: string;
  description: string;
  requestType: string;
  status: string;
  clientName: string;
  phoneNumber: string;
};

type User = {
  user: any;
  id: number;
  username: string;
  email: string;
  lastLogin: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password?: string;
  permissions: number[] | any;
  roles: number[] | any;
  providers: number[] | any;
  providerId: number[] | any;
  image: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  isActive: boolean | string;
  twoStepEnabled: boolean;
  isDefault: booleen;
  group: string;
  description: null;
  name: string;
  phone: string;
  onBoard: string[];
};

type Permission = {
  id: number;
  name: string;
  description: null;
  group: string;
  createdAt: string | Date;
  updatedAt: string | Date;
};

type Roles = {
  id: number;
  name: string;
  description: null;
  isDefault: booleen;
  createdAt: string | Date;
  updatedAt: string | Date;
  permissions: [];
};

type Audit = {
  inflow: number;
  outflow: number;
  withdrawals: number;
  deposit: number;
  transfer: number;
};

type LocationStats = {
  id: number;
  code: string;
  name: string;
  state: string;
  country: string;
  createdAt: string;
  updatedAt: string;
  total_transactions_value: string;
  transactions_count: string;
  total_clients: string;
};

type ClientProviderToken = {
  id: number;
  apiKey: string;
  providerId: string;
  lastUsedAt: string | null;
  isActive: boolean | string;
  noOfRequests: string;
  createdAt: string | Date;
  createdBy: string | null;
  updatedAt: string | Date;
  deletedAt: string | null;
  clientProviderId: number;
  tokenClientProviderId;
};

type clientProviderApiKey = {
  id: number;
  apiKey: string;
  providerId: string;
  lastUsedAt: string | null;
  isActive: boolean;
  createdAt: string | Date;
  createdBy: string | null;
  updatedAt: string | Date;
  deletedAt: string | null;
  clientProviderId: number;
  tokenClientProviderId;
};

type WX = {
  previousDay: number;
  today: number;
  active: number;
};

type CUSSD = {
  ussd: number;
  others: number;
};

type PerformanceOverview = {
  dayOfWeekAndDateInMonth: string;
  stats: {
    withdrawals: number;
    deposit: number;
    transfer: number;
  };
};

type LocationOverview = {
  name: string;
  value: string | number;
};

const serviceProviders = {
  'Globacom (GLO)': '',
  MTN: '',
  Airtel: '',
  '9Mobile': '',
  VMobile: '',
};

type ServiceProviderStatus = {
  name: keyof typeof serviceProviders;
  value: number;
};

type TransactionList = {
  id: number;
  amount: string;
  transactionType: string;
  transactionLogId: string;
  channel: string;
  amountBefore: string;
  amountAfter: string;
  description: string;
  comment?: null;
  status: boolean | string;
  sessionId: string;
  ref: string;
  isPlatformSynced?: null;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null;
  clientId?: null;
  clientName: string;
  clientPlatformId: string;
  clientBalance: number;
  firstName: string;
  lastName: string;
  countryCode: string;
  time: string;
};

type ClientBio = {
  id: number;
  first_name: string;
  last_name: string;
  middle_name: string;
  is_verify: boolean;
  bvn: string;
  phone: string;
  email: string;
  address: string;
  marital_status: string;
  photo_id: string;
  dob: string;
  gender: string;
  verification_country: string;
  customer_id: string;
  status: string;
  is_invited: bolean;
  created_at: string;
  bank_name: string;
  bank_id: string;
  available_balance: string;
  complete_onboarding: bolean;
};

type Notifications = {
  id: number;
  title: string;
  summary: string;
  module: string;
  targetId: string;
  userId: string;
  isRead: booleen;
  createdAt: string;
  updatedAt: string;
};

interface GenericContextInterface<T> {
  list: T;
  loading: boolean;
  refreshContext: () => void;
}

interface SpecificContextInterface<T> {
  list: T;
  item: T;
  loading: boolean;
  refreshContext: () => void;
}

interface SpecificClientInterface<T> {
  list: T;
  loading: boolean;
  refreshContext: () => void;
  stats: ClientSSS;
  topSearch: ClientSSS[];
  topTranc: ClientSSS[];
  topVal: ClientSSS[];
  pageNo: any;
  handleSearch: (value) => void;
}

interface SpecificTransactionInterface<T> {
  list: T;
  loading: boolean;
  refreshContext: () => void;
  stats: TransactionSect;
  handleSearch: (value) => void;
}

interface SpecificSingleInterface<T> {
  list: T;
  loading: boolean;
  refreshContext: () => void;
  stats: ClientBio;
  // handleSearch: (value) => void;
}

interface SpecificUserContextInterface<T> {
  list: T[];
  item: T[];
  itemTwo: T[];
  admin: T;
  loading: boolean;
  refreshContext: () => void;
}

interface SingleEntityCtx<T> {
  data: T;
  setData: React.Dispatch<React.SetStateAction<T>>;
}

interface ResponseSect {
  sectionOne: {
    users: WX;
    transactions: Partial<WX>;

    activeClients: {
      previousDay: number;
      today: number;
      active: number;
    };
    totalClients: {
      previousDay: number;
      today: number;
      active: number;
    };
    verifiedClients: {
      previousDay: number;
      today: number;
      active: number;
    };
    totalClients: Partial<Wx>;
    verifiedClients: Partial<Wx>;
    values: Partial<WX>;
    channels: {
      previousDay: CUSSD;
      today: CUSSD;
    };
  };
  performanceOverview: PerformanceOverview[];
  transactionStatus: {
    successful: number;
    failed: number;
    pending: number;
  };
  others: {
    walletBalance: number;
    numberOfUsers: number;
    deposit: number;
    withdrawals: number;
    transfer: number;
  };
  serviceProviderStatus: ServiceProviderStatus[];
}

interface ClientSSS extends Partial<ResponseSect> {
  [x: string]: any;
  topClientsBySearch: [
    platformId: string,
    firstName: string,
    lastName: string,
    otherNames: string,
    phoneNumber: string,
    noOfTransactions: number,
    valueOfTransactions: string,
    searchAppearances: number
  ];
  topClientsByNoOfTransactions: [
    platformId: string,
    firstName: string,
    lastName: string,
    otherNames: string,
    phoneNumber: string,
    noOfTransactions: number,
    valueOfTransactions: string,
    searchAppearances: number
  ];
  topClientsByValueOfTransactions: [
    platformId: string,
    firstName: string,
    lastName: string,
    otherNames: string,
    phoneNumber: string,
    noOfTransactions: number,
    valueOfTransactions: string,
    searchAppearances: number
  ];
  platformId: string;
  firstName: string;
  lastName: string;
  otherNames: string;
  phoneNumber: string;
  noOfTransactions: number;
  valueOfTransactions: string;
  searchAppearances: number;
}

interface TransactionSect {
  transactionCounts: {
    withdrawals: number;
    deposit: number;
    transfer: number;
  };

  transactionValues: {
    withdrawals: number;
    deposit: number;
    transfer: number;
  };

  dailyTransactions: {
    withdrawals: {
      today: number;
      yesterday: number;
    };
    deposit: {
      today: number;
      yesterday: number;
    };
    transfer: {
      today: number;
      yesterday: number;
    };
  };

  transactionLocations: LocationOverview[];
}

interface TrackerSect {
  overview: {
    noWallets: number;
    failedFunding: number;
    unSyncedWalletTransfer: number;
    noVirtualAccount: number;
    unsyncedWithdrawal: number;
  };
  id: number;
  key: string;
  type: string;
  action: string;
  description: string;
  actionTime: string;
  ref: string;
  time: string;
}

interface TrackerBoardLists {
  id: number;
  clientName: string;
  accountName: string;
  bankAccount: string;
  bankName: string;
  bankCode: string;
  idCardType: string;
  idCardNumber: string;
  platformId: string;
  location: string;
  phoneNumber: string;
  amount: string;
  ref: string;
  description: string;
  requestType: string;
  status: string;
  isVerified: string;
  balance: string;
  noOfTransactions: number;
  lastTransactionDate: string | Date;
  createdAt: string | Date;
  time: string | Date;
}

type Me = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  permissions: Permission[]; // change this
  roles: Roles[];
};

type Employee = {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  salary: number;
  startDate: string;
  signatureCatchPhrase: string;
  avatar: string;
};

type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

interface QueryArgs {
  page: number;
  searchQuery: string;
  filters?: Record<string, any>;
  fromDate?: Date;
  toDate?: Date;
}

interface SingleUser {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  isActive: boolean;
}

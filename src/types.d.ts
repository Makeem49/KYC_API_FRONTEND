type ModalControllerType = {
  show: boolean;
  close: () => void;
};

type WithChildren = {
  children: React.ReactNode;
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
  platformId: string;
  firstName: string;
  lastName: string;
  otherNames: string;
  phoneNumber: string;
  image: string;
  bvn: string;
  idCardType: string;
  idCardNumber: string;
  expiry: string;
  isVerified: boolean;
  isActive: boolean;
  bankAccount: null;
  balance: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
  accountId: number;
  clientProviderId: null;
  providerId: number;
  client: {
    firstName: string;
    lastName: string;
  };
};

type ClientProvider = {
  id: string;
  name: string;
  code: string;
  logo: string;
  isActive: boolean;
  clientRepoUrl: string;
  walletTransactionCallbackUrl: string;
  inventoryPositionUrl: string;
  inventoryTradeUrl: string;
  locationsUrl: string;
  transactionPhrase: string;
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
  createdBy: string;
  image: string;
  clientProviderToken: ClientProviderToken;
  createdAt: string | Date;
  updatedAt: string | Date;
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

type User = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password?: string;
  permissions: number[];
  roles: number[];
  image: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  isActive: boolean;
  twoStepEnabled: boolean;
  isDefault: booleen;
  group: string;
  description: null;
  name: string;
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

type ClientProviderToken = {
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
  date: string | Date;
  stats: {
    withdrawals: number;
    deposit: number;
    transfer: number;
  };
};

const serviceProviders = {
  Glo: '',
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
  channel: string;
  amountBefore: string;
  amountAfter: string;
  description: string;
  comment: null;
  status: string;
  sessionId: string;
  ref: string;
  isPlatformSynced: null;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
  clientId: null;
  client: {
    firstName: string;
    lastName: string;
  };
  firstName: string;
  lastName: string;
};

type SingleClient = {
  id: number;
  amount: string;
  transactionType: string;
  channel: string;
  amountBefore: string;
  amountAfter: string;
  description: string;
  comment: null;
  status: string;
  sessionId: string;
  ref: string;
  isPlatformSynced: null;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
  clientId: null;
  client: null;
};

interface GenericContextInterface<T> {
  list: T;
  loading: boolean;
  refreshContext: () => void;
}

interface SpecificContextInterface<T> {
  list: T;
  // item: T;
  loading: boolean;
  refreshContext: () => void;
}

interface SpecificUserContextInterface<T> {
  list: T;
  item: T;
  itemTwo: T;
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
  topClientsBySearch: [];
  topClientsByNoOfTransactions: [];
  topClientsByValueOfTransactions: [];
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

  transactionLocations: {
    withdrawals: number;
    deposit: number;
    transfer: number;
  };
}

interface TrackerSect {
  overview: {
    noWallets: number;
    failedFunding: number;
    unsyncedWalletTransfer: number;
    novirtualAccount: number;
    unsyncedWithdrawal: number;
  };
}

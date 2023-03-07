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
  countryCode: string;
  idCardType: string;
  idCardNumber: string;
  expiry: string;
  isVerified: boolean | string;
  isActive: boolean | string;
  bankAccount?: null;
  balance: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null;
  accountId: number;
  clientProviderId?: number;
  providerId: number;
  providerName: string;
  isVerified: boolean | string;
  clientId: number;
  valueOfTransactions: string;
  clientName: string;
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
  username: string;
  password: string;
  token: string;
  email: string;
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
  image: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  isActive: boolean | string;
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

type SingleClient = {
  id: number;
  amount: string;
  transactionType: string;
  phoneNumber: string;
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
  countryCode: string;
};

type ClientBio = {
  accountId: number;
  balance: string;
  bankAccount: null;
  bvn: string;
  clientProviderId: null;
  createdAt: string;
  expiry: null;
  firstName: string;
  id: number;
  idCardNumber: string;
  idCardType: string;
  image: null;
  isActive: boolean;
  isVerified: boolean;
  lastName: string;
  lastSearchAppearance: string;
  locationId: number;
  noOfTransactions: number;
  otherNames: string;
  phoneNumber: string;
  platformId: string;
  providers: {
    map(arg0: (el: any) => any): React.ReactNode;
    clientProviderClient: {};
  };
  clientProviderClient: string[];
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

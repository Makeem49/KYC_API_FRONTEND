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
  transactionPhrase: string;
  checkWalletBalanceEnabled: boolean;
  bankTransferEnabled: boolean;
  clientTransferEnabled: boolean;
  checkInventoryPositionEnabled: boolean;
  tradeInventoryTransactionEnabled: boolean;
  createdBy: string;
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

interface GenericContextInterface<T> {
  list: T[];
  loading: boolean;
  refreshContext: () => void;
}

interface SingleEntityCtx<T> {
  data: T;
  setData: React.Dispatch<React.SetStateAction<T>>;
}

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

interface ResponseSect {
  sectionOne: {
    users: WX;
    transactions: Partial<WX>;
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
    totalWalletBalance: number;
    numberOfUsers: number;
    totalDeposit: number;
    totalWithdrawal: number;
  };
  serviceProviderStatus: ServiceProviderStatus[];
}

interface ClientSSS extends Partial<ResponseSect> {
  topClientsBySearch: [];
  topClientsByNoOfTransactions: [];
  topClientsByValueOfTransactions: [];
}

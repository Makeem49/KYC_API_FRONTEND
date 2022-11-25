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
  name: string;
  code: string;
  logo: string;
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
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  permissions: number[];
  roles: number[];
  image: string;
};

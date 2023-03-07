import { useQueryClient } from 'react-query';

const UseInvalidateAll = () => {
  const qc = useQueryClient();
  qc.invalidateQueries(['dashboardStats']);
  qc.invalidateQueries(['clientsList']);
  qc.invalidateQueries(['clientStats']);
  qc.invalidateQueries(['clientSearch']);
  qc.invalidateQueries(['clientsTopTransactions']);
  qc.invalidateQueries(['clientsByTransValue']);
  qc.invalidateQueries(['singleClient']);
  qc.invalidateQueries(['clientTransaction']);
  qc.invalidateQueries(['transactionList']);
  qc.invalidateQueries(['transactionStats']);
  qc.invalidateQueries(['users']);
  qc.invalidateQueries([' adminName']);

  return;
};

export default UseInvalidateAll;

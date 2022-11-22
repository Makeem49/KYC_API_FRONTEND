const Router = [
  {
    name: 'Dashboard',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adip',
    link: '/',
  },
  {
    name: 'Clients',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adip',
    link: '/clients',
  },
  {
    name: 'Inventory',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adip',
    link: '/inventory',
    children: [
      {
        name: 'GRNs',
        subtitle: 'Goods Received Notes ipsum dolor sit',
        link: '/inventory/grns',
      },
    ],
  },
  {
    name: 'Farmers',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adip',
    link: '/farmers',
  },
  {
    name: 'Logistics',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adip',
    link: '/logistics',
  },
  {
    name: 'Loans',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adip',
    link: '/loans',
    children: [
      {
        name: 'Booked Loans',
        subtitle: 'Goods Received Notes ipsum dolor sit',
        link: '/loans/booked-loans',
      },
      {
        name: 'Loan Reports',
        subtitle: 'Goods Received Notes ipsum dolor sit',
        link: '/loans/loan-reports',
      },
      {
        name: 'Repayments',
        subtitle: 'Goods Received Notes ipsum dolor sit',
        link: '/loans/repayments',
      },
    ],
  },
  {
    name: 'Financials',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adip',
    link: '/financials',
    children: [
      {
        name: 'Operational Expenses',
        subtitle: 'ipsum dolor sit',
        link: '/financials/operational-expenses',
      },
    ],
  },
  {
    name: 'Accounting',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adip',
    link: '/accounting',
  },
  {
    name: 'Cash Advance',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adip',
    link: '/cash-advance',
  },
  {
    name: 'Audit',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adip',
    link: '/audit',
  },
  {
    name: 'Invoice',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adip',
    link: '/invoice',
  },
  {
    name: 'System',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adip',
    link: '/system',
  },
  {
    name: 'Settings',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adip',
    link: '/settings',
  },
];

export const Routes = Router.sort((a, b) => a.name.localeCompare(b.name));

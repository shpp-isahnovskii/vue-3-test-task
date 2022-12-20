export const accessData = [
  {
    name: 'Warehouse requests',
    status: {
      view: false,
      create: false,
      approve: false,
      pay: false,
    },
  },
  {
    name: 'Purchase requests',
    status: {
      view: true,
      create: false,
      approve: false,
      pay: false,
    },
  },
  {
    name: 'Request for proposals',
    status: {
      view: true,
      create: false,
      approve: false,
      pay: null,
    },
  },
  {
    name: 'Purchase orders',
    status: {
      view: true,
      create: false,
      approve: false,
      pay: null,
    },
  },
  {
    name: 'Receipts',
    status: {
      view: true,
      create: false,
      approve: false,
      pay: null,
    },
  },
  {
    name: 'Invoices',
    status: {
      view: true,
      create: false,
      approve: false,
      pay: false,
    },
  },
  {
    name: 'Expenses',
    status: {
      view: true,
      create: false,
      approve: false,
      pay: false,
    },
  },
];

export const managementData = [
  'Configuration',
  'Suppliers and items',
  'Budgets',
  'Warehouse manager',
  'Reports',
];

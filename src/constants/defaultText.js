export const classesData = [
  {
    id: 1,
    label: 'Class 1',
    children: [
      {
        id: 11,
        label: 'Subclass 1-1',
        children: [
          {
            id: 111,
            label: 'Subclass 1-1-1',
          },
          {
            id: 112,
            label: 'Subclass 1-1-2',
          },
        ],
      },
      {
        id: 12,
        label: 'Subclass 1-2',
        children: [
          {
            id: 121,
            label: 'Subclass 1-2-1',
          },
          {
            id: 122,
            label: 'Subclass 1-2-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Class 2',
    children: [
      {
        id: 21,
        label: 'Subclass 2-1',
        children: [
          {
            id: 211,
            label: 'Subclass  2-1-1',
          },
          {
            id: 212,
            label: 'Subclass  2-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: 'Class 3',
  },
  {
    id: 4,
    label: 'Class 4',
  },
];

export const departmentsData = [
  {
    id: 1,
    label: 'Developers',
    children: [
      {
        id: 11,
        label: 'Second Sub-Developers',
        children: [
          {
            id: 111,
            label: '3d Sub-Developers',
            children: [
              {
                id: 1111,
                label: 'iOS & Android Devs',
              },
              {
                id: 1114,
                label: '4th Sub-Developers',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Class 3',
  },
  {
    id: 3,
    label: 'Class 4',
  },
];

export const dcfThreeData = [
  {
    id: 1,
    label: 'Class 1',
    children: [
      {
        id: 11,
        label: 'Subclass 1-1',
        children: [
          {
            id: 111,
            label: 'Subclass 1-1-1',
          },
          {
            id: 112,
            label: 'Subclass 1-1-2',
          },
        ],
      },
      {
        id: 12,
        label: 'Subclass 1-2',
        children: [
          {
            id: 121,
            label: 'Subclass 1-2-1',
          },
          {
            id: 122,
            label: 'Subclass 1-2-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Class 2',
    children: [
      {
        id: 21,
        label: 'Subclass 2-1',
        children: [
          {
            id: 211,
            label: 'Subclass  2-1-1',
          },
          {
            id: 212,
            label: 'Subclass  2-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: 'Class 3',
  },
  {
    id: 4,
    label: 'Class 4',
  },
];

export const tableData = [
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

export const pageContent =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
Lorem Ipsum has been the industry's standard dummy text ever since the\
1500s, when an unknown printer took a galley of type and scrambled it to\
make a type specimen book. It has survived not only five centuries, but\
also the leap into electronic typesetting, remaining essentially\
unchanged. It was popularised in the 1960s with the release of Letraset\
sheets containing Lorem Ipsum passages, and more recently with desktop\
publishing software like Aldus PageMaker including versions of Loremn\
Ipsum.";

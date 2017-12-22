export default [
  {
    title: 'Últimos:',
    items: [
      {
        key: 'last-7',
        title: '7 dias',
        date: () => -7,
      },
      {
        key: 'last-15',
        title: '15 dias',
        date: () => -15,
      },
      {
        key: 'last-30',
        title: '30 dias',
        date: () => -30,
      },
      {
        key: 'last-60',
        title: '60 dias',
        date: () => -60,
      },
    ],
  },
]

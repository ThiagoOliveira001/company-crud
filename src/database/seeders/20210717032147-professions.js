module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert('profession', [
      {
        id: 1,
        name: 'Desenvolvedor Junior',
      },
      {
        id: 2,
        name: 'Desenvolvedor Pleno',
      },
      {
        id: 3,
        name: 'Desenvolvedor Senior',
      },
      {
        id: 4,
        name: 'PO',
      },
      {
        id: 5,
        name: 'QA',
      },
      {
        id: 6,
        name: 'UX Designer',
      },
    ]),

  down: async (queryInterface) =>
    queryInterface.bulkDelete('profession', null, {}),
};

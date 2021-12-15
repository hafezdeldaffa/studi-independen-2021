'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert('Hewan', [
      {
        id: 1,
        nama: 'si kucing',
        namaSpesies: 'kucing',
        umur: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        nama: 'dodo',
        namaSpesies: 'kelinci',
        umur: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        nama: 'dodi',
        namaSpesies: 'sapi',
        umur: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

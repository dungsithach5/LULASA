'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Categories', [
      {
        id: 1,
        name: 'Syzygium',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Camellia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'P.betle',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Herbal',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface) {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};

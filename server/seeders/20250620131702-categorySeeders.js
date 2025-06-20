'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Syzygium',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Camellia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'P.betle',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
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

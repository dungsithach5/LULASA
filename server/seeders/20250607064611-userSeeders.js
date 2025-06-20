'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Sanyam Goyal',
        email: 'dungsithach14@gmail.com',
        password: await bcrypt.hash('123', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

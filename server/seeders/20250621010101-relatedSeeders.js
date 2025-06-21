'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
await queryInterface.bulkInsert('Related_products', [
      {
        product_id: 11,
        related_product_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 11,
        related_product_id: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 12,
        related_product_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Related_products', null, {});
  }
};

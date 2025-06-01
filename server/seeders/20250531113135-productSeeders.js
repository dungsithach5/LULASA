'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Product 1',
        short_desc: 'Experience the tranquility of lavender fields with our handcrafted soap. Made with pure lavender essential oil and dried lavender buds, this soap provides a gentle cleansing experience while calming your senses. The natural antibacterial properties of lavender help purify your skin, leaving it feeling refreshed and balanced.',
        long_desc:' This is a sample product description for Sanyam Goyal.',
        ingredients: 'Ingredient1, Ingredient2',
        price: 19.99,
        main_image_url: 'src/assets/img/Product/product1.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};

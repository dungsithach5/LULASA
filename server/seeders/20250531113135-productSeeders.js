'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Herbal Soap',
        short_desc: 'Experience the tranquility of lavender fields with our handcrafted soap. Made with pure lavender essential oil and dried lavender buds, this soap provides a gentle cleansing experience while calming your senses.',
        long_desc:'Each soap bar – a miniature herbal garden. The perfect combination of extracts from guava leaves, green tea, betel leaves with basil, lemongrass, mint and rosemary, Herbal Soap is a great choice for those who love the balance between purifying and nourishing the skin. The gentle, delicate herbal scent helps relax the mind, while nourishing the skin to be soft, smooth and healthy every day.',
        ingredients: 'Piper betle leaf extract & coconut oil.',
        price: 19.99,
        main_image_url: '/img/Product/product1.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};

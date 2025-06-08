'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Syzygium Soap ',
        short_desc: 'Experience the tranquility of lavender fields with our handcrafted soap. Made with pure lavender essential oil and dried lavender buds, this soap provides a gentle cleansing experience while calming your senses. The natural antibacterial properties of lavender help purify your skin, leaving it feeling refreshed and balanced.',
        long_desc:'Awaken your skin with the pure purity of Vietnamese Vối leaves. Blending the essence of fresh Vối leaves – a native plant famous for its antibacterial and anti-inflammatory properties – with coconut oil and organic shea butter, Syzygium Soap creates a natural, smooth foam that gently cleanses while still retaining moisture for the skin. The gentle, fresh scent of Vối leaves brings a feeling of relaxation and refreshment after each use.',
        ingredients: 'Vietnamese Syzygium nervosum extract, organic shea butter & coconut oil.',
        price: 19.99,
        main_image_url: '/public/img/Product/product4.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};

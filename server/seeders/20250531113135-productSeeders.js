'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Syzygium Soap',
        short_desc: 'Experience the tranquility of lavender fields with our handcrafted soap. Made with pure lavender essential oil and dried lavender buds, this soap provides a gentle cleansing experience while calming your senses.',
        long_desc:'Awaken your skin with the pure purity of Vietnamese Vối leaves. Blending the essence of fresh Vối leaves – a native plant famous for its antibacterial and anti-inflammatory properties – with coconut oil and organic shea butter, Syzygium Soap creates a natural, smooth foam that gently cleanses while still retaining moisture for the skin. The gentle, fresh scent of Vối leaves brings a feeling of relaxation and refreshment after each use.',
        ingredients: 'Vietnamese Syzygium nervosum extract, organic shea butter & coconut oil.',
        category_id: 1,
        price: 60.000,
        main_image_url: '/img/Product/product4.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Camellia Soap',
        short_desc: 'Experience the tranquility of lavender fields with our handcrafted soap. Made with pure lavender essential oil and dried lavender buds, this soap provides a gentle cleansing experience while calming your senses.',
        long_desc:'Gentle purification from pure green tea leaves. Camellia sinensis tea leaves, rich in antioxidants, combined with olive oil and macadamia oil in Camellia Soap create a soap that deeply cleanses, helps brighten skin and prevents aging. The characteristic refreshing scent of green tea brings a sense of peace, like an afternoon tea in a Japanese garden.',
        ingredients: 'Camellia sinensis leaf, olive oil & macadamia oil.',
        category_id: 2,
        price: 60.000,
        main_image_url: '/img/Product/product2.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'P.betle Soap',
        short_desc: 'Experience the tranquility of lavender fields with our handcrafted soap. Made with pure lavender essential oil and dried lavender buds, this soap provides a gentle cleansing experience while calming your senses.',
        long_desc:'Traditional Betel Leaf Essence – Superior Cleansing Solution Piper betle – a familiar leaf in traditional medicine – is fully harnessed in this soap bar for its powerful antibacterial and deodorizing properties. P. betle Soap provides a deep-cleansing sensation, making it especially suitable for oily, acne-prone skin or bodies prone to sweating. The nutrient-rich lather softens the skin without causing dryness.',
        ingredients: 'Piper betle leaf extract & coconut oil.',
        category_id: 3,
        price: 60.000,
        main_image_url: '/img/Product/product3.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: ' Herbal Soap',
        short_desc: 'Experience the tranquility of lavender fields with our handcrafted soap. Made with pure lavender essential oil and dried lavender buds, this soap provides a gentle cleansing experience while calming your senses.',
        long_desc:'Each soap bar – a miniature herbal garden. The perfect combination of extracts from guava leaves, green tea, betel leaves with basil, lemongrass, mint and rosemary, Herbal Soap is a great choice for those who love the balance between purifying and nourishing the skin. The gentle, delicate herbal scent helps relax the mind, while nourishing the skin to be soft, smooth and healthy every day.',
        ingredients: 'Syzygium, Camellia, Piper betle & essential herbal oils.',
        category_id: 4,
        price: 60.000,
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

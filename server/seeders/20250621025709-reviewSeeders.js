'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Reviews', [
      {
        product_id: 14,
        rating: 4,
        title: 'Soothing and effective',
        reviewer_name: 'Minh Chau',
        review_date: new Date('2025-06-19'),
        review_desc: 'Helps reduce my skin irritation after just a few days. Love the herbal fragrance!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 14,
        rating: 3,
        title: 'Nice but a bit drying',
        reviewer_name: 'Hoang Nam',
        review_date: new Date('2025-06-15'),
        review_desc: 'The soap smells great and feels natural, but it slightly dries my skin. I still like it overall.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 13,
        rating: 5,
        title: 'A must-have in my routine!',
        reviewer_name: 'Linh Pham',
        review_date: new Date('2025-06-20'),
        review_desc: 'I use it every night before bed. My skin has become noticeably smoother and cleaner.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};

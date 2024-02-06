'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {


    await queryInterface.bulkInsert('user',
    [
      {
        id:1,
        name:'hari',
        email:'haris@gmail.com',
        password:'12345678',
        created_at:new Date(),
        updated_at:new Date()
      },
      {
        id:2,
        name:'hari',
        email:'priya@gmail.com',
        password:'12345678',
        created_at:new Date(),
        updated_at:new Date()
      },
      {
        id:3,
        name:'hari',
        email:'hp@gmail.com',
        password:'12345678',
        created_at:new Date(),
        updated_at:new Date()
      }
    ],{});

    await queryInterface.bulkInsert('channel',
    [
      {
        id:1,
        name:'hari',
        user_id:1,
        created_at:new Date(),
        updated_at:new Date()
      },
      {
        id:2,
        name:'hari',
        user_id:2,
        created_at:new Date(),
        updated_at:new Date()
      },
      {
        id:3,
        name:'hari',
        user_id:3,
        created_at:new Date(),
        updated_at:new Date()
      }
    ],{});

    await queryInterface.bulkInsert('video',
    [
      {
        id:1,
        title:'hari',
        channel_id:1,
        created_at:new Date(),
        updated_at:new Date()
      },
      {
        id:2,
        title:'hari',
        channel_id:2,
        created_at:new Date(),
        updated_at:new Date()
      },
      {
        id:3,
        title:'hari',
        channel_id:3,
        created_at:new Date(),
        updated_at:new Date()
      }
    ],{});

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

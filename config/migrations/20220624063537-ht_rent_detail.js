'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'ht_rent_detail',
      {
        id: {
          type: Sequelize.CHAR(36),
          allowNull: false,
          defaultValue: Sequelize.literal('(uuid())'),
          primaryKey: true,
        },
        propertyId: {
          type: Sequelize.CHAR(36),
          allowNull: false,
          references: {
            model: 'ht_property',
            key: 'id',
          },
        },
        amount: {
          type: Sequelize.DOUBLE(10, 2),
          allowNull: true,
        },
        ats: {
          type: Sequelize.DOUBLE(10, 2),
          allowNull: true,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        deletedAt: {
          type: Sequelize.DATE,
          allowNull: true,
        },
      },
      {
        Sequelize,
        tableName: 'ht_rent_detail',
        timestamps: true,
        paranoid: true,
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'id' }],
          },
          {
            name: 'propertyId',
            using: 'BTREE',
            fields: [{ name: 'propertyId' }],
          },
        ],
      },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ht_rent_detail');
  },
};

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'ht_property',
      {
        id: {
          type: Sequelize.CHAR(36),
          allowNull: false,
          defaultValue: Sequelize.literal('(uuid())'),
          primaryKey: true,
        },
        schoolId: {
          type: Sequelize.CHAR(36),
          allowNull: false,
        },
        userId: {
          type: Sequelize.CHAR(36),
          allowNull: false,
        },
        propertyTypeId: {
          type: Sequelize.CHAR(36),
          allowNull: false,
          references: {
            model: 'ht_property_type',
            key: 'id',
          },
        },
        ownerId: {
          type: Sequelize.CHAR(36),
          allowNull: true,
        },
        name: {
          type: Sequelize.STRING(50),
          allowNull: true,
        },
        apartment: {
          type: Sequelize.STRING(30),
          allowNull: true,
        },
        address: {
          type: Sequelize.STRING(70),
          allowNull: true,
        },
        streetAddress: {
          type: Sequelize.STRING(30),
          allowNull: true,
        },
        phone: {
          type: Sequelize.STRING(16),
          allowNull: true,
        },
        rent: {
          type: Sequelize.DOUBLE(10, 2),
          allowNull: true,
        },
        isPrimary: {
          type: Sequelize.CHAR(1),
          allowNull: true,
          defaultValue: '0',
        },
        leaseExpiryDate: {
          type: Sequelize.DATEONLY,
          allowNull: true,
        },
        canTenantInitiate: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: 0,
        },
        status: {
          type: Sequelize.ENUM('Active'),
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
        tableName: 'ht_property',
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
            name: 'schoolId',
            using: 'BTREE',
            fields: [{ name: 'schoolId' }],
          },
          {
            name: 'userId',
            using: 'BTREE',
            fields: [{ name: 'userId' }],
          },
          {
            name: 'propertyTypeId',
            using: 'BTREE',
            fields: [{ name: 'propertyTypeId' }],
          },
          {
            name: 'ownerId',
            using: 'BTREE',
            fields: [{ name: 'ownerId' }],
          },
        ],
      },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ht_property');
  },
};

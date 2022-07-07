'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'ht_tenant_property',
      {
        id: {
          type: Sequelize.CHAR(36),
          allowNull: false,
          defaultValue: Sequelize.literal('(uuid())'),
          primaryKey: true,
        },
        tenantId: {
          type: Sequelize.CHAR(36),
          allowNull: false,
        },
        propertyId: {
          type: Sequelize.CHAR(36),
          allowNull: false,
          references: {
            model: 'ht_property',
            key: 'id',
          },
        },
        moveIn: {
          type: Sequelize.DATEONLY,
          allowNull: true,
        },
        moveOut: {
          type: Sequelize.DATEONLY,
          allowNull: true,
        },
        status: {
          type: Sequelize.ENUM('Active', 'Disengaged'),
          allowNull: false,
          defaultValue: 'Active',
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
        tableName: 'ht_tenant_property',
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
            name: 'tenantId',
            using: 'BTREE',
            fields: [{ name: 'tenantId' }],
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
    await queryInterface.dropTable('ht_tenant_property');
  },
};

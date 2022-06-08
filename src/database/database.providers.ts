import { Sequelize } from 'sequelize-typescript';
import { HtPropertyType } from './model/ht-property-type.model';
import { HtProperty } from './model/ht-property.model';
import { HtRentDetails } from './model/ht-rent-details.model';
import { HtTenantProperty } from './model/ht-tenant-property.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'ht-propertymanagement',
      });
      sequelize.addModels([
        HtPropertyType,
        HtProperty,
        HtRentDetails,
        HtTenantProperty,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

import { Sequelize } from 'sequelize-typescript';
import {
  HtProperty,
  HtPropertyType,
  HtRentDetail,
  HtTenantProperty,
} from './models';

export const databaseConnection = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'ht_propertymanagement',
      });
      sequelize.addModels([
        HtProperty,
        HtPropertyType,
        HtTenantProperty,
        HtRentDetail,
      ]);
      return sequelize;
    },
  },
];

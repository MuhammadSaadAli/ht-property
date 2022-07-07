#! /bin/bash

clear

read -p "Enter Application Name: " NAME

nest new "$NAME" --package-manager yarn

cd "$NAME" && yarn add @nestjs/microservices @grpc/grpc-js @grpc/proto-loader mysql2 sequelize sequelize-typescript

yarn add -D @types/sequelize

npm i -g sequelize-auto mysql2

read -p "Enter Database Name: " DB_NAME

# read -p "Models output path (Default: ./src/utils/models): " MODELS_PATH

# if [[ "$MODELS_PATH" ]]; then
#   sequelize-auto -o "$MODELS_PATH" -d "$DB_NAME" -h 10.200.200.24 -u root -p 3306 -x "WizTech123a#@!" -e mysql -l ts --cm p --cp c --cf k
# else
stg -D mysql -h 10.200.200.24 -p 3306 -d "$DB_NAME" -u root -x "WizTech123a#@!" --case pascal:camel --out-dir "./src/database/models" --clean
# fi

cd src && mkdir api && mkdir grpc-config && mkdir utils &&  cd database

echo """
import { Sequelize } from 'sequelize-typescript';

export const databaseConnection = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: '10.200.200.24',
        port: 3306,
        username: 'root',
        password: 'WizTech123a#@!',
        database: '$DB_NAME',
      });
      sequelize.addModels([/* Add Models Here */]);
      return sequelize;
    },
  },
];
""" >>database.provider.ts

echo """
import { Module } from '@nestjs/common';
import { databaseConnection } from './database.provider';

@Module({
  providers: [...databaseConnection],
  exports: [...databaseConnection],
})
export class DatabaseModule {}
""" >>database.module.ts

cd ..

echo """
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
""" >app.module.ts

echo "Application Generated Successfully"

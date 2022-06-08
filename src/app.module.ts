import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PropertyModule } from './property/property.module';

@Module({
  imports: [PropertyModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

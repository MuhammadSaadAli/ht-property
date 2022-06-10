import { Module } from '@nestjs/common';
import { HtPropertyProviders } from 'src/database/providers/providers';
import { HtPropertyController } from './ht-property.controller';
import { HtPropertyService } from './ht-property.service';

@Module({
  controllers: [HtPropertyController],
  providers: [HtPropertyService, ...HtPropertyProviders],
})
export class HtPropertyModule {}

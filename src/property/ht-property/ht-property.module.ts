import { Module } from '@nestjs/common';
import { HtPropertyProviders } from 'src/database/providers/ht-property.provider';
import { HtPropertyController } from './ht-property.controller';
import { HtPropertyService } from './ht-property.service';

@Module({
  controllers: [HtPropertyController],
  providers: [HtPropertyService, ...HtPropertyProviders],
})
export class HtPropertyModule {}

import { Module } from '@nestjs/common';
import { HtPropertyTypeService } from './ht-property-type.service';
import { HtPropertyTypeController } from './ht-property-type.controller';
import { HtPropertyTypeProviders } from 'src/database/providers/ht-property-type.provider';

@Module({
  providers: [HtPropertyTypeService, ...HtPropertyTypeProviders],
  controllers: [HtPropertyTypeController],
})
export class HtPropertyTypeModule {}

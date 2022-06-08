import { Module } from '@nestjs/common';
import { HtPropertyTypeModule } from './ht-property-type/ht-property-type.module';
import { HtPropertyModule } from './ht-property/ht-property.module';
import { HtRentDetailsModule } from './ht-rent-details/ht-rent-details.module';

@Module({
  controllers: [],
  providers: [],
  imports: [HtPropertyTypeModule, HtPropertyModule, HtRentDetailsModule],
  exports: [HtPropertyTypeModule],
})
export class PropertyModule {}

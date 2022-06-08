import { Module } from '@nestjs/common';
import { HtPropertyTypeModule } from './ht-property-type/ht-property-type.module';

@Module({
  controllers: [],
  providers: [],
  imports: [HtPropertyTypeModule],
  exports: [HtPropertyTypeModule],
})
export class PropertyModule {}

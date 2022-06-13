import { Module } from '@nestjs/common';
import { HtPropertyTypeModule } from './ht-property-type/ht-property-type.module';
import { HtPropertyModule } from './ht-property/ht-property.module';
import { HtRentDetailsModule } from './ht-rent-details/ht-rent-details.module';
import { HtTenantPropertyModule } from './ht-tenant-property/ht-tenant-property.module';
import { HtPropertyActivityLogModule } from './ht-property-activity-log/ht-property-activity-log.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    HtPropertyTypeModule,
    HtPropertyModule,
    HtRentDetailsModule,
    HtTenantPropertyModule,
    HtPropertyActivityLogModule,
  ],
  exports: [HtPropertyTypeModule],
})
export class ApiModule {}

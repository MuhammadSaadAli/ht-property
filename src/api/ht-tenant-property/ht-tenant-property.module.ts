import { Module } from '@nestjs/common';
import { HtTenantPropertyService } from './ht-tenant-property.service';
import { HtTenantPropertyController } from './ht-tenant-property.controller';
import { HtTenantPropertyProviders } from 'src/database/providers/providers';

@Module({
  providers: [HtTenantPropertyService, ...HtTenantPropertyProviders],
  controllers: [HtTenantPropertyController],
})
export class HtTenantPropertyModule {}

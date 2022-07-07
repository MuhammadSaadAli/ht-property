import { Module } from '@nestjs/common';
import { PropertyManagementModuel } from './property-management/property-management.module';

@Module({
  imports: [PropertyManagementModuel],
})
export class ApiModule {}
